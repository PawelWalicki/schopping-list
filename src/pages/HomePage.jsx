import { useAuth } from "../hooks/useAuth"
import { Container, Grid } from "@mui/material"
import { AuthPrompt } from "../components/AuthPrompt"
import { CreateListForm } from "../components/CreateListForm"
import { List } from "../components/List"

export const HomePage = () => {
    const { user } = useAuth()

    if (!user) {
        return (
            <AuthPrompt />
        )
    }

    return (
        <Container>
            <Grid container spacing={2} paddingTop={"10px"} display="flex" justifyContent="center" alignItems="center">
                <CreateListForm />
                <Grid size={10}>
                    <List />
                </Grid>
            </Grid>
        </Container >
    )
}