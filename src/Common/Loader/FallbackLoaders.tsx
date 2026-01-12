import { Box, Typography } from '@mui/material'
import Loader from './Loader'

// Full page loading spinner with centered text
export const FallbackLoader = () => {

    return (
        <div style={{ width: '100%', height: 'calc(100vh - 90px)', display: "grid", placeContent: "center", placeItems: "center", gap: '15px' }}>
            <Loader size={25} color='var(--text)' />
            <Typography className='headinglabel'>Loading...</Typography>
        </div>
    )
}

// Tab panel loading spinner with background color
export const FallbacktabpanelLoader = () => {

    return (
        <div style={{ width: '100%', height: 'calc(100vh - 160px)', display: "grid", placeContent: "center", placeItems: "center", gap: '15px', backgroundColor: 'var(--background-3)' }}>
            <Loader size={25} color='var(--text)' />
            <Typography className='headinglabel'>Loading...</Typography>
        </div>
    )
}

// Conditional backdrop loader with custom size and color
export const BackDropLoader = ({ open = false }: { open: boolean }) => {

    if (open) return (
        <Box className="loadingbox">
            <Loader size={25} color="var(--text)" />
        </Box>
    )
}