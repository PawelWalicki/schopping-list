import { Button } from '@mui/material'
import { Footer } from './Footer'
import { useNavigate } from "react-router-dom"
import './AuthPrompt.css'

export const AuthPrompt = () => {
    const navigate = useNavigate();

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
            <Footer />
        </div>
    )
}