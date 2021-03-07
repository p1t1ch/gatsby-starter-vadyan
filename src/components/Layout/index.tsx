import React from 'react'
import { Link } from 'gatsby'
import { ReactComponent as LogoIcon } from '@/icons/logo.svg'
import { ReactComponent as GithubIcon } from '@/icons/github.svg'

interface LayoutProps {
  /** Page content */
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-rows-layout min-h-screen">
      <header className="z-10 flex items-center p-4 shadow">
        <LogoIcon className="w-16 h-16 md:w-24 md:h-24 mr-4 md:mr-8" />
        <Link to="/" className="header">
          Gatsby Starter Vadyan
        </Link>
      </header>
      <main className="grid grid-flow-row gap-6 justify-items-center content-start py-6 px-4 md:py-12 bg-purple">
        {children}
      </main>
      <footer className="grid place-items-center py-2 px-4 shadow">
        <a href="https://github.com/p1t1ch/gatsby-starter" target="_blank" rel="nofollow noopener noreferrer">
          <GithubIcon title="Project page on Github" className="w-12 h-12" />
        </a>
      </footer>
    </div>
  )
}

export default Layout
