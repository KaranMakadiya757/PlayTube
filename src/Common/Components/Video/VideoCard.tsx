import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Menu, MenuItem, Modal, Typography } from "@mui/material"

import type { Video } from "../../../Types/Video.types"

import "./Video.css"
import { formatNumber, formatSeconds, formatTimeAgo } from "../../../Utils/Video.util"
import { useNavigate } from "react-router-dom"
import { Check, ContentCopy, Download, MoreVert, Share } from "@mui/icons-material"
import { useState } from "react"

const VideoCard = ({ video }: { video: Video }) => {

    /* ------------------------------------------------- Constants ------------------------------------------------- */

    const nav = useNavigate();
    const video_link = `${import.meta.env.VITE_APP_URL}/video/${video._id}`;

    const [MenuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    /* ------------------------------------------------- Forms ------------------------------------------------- */
    /* ------------------------------------------------- APIs ------------------------------------------------- */
    /* ------------------------------------------------- Functions ------------------------------------------------- */

    // Handle menu open
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setMenuAnchor(event.currentTarget);
    }

    // Handle menu close
    const handleMenuClose = () => {
        setMenuAnchor(null);
    }

    // Handle modal open
    const handleModalOpen = () => {
        handleMenuClose();
        setOpen(true);
    }

    // Handle modal close
    const handleModalClose = () => setOpen(false);

    // Handle card click
    const handleCardClick = () => {
        nav(`/video/${video._id}`)
    }

    // Handle channel click
    const handleSubclick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        event.stopPropagation();
        nav(`/subscriptions/${video.owner._id}`)
    }

    /* ------------------------------------------------- useEffect ------------------------------------------------- */
    /* ------------------------------------------------- Functions (extra) ------------------------------------------------- */

    // Handle copy video link
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(video_link);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error("Failed to copy video link:", error);
        }
    }

    // Handle download video
    const handleDownload = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();

        const link = document.createElement("a");
        link.href = video.video;
        link.download = `${video.title || "video"}.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        handleMenuClose();
    }

    /* ------------------------------------------------- Return ------------------------------------------------- */

    return (
        <>
            <CardActionArea onClick={handleCardClick}>
                <Card className="video_card">
                    <Box className="video_image">
                        <CardMedia
                            component="img"
                            image={video.thumbnail}
                        />
                        <Typography className="time">
                            {formatSeconds(video.duration)}
                        </Typography>
                    </Box>

                    <CardContent>
                        <Box component={"span"} onClick={handleSubclick}>
                            <Avatar src={video.owner.avatar} />
                        </Box>

                        <Box flexGrow={1}>
                            <Typography className="title">
                                {video.title}
                            </Typography>
                            <Typography className="subtitle" onClick={handleSubclick}>
                                {video.owner.username}
                            </Typography>
                            <Typography className="subtitle">
                                {formatNumber(video.views)} Views • {formatTimeAgo(video.createdAt)} ago
                            </Typography>
                        </Box>
                        <Box component={"span"} onClick={handleMenuOpen}>
                            <MoreVert className="more" />
                        </Box>
                    </CardContent>
                </Card>
            </CardActionArea>

            <Menu
                anchorEl={MenuAnchor}
                open={Boolean(MenuAnchor)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                className='menu_popup'

            >
                <MenuItem className='menu_item' onClick={handleModalOpen}>
                    <Share sx={{ fill: "var(--text)" }} />
                    Share
                </MenuItem>

                <MenuItem className='menu_item' onClick={handleDownload}>
                    <Download sx={{ fill: "var(--text)" }} />
                    Download
                </MenuItem>
            </Menu>

            <Modal
                open={open}
                onClose={handleModalClose}
            >
                <Box className="modal_popup">
                    <Typography className="video_link" component={"a"} target="_blank" href={video_link}>
                        {video_link}
                    </Typography>
                    <Button className="copy" onClick={handleCopy}>
                        {copied ? <Check /> : <ContentCopy />}
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default VideoCard