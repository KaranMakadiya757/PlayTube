import { useState, useEffect } from "react";

import ReactPlayer from "react-player";

import { Avatar, Box, Button, Grid, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import { Download, Share, ThumbUpAltOutlined } from "@mui/icons-material";

import { video as videofile, videos } from "../../Constants/dummydata";
import { comment } from "../../Constants/dummydata"

import "./Video.css";
import { formatNumber, formatTimeAgo } from "../../Utils/Video.util";
import VideoCard from "../../Common/Components/Video/VideoCard";

const Video = () => {

    /* ------------------------------------------------- Constants ------------------------------------------------- */

    const [playing, setPlaying] = useState(false);

    /* ------------------------------------------------- Forms ------------------------------------------------- */
    /* ------------------------------------------------- APIs ------------------------------------------------- */
    /* ------------------------------------------------- Functions ------------------------------------------------- */
    /* ------------------------------------------------- useEffect ------------------------------------------------- */

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
                return;
            }


            if (event.code === 'Space' || event.key === ' ') {
                event.preventDefault();
                setPlaying(true);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    /* ------------------------------------------------- Return ------------------------------------------------- */

    return (
        <section className="video">
            <Grid container spacing={0}>

                {/* Video Player */}
                <Grid size={{ xs: 8 }} container spacing={2} alignContent={"start"}>
                    <ReactPlayer
                        className="video_player"
                        controls
                        autoFocus
                        volume={0.1}
                        width="100%"
                        height="100%"
                        playing={playing}
                        src={videofile.video}
                        light={videofile.thumbnail}
                        onClickPreview={() => setPlaying(true)}
                    />

                    {/* Video title */}
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="h3">{videofile.title}</Typography>
                    </Grid>

                    {/* Channel information */}
                    <Grid size={{ xs: 12 }} display={"flex"} alignItems={"center"} gap={2}>
                        <Avatar src={videofile.owner.avatar} className="avatar" />
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" marginBottom={0}>{videofile.owner.username}</Typography>
                            <Typography variant="caption">35M subscibers</Typography>
                        </Box>
                        <Button className="rounded">subscribe</Button>
                    </Grid>

                    {/* like, share & download */}
                    <Grid size={{ xs: 12 }} display={"flex"} alignItems={"center"} gap={1}>
                        <Box className="chip_button">
                            <ThumbUpAltOutlined sx={{ fontSize: "1rem" }} />
                            <Typography variant="h6" marginBottom={0}>1M</Typography>
                        </Box>
                        <Box className="chip_button">
                            <Share sx={{ fontSize: "1rem" }} />
                            <Typography variant="h6" marginBottom={0}>Share</Typography>
                        </Box>
                        <Box className="chip_button">
                            <Download sx={{ fontSize: "1rem" }} />
                            <Typography variant="h6" marginBottom={0}>Download</Typography>
                        </Box>
                    </Grid>

                    {/* video description */}
                    <Grid size={{ xs: 12 }} className="description">
                        <Typography variant="body2" textAlign={"justify"}>{videofile.description}</Typography>
                    </Grid>

                    <Grid size={{ xs: 12 }} px={2}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem", mb: 2 }}>
                            <Avatar className="user_avatar" />
                            <TextField
                                placeholder="Add comment ..."
                            />
                            <Button className="rounded comment">
                                comment
                            </Button>
                        </Box>

                        {Array.from({ length: 10 }).map((_, idx) =>
                            <List className="comments_list" key={idx}>
                                <ListItem disablePadding>
                                    <Avatar src={comment.owner.avatar} className="comment_avatar" />
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                            <ListItemText primary={comment.owner.username} className="title" />
                                            <ListItemText primary={`${formatTimeAgo(comment.createdAt)} ago`} className="time" />
                                        </Box>
                                        <ListItemText primary={comment.content} className="content" />
                                        <Box className="chip_button">
                                            <ThumbUpAltOutlined sx={{ fontSize: "0.9rem" }} />
                                            <ListItemText primary={formatNumber(comment.likes)} className="likes" />
                                        </Box>
                                    </Box>
                                </ListItem>
                            </List>
                        )}
                    </Grid>
                </Grid>

                {/* More Videos */}
                <Grid size={{ xs: 4 }} px={2}>
                    {videos.map(video =>
                        <VideoCard
                            video={video}
                            type="list"
                        />
                    )}
                </Grid>
            </Grid>
        </section >
    );
};

export default Video;