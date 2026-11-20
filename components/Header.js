"use client";
import Link from "next/link";import FullscreenMenu from "./FullscreenMenu";
export default function Header(){const items=[["About","/about"],["Experience","/experience"],["Capabilities","/services"],["Work","/work"],["Cases","/case-studies"]];return <header className="site-header"><div className="container nav"><Link href="/" className="logo">OMIT<b>.</b></Link><nav className="navlinks">{items.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</nav><div className="nav-right"><div className="status"><i/> Available</div><FullscreenMenu/></div></div></header>}
