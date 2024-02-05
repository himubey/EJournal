import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, content, featuredImage, name }) {

  const maxContentLength = 111;

  const contentLen = content.length > maxContentLength
    ? `${content.substring(0, maxContentLength)}...`
    : content.p;


  return (
    <Link to={`/post/${$id}`}>
      <div class="bg-white">
        <div className='mx-auto max-w-2xl sm:px-6 sm:py-12 lg:max-w-6xl lg:px-9 '>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 ">
            <img class="w-full h-full object-cover object-center group-hover:opacity-75" src={appwriteService.getFilePreview(featuredImage)} alt={title}
              className='h-full w-full object-cover object-center group-hover:opacity-75 ' />

          </div >
          <h2
            className='font-bold text-xl mb-2 px-6 pt-4 pb-2'
          >{title}</h2>
          <div
            className='text-sm font-sans text-justify'
            dangerouslySetInnerHTML={{ __html: contentLen }}
          />
        </div>
      </div>
    </Link>
  )
}



export default PostCard