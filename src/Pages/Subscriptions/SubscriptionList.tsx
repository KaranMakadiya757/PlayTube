import { Grid } from "@mui/material"
import "./Subscription.css"
import { subscriptions } from "../../Constants/dummydata"
import SubscriptionCard from "../../Common/Components/Subscription/SubscriptionCard"

const SubscriptionList = () => {
    return (
        <>
            <Grid container spacing={2}>
                {subscriptions.map(sub =>
                    <Grid size={{ xs: 4 }}>
                        <SubscriptionCard Subscription={sub} />
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default SubscriptionList