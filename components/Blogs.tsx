import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'
import { Post } from '../typings'
interface Props {
  posts: [Post]
}

function Blogs({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <div className="group cursor-pointer overflow-hidden rounded-lg border shadow-md">
            <img
              className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
              src={urlFor(post.mainImage).url()!}
              alt=""
            />
            <div className="flex items-center justify-between bg-white p-5">
              <div>
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="text-xs">by {post.author.name}</p>
              </div>
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={urlFor(post.author.image).url()!}
                alt=""
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blogs
