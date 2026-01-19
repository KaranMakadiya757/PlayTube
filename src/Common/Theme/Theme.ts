import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "clamp(12px, 1vw + 1em, 16px)",
                    lineHeight: 1,
                    minHeight: "100vh",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                },

                "*": {
                    boxSizing: "border-box",
                },

                a: {
                    textDecoration: "none",
                    color: "inherit",
                },
            },
        },

        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "var(--text)",
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    // Custom class for special titles
                    "&.title": {
                        fontWeight: 700,
                        fontSize: "clamp(1.8rem, 1.4rem + 1vw, 2.4rem)",
                        color: "var(--primary-text)",
                        marginBottom: "0.5em",
                        letterSpacing: "0.02em",
                    },
                    "&.link": {
                        fontWeight: 300,
                        fontSize: "clamp(0.7rem, 0.6rem + 0.3vw, 0.9rem)",
                        color: "var(--primary-text)",
                        textDecoration: "underline",
                        letterSpacing: "0.02em",
                        cursor: "pointer"
                    },
                    "&.link.disabled": {
                        opacity: 0.5
                    },
                },
                h1: {
                    fontWeight: 700,
                    fontSize: "clamp(1.9rem, 1.5rem + 1vw, 2.5rem)",
                    color: "var(--text)",
                    marginBottom: "0.5em",
                },
                h2: {
                    fontWeight: 600,
                    fontSize: "clamp(1.6rem, 1.3rem + 0.8vw, 2.1rem)",
                    color: "var(--text)",
                    marginBottom: "0.5em",
                },
                h3: {
                    fontWeight: 500,
                    fontSize: "clamp(1.3rem, 1.1rem + 0.6vw, 1.8rem)",
                    color: "var(--text)",
                    marginBottom: "0.5em",
                },
                h4: {
                    fontWeight: 400,
                    fontSize: "clamp(1.1rem, 1rem + 0.4vw, 1.3rem)",
                    color: "var(--text)",
                    marginBottom: "0.5em",
                },
                h5: {
                    fontWeight: 400,
                    fontSize: "clamp(1rem, 0.95rem + 0.3vw, 1.15rem)",
                    color: "var(--text)",
                    marginBottom: "0.5em",
                },
                h6: {
                    fontWeight: 400,
                    fontSize: "clamp(0.8rem, 0.9rem + 0.2vw, 0.9rem)",
                    color: "var(--text)",
                    marginBottom: "0.5em",
                },
                subtitle1: {
                    color: "var(--secondary-text)",
                    fontSize: "clamp(1rem, 0.95rem + 0.3vw, 1.15rem)",
                    fontWeight: 500,
                },
                subtitle2: {
                    color: "var(--secondary-text)",
                    fontSize: "clamp(0.95rem, 0.9rem + 0.2vw, 1.05rem)",
                    fontWeight: 400,
                },
                body1: {
                    color: "var(--text)",
                    fontSize: "clamp(0.95rem, 0.9rem + 0.25vw, 1.05rem)",
                    fontWeight: 400,
                },
                body2: {
                    color: "var(--secondary-text)",
                    fontSize: "clamp(0.9rem, 0.85rem + 0.25vw, 1rem)",
                    fontWeight: 400,
                },
                caption: {
                    color: "var(--secondary-text)",
                    fontSize: "clamp(0.75rem, 0.7rem + 0.2vw, 0.9rem)",
                    fontWeight: 300,
                },
            }
        },

        MuiTextField: {
            defaultProps: {
                variant: "outlined",
                fullWidth: true,
                size: "small"
            },
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "var(--text)",
                    fontWeight: 400,
                    fontSize: "clamp(0.8rem, 0.75rem + 0.3vw, 0.95rem)",
                    opacity: 0.7,

                    "&.Mui-disabled": {
                        color: "var(--secondary-text)",
                        opacity: 0.6,
                        cursor: "not-allowed",
                    },
                }
            }
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    color: "var(--text)",
                    borderRadius: "0.5rem",
                    fontSize: "clamp(0.9rem, 0.85rem + 0.3vw, 1.05rem)",
                    fontWeight: "500",
                    marginBottom: "0.5rem",
                    outline: "none",

                    "& input::placeholder": {
                        color: "#747474",
                        fontSize: "clamp(0.75rem, 0.7rem + 0.25vw, 0.9rem)",
                        fontWeight: "600",
                        opacity: 0.8,
                    },

                    "& .MuiOutlinedInput-notchedOutline": {
                        outline: "none",
                        borderColor: "var(--border)",
                        borderWidth: "2px"
                    },

                    "&.Mui-disabled": {
                        backgroundColor: "transparent",
                        color: "var(--text)",
                        borderRadius: "0.5rem",
                        fontSize: "clamp(0.9rem, 0.85rem + 0.3vw, 1.05rem)",
                        fontWeight: "500",
                        marginBottom: "0.5rem",
                        outline: "none",
                        opacity: 0.6,
                        cursor: "not-allowed !important",
                        pointerEvents: "all",
                    },

                    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                        outline: "none",
                        borderColor: "var(--border)",
                        borderWidth: "2px"
                    },
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0.5rem",
                    fontWeight: 600,
                    fontSize: "clamp(0.9rem, 0.85rem + 0.3vw, 1.05rem)",
                    textTransform: "none",
                    padding: "0.3rem 1.5rem",
                    backgroundColor: "var(--button-bg)",
                    color: "var(--button-text)",
                    transition: "background 0.2s, box-shadow 0.2s, color 0.2s",

                    "&:hover": {
                        opacity: 0.6
                    },

                    "&.rounded": {
                        borderRadius: "2rem",
                    },

                    "&.Mui-disabled": {
                        opacity: 0.5,
                        cursor: "not-allowed",
                        pointerEvents: "all",
                    },
                },
                containedPrimary: {
                    backgroundColor: "var(--primary)",
                    color: "#fff",
                },
                containedSecondary: {
                    backgroundColor: "transparent",
                    color: "var(--text)",
                    boxShadow: "none",
                    fontWeight: "400",
                    "&:hover": {
                        boxShadow: "none"
                    }
                }
            },
        },
    },
});

export default Theme;