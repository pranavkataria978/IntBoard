import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Navbar,Button } from '@blueprintjs/core'
import { Alignment } from '@blueprintjs/core'
import Profile from '@/components/HomePage/Profile'
import FeaturedPosts from '@/components/HomePage/FeaturedPosts'
const inter = Inter({ subsets: ['latin'] })
import { getFeaturedPosts } from '@/utils/posts'
import { getOpenIssues } from '@/utils/issues'
import { getOpenProjects } from '@/utils/projects'
import MultipleIssues from '@/components/Issues/MultipleIssues'
import MultipleProjects from '@/components/Projects/MultipleProjects'

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
          
          <div className='lower-half'>

            <div>
              <h2 className='issues-heading'>Current Issues</h2>
              <MultipleIssues issues = {props.issues}></MultipleIssues>
            </div>

            <div>
              <h2 className='projects-heading'>Current Projects</h2>
              <MultipleProjects projects = {props.projects}></MultipleProjects>
            </div>

          </div>
          

        </div>
      </main>
    </>
  )
}

export function getStaticProps() {

    const featuredPosts = getFeaturedPosts();
    const issues = getOpenIssues();
    const projects = getOpenProjects();

    return {

        props: { posts: featuredPosts,
        
        issues: issues,
        projects: projects
      }
    }
}


