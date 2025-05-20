import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Button } from "@mui/material";

export const LogOut = () => {

    const { user, pending } = useAuth();
    const navigate = useNavigate();


    const logoutUser = async (e) => {
        e.preventDefault();

        await signOut(auth);
        navigate("/");
    }

    if (pending) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <>
            <p>Welcome {user.email}</p>
            <Button type="submit" onClick={(e) => logoutUser(e)} style={{
                backgroundColor: "#f0a54a",
                color: "#ffffff",
            }}>Logout</Button>
        </>
    )
}