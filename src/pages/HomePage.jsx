import { useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth"
import { createShoppingList, getUserLists } from "../services/shoppingListService"
import { ItemsList } from "../components/ItemsList"
import { Button, Container, Grid, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Footer } from "../components/Footer"
import './HomePage.css'

export const HomePage = () => {
    const { user } = useAuth()
    const navigate = useNavigate();
    const [newListName, setNewListName] = useState("")
    const [lists, setLists] = useState([])
    useEffect(() => {
        if (user) {
            getUserLists(setLists)
        }
    }, [user])

    const createNewListHander = () => {
        createShoppingList(user.email, newListName)
        setNewListName("")
    }
    if (!user) {
        return (
            <div className="container-home">
                <div> User not logged in! </div>
                <div className="container-button">
                    <Button className="button" onClick={() => navigate("./login")} style={{
                        backgroundColor: "#f0a54a",
                        color: "#ffffff",
                    }}> Sign in!</Button>
                    <Button className="button" onClick={() => navigate("./register")} style={{
                        backgroundColor: "#f0a54a",
                        color: "#ffffff",
                    }}>Register!</Button>
                </div>
                <Footer/>
            </div>
        )
    }

    return (
        <Container>
            <Grid container spacing={2}   paddingTop={"10px"} display="flex" justifyContent="center" alignItems="center">
                <Grid item display="flex" justifyContent="flex-start" size={10} gap={2} >
                    <TextField
                        value={newListName}
                        label="Name list"
                        onChange={(e) => setNewListName(e.target.value)}
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
                    }}>CREATE NEW LIST</Button>
                </Grid>
                <Grid 
                    size={10}
                    >
                    {lists.map(e => (
                        <ItemsList key={e.id} list={e}
                        ></ItemsList>
                    ))}
                </Grid>
            </Grid>
        </Container >
    )
}