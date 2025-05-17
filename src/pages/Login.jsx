import { useState } from "react"
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Container, TextField, Grid } from "@mui/material";
import './Login.css'
import { Footer } from '../components/Footer';
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch {
            setNotice("You entered a wrong username or password.")
        }
    }

    return (
        <div>
            <Container>
                <h1 className='title'>Sign in</h1>
                <div className="alert">
                    {"" !== notice &&
                        <div role="alert">
                            {notice}
                        </div>
                    }
                </div>
                <Grid container spacing={2} size="grow" display="flex" justifyContent="center" alignItems="center">
                    <Grid size={7}>
                        <TextField
                            type="email"
                            label="Email address"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="name@example.com"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            fullWidth
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
                    </Grid>
                    <Grid size={7}>
                        <TextField
                            type="password"
                            label="Password"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            fullWidth
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
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size={7}>
                        <Button type="submit" className="button" onClick={(e) => loginWithUsernameAndPassword(e)} style={{
                            backgroundColor: "#f0a54a",
                            color: "#ffffff",
                        }}>Submit</Button>
                    </Grid>
                </Grid>
                <Grid display="flex" justifyContent="center" alignItems="center" size={7} paddingTop={"10px"}>
                    <span>Need to sign up for an account? <Link to="/register">Click here.</Link></span>
                </Grid>
            </Container>
            <Footer />
        </div>
    )
}