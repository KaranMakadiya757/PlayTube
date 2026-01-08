import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

import { Edit, Visibility, VisibilityOff } from "@mui/icons-material"
import { Avatar, Button, Grid, IconButton, TextField, Typography } from "@mui/material"

import logo from "../../assets/logo.svg"

import "./Signup.css"

const Signup = () => {

    /* ------------------------------------------------- Constants ------------------------------------------------- */

    const nav = useNavigate();

    const fileInputRef = useRef<HTMLInputElement>(null)

    const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
    const [showPass, setShowPass] = useState<boolean>(false)


    /* ------------------------------------------------- Forms ------------------------------------------------- */
    /* ------------------------------------------------- APIs ------------------------------------------------- */
    /* ------------------------------------------------- Functions ------------------------------------------------- */

    // Handle account login
    const handleLogin = () => {
        nav("/sign-in");
    }

    const handleAvatarClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setAvatarPreview(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    /* ------------------------------------------------- useEffect ------------------------------------------------- */
    /* ------------------------------------------------- Return ------------------------------------------------- */

    return (
        <section className="sign-up">
            <Grid container className="container" spacing={2}>
                <Grid size={{ xs: 12 }} textAlign={{ xs: "center", md: "left" }}>
                    <img src={logo} className="logo" />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Grid size={{ xs: 12 }} textAlign={{ xs: "center", md: "left" }}>
                        <Typography variant="h1" ml={1}>Sign up</Typography>
                    </Grid>
                </Grid>

                <Grid size={{ xs: 12, md: 8 }} container spacing={2} textAlign={"right"}>
                    <Grid container size={{ xs: 12 }}>
                        <Grid size={{ xs: 12, md: 4 }} container justifyContent={"center"} >
                            <div className="avatar-container">
                                <Avatar
                                    className="avatar"
                                    src={avatarPreview || undefined}
                                />
                                <IconButton
                                    className="avatar-edit-button"
                                    onClick={handleAvatarClick}
                                    size="small"
                                >
                                    <Edit fontSize="small" />
                                </IconButton>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </div>
                        </Grid>

                        <Grid container size={{ xs: 12, md: 8 }}>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    label="Username"
                                />
                            </Grid>

                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    label="Full Name"
                                />
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid size={{ xs: 12 }}>
                        <TextField
                            label="Email"
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <TextField
                            label="Password"
                            type={showPass ? "text" : "password"}
                            InputProps={{
                                endAdornment: (
                                    <IconButton
                                        onClick={() => setShowPass((show) => !show)}
                                        edge="end"
                                        size="small"
                                        tabIndex={-1}
                                    >
                                        {showPass ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                )
                            }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }} container spacing={2} justifyContent={"end"} alignItems={"center"} mt={5}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleLogin}
                        >
                            login to account
                        </Button>

                        <Button>
                            Sign up
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
}

export default Signup