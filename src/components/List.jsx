import { ItemsList } from "../components/ItemsList"
import { getUserLists } from "../services/shoppingListService"
import { useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth"
import { Box } from "@mui/material"

export const List = () => {
    const { user } = useAuth()
    const [lists, setLists] = useState([])

    useEffect(() => {
        if (user) {
            getUserLists(setLists)
        }
    }, [user])

    if (!lists || lists.length == 0) {
        return (
            <Box
                component="img"
                src="create_new_project.png"
                sx={{
                    maxWidth: {xs: '400px', sm: '400px', md: '400px'},
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                }}
            />
        )
    }

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