import React from 'react'

import Head from 'next/head'

const HeadTags = ({
  title = 'DigitaleWatersport.nl - een eenvoudigere, leukere en toegankelijkere watersport.',
  desc = 'DigitaleWatersport.nl biedt een visie op een eenvoudigere, leukere en toegankelijkere watersport middels digitale technologie.',
  canonical = 'https://www.digitalewatersport.nl',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:site_name" content="DigitaleWatersport.nl" />
      <meta property="og:url" content={canonical} />

      <meta property="og:type" content={'website'} />

      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:creator" content="@MauritsMisana" />
    </Head>
  )
}

export default HeadTags
