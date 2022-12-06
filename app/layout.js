import NavLink from './NavLink'

export default function RootLayout({ children }) {
  const links = [
    {label: '🏡 Home', path: '/', targetSegment: null}, 
    {label: '📦 Store', path: '/store', targetSegment: 'store'},
    {label: '📘 About', path: '/about', targetSegment: 'about'}
  ]
  
  return (
    <html>
      <head />
      {links.map ( (l, i) => 
        <NavLink key={i} {...l} />
      )}
      <body>{children}</body>
    </html>
  )
}
