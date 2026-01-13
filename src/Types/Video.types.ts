export interface VideoOwner {
    _id: string;
    username: string;
    avatar: string;
}

export interface Video {
    _id: string;
    video: string;
    thumbnail: string;
    title: string;
    description: string;
    duration: number;
    views: number;
    isPublished: boolean;
    owner: VideoOwner;
    createdAt: string;
    updatedAt: string;
    likes: number;
}
