'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'


export default function NavLink({label, path, targetSegment}) {
    const activeSegment = useSelectedLayoutSegment()
    return (<Link style={{
            textDecoration: (activeSegment === targetSegment) ? 'underline' : 'none',
            padding: '0.5rem'
            }} 
            href={path}>
            {label}
        </Link>)
}