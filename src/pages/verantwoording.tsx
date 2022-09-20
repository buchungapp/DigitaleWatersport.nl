import React, { PropsWithChildren } from 'react'

import clsx from 'clsx'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '@/components/Container'
import CopyableSpan from '@/components/CopyableSpan'
import { Prose } from '@/components/Prose'
import { TwitterIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/maurits_square.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: PropsWithChildren<{
  icon: React.ComponentType<any>
  href: string
  className?: string
}>) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500  "
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function Accountability() {
  return (
    <>
      <Head>
        <title>Verantwoording - DigitaleWatersport.nl</title>
        <meta
          name="description"
          content="DigitaleWatersport.nl is een initatief van Maurits Misana, die de watersportsector wil helpen met het versnellen van de digitale transformatie."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                priority={true}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover "
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
              Ik ben Maurits Misana. Ik woon op Scheveningen en werk aan een
              gedigitaliseerde watersportsector.
            </h1>
            <Prose className="mt-6 space-y-7 text-justify text-base text-zinc-600">
              <p>
                Ik ben 25 jaar en een ondernemer, software developer en
                watersporter. Binnen de watersport ben ik actief als{' '}
                <Link
                  href="https://cwo.nl/instructeursopleidingen/opleider"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Opleider
                </Link>
                , maar ook via mijn eigen onderneming{' '}
                <Link
                  href="https://zeilscholen.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buchung
                </Link>
                , waar we software ontwikkelen voor de watersportsector.
              </p>
              <p>
                Ik geloof in een data-gecentreerd, digitaal landschap voor de
                watersport, waarin verschillende partijen oplossingen
                ontwikkelen om het beste de grote verscheidendheid aan bedrijven
                binnen de sector en hun klanten te bedienen.
              </p>
              <p>
                Om een gezond en inovatief digitaal landschap mogelijk te maken,
                waarbij verschillende partijen gelijke toegang hebben, is de
                beschikbaarheid en bereikbaarheid van data cruciaal.
              </p>
            </Prose>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.linkedin.com/in/mauritsmisana/"
                icon={LinkedInIcon}
              >
                Volg mij op LinkedIn
              </SocialLink>
              <SocialLink
                href="https://twitter.com/mauritsmisana"
                icon={TwitterIcon}
                className="mt-4"
              >
                Volg mij op Twitter
              </SocialLink>

              <li className="mt-8 flex border-t border-zinc-100 pt-8">
                <div className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500  ">
                  <MailIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                  <CopyableSpan
                    className={(copied) =>
                      clsx(
                        'ml-4 transition',
                        copied
                          ? '!text-teal-500'
                          : '!text-zinc-800 hover:!text-teal-500'
                      )
                    }
                  >
                    reacties@digitalewatersport.nl
                  </CopyableSpan>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
