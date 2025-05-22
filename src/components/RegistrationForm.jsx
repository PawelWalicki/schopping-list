import { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, Container, Grid, TextField } from '@mui/material';
import './RegistrationForm.css'
import { useNavigate } from 'react-router-dom';

export const RegistrationForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
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
                   navigate("/")
                })
                .catch(e => {
                    setNotice("Requirements for email or password are not met!")
                })
        } else {
            setNotice("Passords does not match")
        }

    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onSubmit(e)
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
        </Container>
    )
}