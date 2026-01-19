import { Avatar, Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material"

import { user_profile, videos } from "../../Constants/dummydata"

import "./Profile.css"
import { formatNumber } from "../../Utils/Video.util";
import VideoCard from "../../Common/Components/Video/VideoCard";

const Profile = ({ type }: { type: "user" | "channel" }) => {

    /* ------------------------------------------------- Constants ------------------------------------------------- */
    /* ------------------------------------------------- Forms ------------------------------------------------- */
    /* ------------------------------------------------- APIs ------------------------------------------------- */
    /* ------------------------------------------------- Functions ------------------------------------------------- */
    /* ------------------------------------------------- useEffect ------------------------------------------------- */
    /* ------------------------------------------------- Return ------------------------------------------------- */

    return (
        <section className="profile_page">
            <Grid container maxWidth={"md"} spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <img src={user_profile.coverimage} className="cover_image" />
                </Grid>

                <Grid size={{ xs: 12 }} container spacing={2} alignItems={"center"}>
                    <Grid>
                        <Avatar src={user_profile.avatar} className="avatar_image" />
                    </Grid>

                    <Grid>
                        <Typography variant="h3">{user_profile.username}</Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Typography variant="h6" mb={0}>@{user_profile.fullname}</Typography>
                            <Typography variant="caption">•</Typography>
                            <Typography variant="caption">{formatNumber(user_profile.subscribersCount)} Subscribers</Typography>
                            <Typography variant="caption">•</Typography>
                            <Typography variant="caption">{user_profile.channelCount} Videos</Typography>
                        </Box>
                        {type === "channel" && <Button className="rounded" sx={{ mt: 2 }}>Subscribe</Button>}
                    </Grid>
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Tabs value={0} sx={{ borderBottom: 1, borderColor: 'divider', flexGrow: 1 }} variant="scrollable" allowScrollButtonsMobile>
                        <Tab label={"Videos"} />
                    </Tabs>
                </Grid>

                <Grid size={{ xs: 12 }} container spacing={0}>
                    {videos.map(video =>
                        <Grid size={{ xs: 4 }}>
                            <VideoCard video={video} />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </section>
    );
}

export default Profile