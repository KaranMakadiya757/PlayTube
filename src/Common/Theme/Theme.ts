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
    },
});

export default Theme;