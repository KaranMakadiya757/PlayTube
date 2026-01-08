import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"

import logo from "../../assets/logo.svg"

import "./Signin.css"

const Signin = () => {

    /* ------------------------------------------------- Constants ------------------------------------------------- */

    const nav = useNavigate();
    const location = useLocation();
    const isVerifyOtp = location.pathname.split("/").pop() === "verify-otp";

    const [useOTP, setuseOTP] = useState<boolean>(true);
    const [showPass, setShowPass] = useState<boolean>(false)

    /* ------------------------------------------------- Forms ------------------------------------------------- */
    /* ------------------------------------------------- APIs ------------------------------------------------- */
    /* ------------------------------------------------- Functions ------------------------------------------------- */

    // Handle account create
    const handleCreateAccount = () => {
        nav("/sign-up");
    }

    /* ------------------------------------------------- useEffect ------------------------------------------------- */
    /* ------------------------------------------------- Return ------------------------------------------------- */

    return (
        !isVerifyOtp ?
            <section className="sign-in">
                <Grid container className="container" spacing={2}>
                    <Grid size={{ xs: 12 }} textAlign={{ xs: "center", md: "left" }}>
                        <img src={logo} className="logo" />
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Grid size={{ xs: 12 }} textAlign={{ xs: "center", md: "left" }}>
                            <Typography variant="h1" ml={1}>Sign in</Typography>
                        </Grid>
                    </Grid>

                    <Grid size={{ xs: 12, md: 8 }} container spacing={2} textAlign={"right"}>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                label="Email"
                            />
                            {useOTP && <Typography className="link" component={"a"} marginTop={1} onClick={() => setuseOTP(false)}>Use password</Typography>}
                        </Grid>

                        {!useOTP && <Grid size={{ xs: 12 }}>
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
                            <Typography className="link" component={"a"} marginTop={1} onClick={() => setuseOTP(true)}>Sign in with OTP</Typography>
                        </Grid>}

                        <Grid size={{ xs: 12 }} container spacing={2} justifyContent={"end"} alignItems={"center"} mt={5}>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleCreateAccount}
                            >
                                create account
                            </Button>

                            <Button>
                                {useOTP ? "Send OTP" : "Login"}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
            :
            <section className="sign-in">
                <Grid container className="container" spacing={2}>
                    <Grid size={{ xs: 12 }} textAlign={{ xs: "center", md: "left" }}>
                        <img src={logo} className="logo" />
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }} textAlign={{ xs: "center", md: "left" }}>
                        <Grid size={{ xs: 12 }}>
                            <Typography variant="h1" ml={1}>Sign in</Typography>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Typography variant="h3" ml={1}>Don't have an account ? No worries </Typography>
                        </Grid>
                    </Grid>

                    <Grid size={{ xs: 12, md: 8 }} container spacing={2}>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                label="Email"
                                disabled
                            />
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                            <TextField
                                label="Enter OTP"
                            />
                            <Typography className="link disabled" component={"a"} ml={1}>resend otp</Typography>
                        </Grid>

                        <Grid size={{ xs: 12 }} textAlign={"right"}>
                            <Button>
                                Verify
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
    )
}

export default Signin