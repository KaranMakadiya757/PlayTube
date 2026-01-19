import { Handyman } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"

const WorkProgress = () => {
    return (
        <Box
            component={"div"}
            sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "80svh" }}
        >
            <Handyman sx={{ fontSize: "8rem" }} />
            <Typography variant="h1">Work in progress</Typography>
            <Typography variant="h6">We will let you know once it's done</Typography>
        </Box>
    )
}

export default WorkProgress