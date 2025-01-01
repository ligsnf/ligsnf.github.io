import SocialIcon from '@/components/social-icons'
import Tag from '@/components/Tag'
import projectsData from '@/data/projectsData'
import ListLayoutCompact from '@/layouts/ListLayoutCompact'
import { allAuthors, Authors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
// import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = {
  projects: 5,
  blog: 3,
}

export default function Home({ posts }) {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const { name, linkedin, github } = coreContent(author)

  return (
    <>
      <div className="space-y-8 sm:pt-6">
        <section className="space-y-2">
          <div className="flex flex-col">
            <h2 className="pb-4 pt-4 text-3xl font-bold leading-8 tracking-tight">{name}</h2>
            <div className="text-gray-500 dark:text-gray-400">Student & Software Developer</div>
            <div className="flex space-x-4 pt-6">
              <SocialIcon kind="github" href={github} text="GitHub" />
              <SocialIcon kind="linkedin" href={linkedin} text="LinkedIn" />
            </div>
          </div>
          <div className="prose max-w-none pb-4 pt-4 dark:prose-invert">
            <MDXLayoutRenderer code={author.body.code} />
          </div>
        </section>
        <section>
          <div>
            <h2 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
              Projects
            </h2>
          </div>
          <ListLayoutCompact
            items={projectsData}
            maxDisplay={MAX_DISPLAY.projects}
            ariaLabel="Projects"
            viewAllHref="/projects"
            viewAllText="All Projects"
          />
        </section>
        <section>
          <div>
            <h2 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
              Latest Posts
            </h2>
          </div>
          <ListLayoutCompact
            items={posts}
            maxDisplay={MAX_DISPLAY.blog}
            ariaLabel="Blog posts"
            viewAllHref="/blog"
            viewAllText="All Posts"
            renderExtra={(post) => (
              <div className="flex flex-wrap">
                {post.tags?.map((tag) => <Tag key={tag} text={tag} />)}
              </div>
            )}
          />
        </section>
      </div>
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
