import './ItemsHeader.css'
import { deleteList } from "../services/shoppingListService"
import { Button } from '@mui/material'

export const ItemsHeader = ({ list }) => {
    return (
        <div className="title-Item-Box">
            <h2 className="title-Item">{list.name} </h2>
            <h3> {list.isOwner ? "Owner" : "Shared"}</h3>
            <Button
                className="button-Item"
                onClick={() => deleteList(list.id)} style={{
                    backgroundColor: "#f0a54a",
                    color: "#ffffff",
                }} >Delete list</Button>
        </div>
    )

}