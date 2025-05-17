import { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Registration.css'
import { Button, Container, Grid, TextField } from '@mui/material';
import { Footer } from '../components/Footer';


export const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [notice, setNotice] = useState("");


    const validatePassword = () => {
        let isValid = true;
        if (password !== confirmPassword) {
            isValid = false
            setPasswordError("Passowords are not the same")
        } else {
            setPasswordError('')
        }
        return isValid
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setNotice("")
        setPasswordError("")
        if (validatePassword()) {

            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredentials) => {
                    const user = userCredentials.user
                    console.log(user)
                })
                .catch(e => {
                    setNotice("Requirements for email or password are not met!")
                })
        } else {
            setNotice("Passords does not match")
        }

    }

    return (
        <Container>
            <h1 className='title'> Registration </h1>
            <div className='alert'>
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                        label="Create password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
                        label="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        fullWidth
                        error={passwordError !== ""}
                        helperText={passwordError}
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
                    <Button
                        className="button"
                        type="submit"
                        onClick={onSubmit}
                        style={{
                            backgroundColor: "#f0a54a",
                            color: "#ffffff",
                        }}>
                        Sign up
                    </Button>
                </Grid>
            </Grid>
            <Footer />
        </Container>
    )
}