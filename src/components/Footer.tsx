import Link from 'next/link'
import { useRouter } from 'next/router'

import { Container } from '@/components/Container'
import { GitHubIcon } from '@/components/SocialIcons'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="transition hover:text-teal-500 ">
      {children}
    </Link>
  )
}

export function Footer() {
  let isHomePage = useRouter().pathname === '/'

  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 ">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 ">
                {isHomePage ? null : <NavLink href="/">Visie</NavLink>}
                <NavLink href="/verantwoording">Verantwoording</NavLink>
                <NavLink href="/artikelen">Artikelen</NavLink>
              </div>
              <div className="flex items-center gap-x-2">
                <p className="text-sm text-zinc-400 ">
                  &copy; DigitaleWatersport.nl - {new Date().getFullYear()}
                </p>
                <Link
                  href="https://github.com/Zeilscholen/DigitaleWatersport.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="h-6 w-6 flex-none fill-zinc-500 transition hover:fill-teal-500" />
                </Link>{' '}
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
