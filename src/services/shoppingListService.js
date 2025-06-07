import { ref, push, set, onValue, update, remove } from "firebase/database";
import { getAnalytics, logEvent } from "firebase/analytics";
import { analytics, auth, db } from "../firebase";

export const getUserLists = (setList) => {
    const user = auth.currentUser
    if (!user) {
        console.log("User not logged in!")
        return
    }
    const dbRef = ref(db, "lists");
    logEvent(analytics, "User got the lists", {param1: 'wartosc'})
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val()
        if (data) {
            const results = [];

            Object.entries(data).forEach(([id, list]) => {
                const isOwner = list.owner === user.email;
                const isShared = list.sharedWith && Object.entries(list.sharedWith).some(([email, isShared]) => {
                    if(email.replace(",", ".") === user.email && isShared) {
                        return true
                    }
                })

                if (isOwner || isShared) {
                    results.push({ id, isOwner: isOwner, ...list });
                }
            });
            setList(results)
        }
    })
}

export const createShoppingList = async (userEmail, name) => {
    const listsRef = ref(db, "lists");

    const newList = {
        owner: userEmail,
        sharedWith: {},
        name: name,
        items: {}
    };
    console.log(userEmail)

    const newListRef = await push(listsRef, newList);
    return newListRef.key;
};

export const addItemToList = async (listId, itemName, quantity = 1) => {
    const itemsRef = push(ref(db, `lists/${listId}/items`));
    await set(itemsRef, {
        name: itemName,
        quantity,
        checked: false,
    });
};

export const toggleChecked = (listId, itemId, curCompleted) => {
    const user = auth.currentUser
    if (!user) {
        console.log("User not logged in!")
        return
    }

    const itemsRef = ref(db, `lists/${listId}/items/${itemId}`)

    update(itemsRef, { checked: !curCompleted })
        .then(() => console.log("Checked updated"))
        .catch((e) => console.error("Failed to update with: ", e))
}

export const deleteItem = (listId, itemId) => {
    const user = auth.currentUser
    if (!user) {
        console.log("User not logged in!")
    }

    const itemsRef = ref(db, `lists/${listId}/items/${itemId}`)

    remove(itemsRef)
        .then(() => console.log("Item removed!"))
        .catch((e) => console.error("Failed to remove: ", e))
}

export const deleteList = (listId) => {
    const user = auth.currentUser
    if (!user) {
        console.log("User not logged in!")
    }

    const listRef = ref(db, `lists/${listId}`)

    remove(listRef)
        .then(() => console.log("List removed!"))
        .catch((e) => console.error("Failed to remove: ", e))
}

export const shareListWithUser = async (listId, userEmail) => {
    const user = auth.currentUser
    if (!user) {
        console.log("User not logged in!")
    }

    const safeEmail = userEmail.replace(/\./g, ',');
    const sharedWithRef = ref(db, `lists/${listId}/sharedWith/${safeEmail}`);
    await set(sharedWithRef, true);

}

export const unshareListWithUser = async (listId, userEmail) => {
    const user = auth.currentUser
    if(!user){
        console.log("User not logged in!")
        return
    }

    const safeEmail = userEmail.replace(/\./g, ',');
    const userRef = ref(db, `lists/${listId}/sharedWith/${safeEmail}`);
    await remove(userRef);
}