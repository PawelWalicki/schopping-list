import { Button } from "@mui/material"
import { unshareListWithUser } from "../services/shoppingListService"

export const SharedUserRow = ({ userEmail, listId }) => {
    return (
        <div>
            {userEmail} <Button onClick={() => unshareListWithUser(listId, userEmail)}>Unshare</Button>
        </div>
    )
}