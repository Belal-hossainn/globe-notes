import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'
import { Post } from '../typings'
interface Props {
  posts: [Post]
}

function Blogs({ posts }: Props) {
  console.log(posts)
  return (
    <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <div className="">
            <img src={urlFor(post.mainImage).url()!} alt="" />
            <div className="flex items-center justify-between bg-white p-5">
              <div>
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p>by {post.author.name}</p>
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
