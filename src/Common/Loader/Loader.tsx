import { CircularProgress } from "@mui/material"
import type { LoaderProps } from "../../Types/Common.type"


// Generic Loader
const Loader: React.FC<LoaderProps> = ({ size, color, width = "100%" }) => {

    return (
        <div style={{ width, display: "grid", placeItems: "center" }}>
            <CircularProgress size={size} sx={{ color: color }} />
        </div>
    )
}

export default Loader