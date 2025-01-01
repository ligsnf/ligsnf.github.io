import Link from '@/components/Link'
import { techStackLinks } from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

interface ListItem {
  title: string
  href?: string
  slug?: string
  description?: string
  tags?: string[]
  imgSrc?: string
  date?: string
}

interface ListLayoutCompactProps {
  items: ListItem[]
  maxDisplay: number
  ariaLabel?: string
  viewAllHref?: string
  viewAllText?: string
  renderExtra?: (item: ListItem) => React.ReactNode
}

export default function ListLayoutCompact({
  items,
  maxDisplay,
  ariaLabel,
  viewAllHref,
  viewAllText = 'View All',
  renderExtra,
}: ListLayoutCompactProps) {
  return (
    <>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700" aria-label={ariaLabel}>
        {!items.length && 'No items found.'}
        {items.slice(0, maxDisplay).map((item) => {
          const { date, title, description } = item
          const href = item.href || `/blog/${item.slug}`
          return (
            <li key={title} className="py-4">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  {item.date ? (
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400 sm:text-base">
                        <time dateTime={item.date}>
                          {formatDate(item.date, siteMetadata.locale)}
                        </time>
                      </dd>
                    </dl>
                  ) : (
                    item.tags && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Link
                            key={tag}
                            href={techStackLinks[tag]}
                            className="text-sm font-medium text-gray-500 hover:text-primary-600 dark:hover:text-primary-400"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    )
                  )}
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-2">
                      <Link href={href}>
                        <h2 className="text-lg font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl">
                          {title}
                        </h2>
                        {description && (
                          <div className="truncate text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                            {description}
                          </div>
                        )}
                      </Link>
                      {renderExtra && renderExtra(item)}
                    </div>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
      {items.length > maxDisplay && viewAllHref && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href={viewAllHref}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={viewAllText}
          >
            {viewAllText} &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
