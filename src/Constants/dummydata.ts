import u1 from "../assets/user1.jpg"
import u2 from "../assets/user2.jpg"
import u3 from "../assets/user3.jpg"
import u4 from "../assets/user4.jpg"
import u5 from "../assets/user5.jpg"

import thumb1 from "../assets/thumb1.jpg"
import thumb2 from "../assets/thumb2.jpg"
import thumb3 from "../assets/thumb3.jpg"

export const subscriptions = [
    {
        id: 1,
        img: u1,
        name: "Carryminati"
    },
    {
        id: 2,
        img: u2,
        name: "BB ki vines"
    },
    {
        id: 3,
        img: u3,
        name: "ACV"
    },
    {
        id: 4,
        img: u4,
        name: "Mumbiker Nikhil"
    },
    {
        id: 5,
        img: u5,
        name: "Taarak Mehta Ka Ooltah Chashmah"
    },
]

export const playlists = [
    {
        id: 1,
        name: "Entertainment",
        videos: 10
    },
    {
        id: 2,
        name: "Gym",
        videos: 5
    },
    {
        id: 3,
        name: "Movies",
        videos: 8
    },
    {
        id: 4,
        name: "Work",
        videos: 1
    },
    {
        id: 5,
        name: "Tips & Tricks",
        videos: 15
    },
]

export const videos = [
    {
        _id: "6878bdbb1316a9bc822e911f",
        video: "abcd",
        thumbnail: thumb1,
        title: "TMKOC Bhide ka online lecture PART - 1",
        description: "Video Description",
        duration: 1215,
        views: 1000000,
        isPublished: true,
        owner: {
            _id: "6877783b96d2911f18da02b0",
            username: "TMKOC",
            avatar: u5
        },
        createdAt: "2025-07-17T09:09:15.590Z",
        updatedAt: "2025-07-17T09:13:20.743Z",
        likes: 500000
    },
    {
        _id: "6878bdbb1316a9bc822e5fr6",
        video: "abcd",
        thumbnail: thumb2,
        title: "TMKOC Bhide ka online lecture PART - 2",
        description: "Video Description",
        duration: 1199,
        views: 2200000,
        isPublished: true,
        owner: {
            _id: "6877783b96d2911f18da02b0",
            username: "TMKOC",
            avatar: u5
        },
        createdAt: "2025-07-17T09:09:15.590Z",
        updatedAt: "2025-07-17T09:13:20.743Z",
        likes: 490000
    },
    {
        _id: "6878bdbb1316a9bc822e9fja",
        video: "abcd",
        thumbnail: thumb3,
        title: "TMKOC Bhide ka online lecture PART - 3",
        description: "Video Description",
        duration: 1115,
        views: 3500000,
        isPublished: true,
        owner: {
            _id: "6877783b96d2911f18da02b0",
            username: "TMKOC",
            avatar: u5
        },
        createdAt: "2025-07-17T09:09:15.590Z",
        updatedAt: "2025-07-17T09:13:20.743Z",
        likes: 600000
    },
]