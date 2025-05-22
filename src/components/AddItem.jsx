import { Button, Grid, TextField } from "@mui/material"
import { addItemToList } from "../services/shoppingListService"
import { useState } from "react"

export const AddItem = ({ listId }) => {
    const [value, setValue] = useState("")
    const [quantity, setquantity] = useState(1)

    const handleAddItem = () => {
        addItemToList(listId, value, quantity)
        setValue("")
        setquantity(1)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleAddItem()
        }
    }

    return (
        <Grid container spacing={2} size="grow" display="flex" justifyContent="center" alignItems="center" marginTop={"7px"}>
            <TextField
                value={value}
                label="product"
                onChange={(e) => setValue(e.target.value)}
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
            />
            <TextField
                value={quantity}
                label="quantity"
                type="number"
                onChange={(e) => setquantity(e.target.value)}
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
            />
            <Button
                onClick={() => handleAddItem()}
                style={{
                    backgroundColor: "#f0a54a",
                    color: "#ffffff",
                }}>
                Add
            </Button>
        </Grid>
    )
} 