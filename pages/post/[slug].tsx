import { GetStaticProps } from 'next'
import React from 'react'
import PortableText from 'react-portable-text'
import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'

interface Props {
  post: Post
}
function Post({ post }: Props) {
  console.log(post)
  return (
    <main>
      <Header />
      <img
        className="h-44 w-full object-cover"
        src={urlFor(post.mainImage).url()!}
        alt=""
      />
      <article className="mx-auto mb-10 max-w-3xl p-5">
        <h1 className="mt-10 mb-5 text-3xl font-bold">{post.title}</h1>
        <div>
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={urlFor(post.author.image).url()!}
            alt=""
          />
          <div className="flex items-center justify-between text-sm font-light">
            <p>
              By{' '}
              <span className="font-normal text-black">{post.author.name}</span>
            </p>
            <p className="pr-5">
              published at {new Date(post._createdAt).toDateString()}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <PortableText
            className=""
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),
              h2: (props: any) => (
                <h2 className="my-5 text-xl font-bold" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc ">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>
    </main>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = `*[_type == "post"] {
        _id,
        slug {
        current
      }
      }`

  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug] [0]  {
        _id,
        _createdAt,
        title,
        slug,
        author ->{
        name, image
      },
      'comments': *[_type == "comment" && post._ref == ^._id && approved == true],
      description,
      mainImage,
      slug,
      body
      }`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post,
    },
    revalidate: 60, //after 60 second it will update the cached version
  }
}
