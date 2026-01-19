export type Subscription = {
    _id: string | number,
    channel: {
        _id: string | number;
        username: string;
        fullname: string;
        subscribersCount: number;
        avatar: string;
    }
}
