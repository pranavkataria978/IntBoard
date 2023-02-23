import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Navbar,Button } from '@blueprintjs/core'
import { Alignment } from '@blueprintjs/core'
import Profile from '@/components/HomePage/Profile'
import FeaturedPosts from '@/components/HomePage/FeaturedPosts'
const inter = Inter({ subsets: ['latin'] })
import { getFeaturedPosts } from '@/utils/posts'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Intern Dashboard</title>
        <meta name="description" content="NextJS Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <main className='main-page'>
        <Profile/>
        <div className='work-data'>
          <div >
            <h2 className='featured-posts'>Featured Posts</h2>
            <FeaturedPosts posts = {props.posts}/>
          </div>
          
          <div>Issues</div>

        </div>
      </main>
    </>
  )
}

export function getStaticProps() {

    const featuredPosts = getFeaturedPosts();

    return {

        props: { posts: featuredPosts}
    }
}


