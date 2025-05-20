import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import { createShoppingList } from "../services/shoppingListService"
import { useAuth } from "../hooks/useAuth"
import { LogOut } from "./LogOut";

export const CreateListForm = () => {

    const { user } = useAuth()
    const [newListName, setNewListName] = useState("")

    const createNewListHander = () => {
        createShoppingList(user.email, newListName)
        setNewListName("")
    }

    const handleKeyPress = (e) => { 
        if(e.key == "Enter") {
            createShoppingList(user.email, newListName)
            setNewListName("")
        }
    }

    return (
        <Grid display="flex" size={10} gap={2} alignItems="center"  >
            <Grid size={9} gap={5} display="flex" >
                <TextField
                    value={newListName}
                    label="Name list"
                    onChange={(e) => setNewListName(e.target.value)}
                    onKeyDown={(e) => handleKeyPress(e)}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            color: "#417f9e",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#417f9e",
                                borderWidth: "2px",
                            },
                        },
                        "& .MuiInputLabel-outlined": {
                            color: "#417f9e",
                        },
                    }}
                >
                </TextField>
                <Button onClick={() => createNewListHander()} style={{
                    backgroundColor: "#f0a54a",
                    color: "#ffffff",
                }}>CREATE NEW LIST
                </Button>
            </Grid>

            <Grid size={4} display="flex" gap={2}>
               <LogOut />
            </Grid>
        </Grid>
    )
}