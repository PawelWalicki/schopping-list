import { Button } from "@mui/material"
import { unshareListWithUser } from "../services/shoppingListService"

export const SharedUserRow = ({ user, userId, listId }) => {
    return (
        <div>
            {user.email} <Button onClick={() => unshareListWithUser(listId, userId)}>Unshare</Button>
        </div>
    )
}