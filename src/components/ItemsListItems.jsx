import { Checkbox, List, ListItem } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteItem, toggleChecked } from "../services/shoppingListService"

export const ItemsListItems = ({ list }) => {

    return (
        <div>
            {
                list.items ? <List
                    style={{
                        backgroundColor: "#eaeaea",
                        borderRadius: "5px"
                    }}>
                    {list.items ?
                        Object.entries(list.items).map(([itemId, item]) => (
                            <ListItem
                                key={itemId}
                            >
                                <Checkbox onChange={() => toggleChecked(list.id, itemId, item.checked)} checked={item.checked} />
                                <div onClick={() => toggleChecked(list.id, itemId, item.checked)}>{`${item.name} ${item.quantity}`}</div>
                                <IconButton sx={{ marginLeft: "auto" }} onClick={() => deleteItem(list.id, itemId)} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>

                        )) : null

                    }
                </List> : null
            }
        </div>
    )
}