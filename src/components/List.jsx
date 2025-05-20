import { ItemsList } from "../components/ItemsList"
import { getUserLists } from "../services/shoppingListService"
import { useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth"

export const List = () => {
    const { user } = useAuth()
    const [lists, setLists] = useState([])

    useEffect(() => {
        if (user) {
            getUserLists(setLists)
        }
    }, [user])
    return (
        <>
            {
                lists.map(e => (
                    <ItemsList key={e.id} list={e} />
                ))
            }
        </>
    )

}