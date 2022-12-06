'use client'

import NavLink from './NavLink'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function RootLayout({ children }) {
  const activeSegment = useSelectedLayoutSegment()

  const links = [
    {label: '🏡 Home', path: '/', targetSegment: null}, 
    {label: '📦 Store', path: '/store', targetSegment: 'store'},
    {label: '📘 About', path: '/about', targetSegment: 'about'}
  ]
  
  return (
    <html>
      <head />
      {links.map ( (l, i) => 
        <NavLink key={i} {...l} activeSegment={activeSegment} />
      )}
      <body>{children}</body>
    </html>
  )
}
