import Link from "next/link"

export default function NavLink({label, path, targetSegment, activeSegment}) {
    return (<Link style={{
            textDecoration: (activeSegment === targetSegment) ? 'underline' : 'none',
            padding: '0.5rem'
            }} 
            href={path}>
            {label}
        </Link>)
}