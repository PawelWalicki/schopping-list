import { Link, useNavigate } from "react-router-dom";
export const RegisterLink = () => { 
    const navigate = useNavigate();

    return (
        <span>Need to sign up for an account? <Link to="/register">Click here.</Link></span>
    )

}