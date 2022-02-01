import Head from 'next/head'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import { sanityClient } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Blog-Bari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex items-center justify-between border-y border-black bg-gray-100 py-10 lg:py-0">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            Globe Notes is a place to write, read & connect!
          </h1>
          <h2>
            Its easy and free to post your thinking on anything and connects
            with readers.
          </h2>
        </div>
        <div>
          <img
            className="hidden h-32 md:inline-flex lg:h-full"
            src="/image.png"
            alt=""
          ></img>
        </div>
      </div>
      <Blogs posts={posts} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] {
      _id,
      title,
      slug,
      author ->{
      name, image
    },
    description,
    mainImage,
    }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
