import Head from 'next/head'

import { Card } from '@/components/Card'
import CopyableSpan from '@/components/CopyableSpan'
import HeadTags from '@/components/HeadTags'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'
import { Article } from '@/types'

function Article({ article }: { article: Article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/artikelen/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Lees artikel</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }: { articles: Article[] }) {
  return (
    <>
      <HeadTags
        title="Artikelen - DigitaleWatersport.nl"
        desc="Overzicht van achtergrond artikelen die de visie op een digitale watersportwereld verder duiden."
        canonical="https://www.digitalewatersport.nl/artikelen"
      />
      <SimpleLayout
        title="Achtergrond artikelen."
        intro={
          <>
            Technische posts, visies en achtergrond artikelen over de digitale
            watersportwereld. Reageren kan via{' '}
            <CopyableSpan>reacties@digitalewatersport.nl</CopyableSpan>.
          </>
        }
      >
        <div className="md: md:border-l md:border-zinc-100 md:pl-6">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
