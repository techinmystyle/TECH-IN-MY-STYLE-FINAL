import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function AiHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const links = [
    { to: '/ai-course', label: 'Home' },
    { to: '/ai-course/topics', label: 'Topics' },
  ]

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-inner">
        <Link to="/ai-course" className="logo-link">
          <span className="logo-text">AI <span>In My Style</span></span>
        </Link>

        <nav>
          <ul className={`nav-links${open ? ' active' : ''}`}>
            {links.map(l => (
              <li key={l.to}>
                <Link to={l.to} className={pathname === l.to ? 'active' : ''}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/courses" className="">← Back</Link>
            </li>
          </ul>
          <Link to="/ai-course/topics" className="btn nav-cta">
            <i className="fas fa-rocket"></i> Explore Topics
          </Link>
          <div className={`hamburger${open ? ' active' : ''}`} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </div>
        </nav>
      </div>
    </header>
  )
}
