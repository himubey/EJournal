import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import { Link } from 'react-router-dom';


function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className='w-screen h-[calc(100vh-5rem)]'>
            <div
                className="bg-cover bg-[url('/public/heroimg.png')] bg-center bg-no-repeat h-full w-full"
            >
                <div className="container mx-auto flex flex-col my-auto align-middle h-full">
                    <div className='my-auto mx-auto lg:mx-0 w-10/12 lg:w-2/5'>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
                            Unlock Your Best Self with E-<span className='text-blue-700'>Journal</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-8">
                            Unleash your creativity, streamline your thoughts, and make each entry a masterpiece.
                            With e-Journal, your digital journaling experience is not just personal it's a journey of
                            self-discovery. Start your transformative journaling today and watch your thoughts come
                            to life in a responsive canvas crafted just for you.
                        </p>
                        <div className='flex items-center justify-center'>
                            <button className='rounded px-6 sm:px-8 py-2 sm:py-3 text-white bg-blue-600 hover:bg-blue-700'>
                                <Link to='/login'>Write your story</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home