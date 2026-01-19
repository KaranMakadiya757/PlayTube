import { Avatar, Box, Card, CardActionArea, CardContent, Menu, MenuItem, Typography } from "@mui/material"
import "./Subscription.css"
import { useNavigate } from "react-router-dom"
import type { Subscription } from "../../../Types/Subscription.type";
import { useState } from "react";
import { MoreVert, Remove } from "@mui/icons-material";
import { formatNumber } from "../../../Utils/Video.util";

const SubscriptionCard = ({ Subscription }: { Subscription: Subscription }) => {

    /* ------------------------------------------------- Constants ------------------------------------------------- */

    const nav = useNavigate();
    const [MenuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);


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

    // Handle card click
    const handleCardClick = () => {
        nav(`/subscriptions/${Subscription.channel._id}`)
    }

    /* ------------------------------------------------- useEffect ------------------------------------------------- */
    /* ------------------------------------------------- Return ------------------------------------------------- */

    return (
        <>
            <CardActionArea onClick={handleCardClick}>
                <Card className={"subscription_card"}>
                    <Box className="subscription_image">
                        <Avatar src={Subscription.channel.avatar} />
                    </Box>

                    <CardContent>
                        <Box flexGrow={1}>
                            <Typography variant="h3">
                                {Subscription.channel.username}
                            </Typography>
                            <Typography className="subtitle">
                                {Subscription.channel.fullname}
                            </Typography>
                            <Typography className="subtitle">
                                {formatNumber(Subscription.channel.subscribersCount)} Subscribers
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
                <MenuItem className='menu_item' onClick={handleMenuClose}>
                    <Remove sx={{ fill: "var(--text)" }} />
                    Unsubscribe
                </MenuItem>
            </Menu>
        </>
    )
}

export default SubscriptionCard