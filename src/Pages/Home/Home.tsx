import { Grid } from "@mui/material"

import VideoCard from "../../Common/Components/Video/VideoCard"

import "./Home.css"
import { videos } from "../../Constants/dummydata"


const Home = () => {
    return (
        <>
            <Grid container spacing={2}>
                {videos.map(video =>
                    <Grid size={{ xs: 4 }}>
                        <VideoCard video={video} />
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default Home