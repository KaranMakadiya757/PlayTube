import u1 from "../assets/user1.jpg"
import u2 from "../assets/user2.jpg"
import u3 from "../assets/user3.jpg"
import u4 from "../assets/user4.jpg"
import u5 from "../assets/user5.jpg"

import thumb1 from "../assets/thumb1.jpg"
import thumb2 from "../assets/thumb2.jpg"
import thumb3 from "../assets/thumb3.jpg"

import videofile from "../assets/video.mp4"

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

export const video = {
    _id: "6878bdbb1316a9bc822e911f",
    video: videofile,
    thumbnail: thumb1,
    title: "TMKOC Bhide ka online lecture PART - 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sit laboriosam modi sapiente voluptatem nihil voluptatibus natus. Commodi sunt hic ut, alias suscipit error cum culpa. Aliquam placeat illum beatae a explicabo eius ex iste, quibusdam delectus iure id animi, voluptatum quam assumenda velit odit autem enim eum recusandae culpa! Porro possimus laborum distinctio nulla omnis? Aliquam facilis earum, tenetur ea quae at ullam totam est deleniti omnis nesciunt voluptas, voluptatum, officia corporis ipsam! Beatae quo eos placeat iure, exercitationem in velit laboriosam ipsa vero magnam suscipit deleniti error accusamus, omnis possimus sequi consectetur. Soluta temporibus voluptas reiciendis illum officiis.",
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
}

export const videos = [
    {
        _id: "6878bdbb1316a9bc822e911f",
        video: videofile,
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
        video: videofile,
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
        video: videofile,
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

export const comment = {
    _id: "6878bdbb1316a9bc822e911f",
    content: "Lorem ipsum dolor sit amet.",
    likes: 1500,
    owner: {
        _id: "6877783b96d2911f18da02b0",
        username: "Carryminati",
        avatar: u1
    },
    createdAt: "2025-07-17T09:09:15.590Z",
    updatedAt: "2025-07-17T09:13:20.743Z"
}