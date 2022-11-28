import Link from 'next/link';

export default function Navigation() {
  return (
    <div style={{display: "flex"}}>
    <ul style={{display:"flex" }}>
      <li style={{listStyleType: "none", marginRight: "10px"}}>
        <Link href="/">Home</Link>
      </li>
      <li style={{listStyleType: "none"}}>
        <Link href="/dashboard">Dashboard</Link>
      </li>
    </ul>
    </div>
  )
}