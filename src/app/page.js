import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const navItems = [
    {id:1 , item:'About' , href:'#about'},
    {id:2 , item:'Projects' , href:'#projects'},
    {id:3 , item:'Contact' , href:'#Contact'},
  ]

  return (
    <div>
   <div className="h-20 min-w-screen bg-white/20 backdrop-blur-lg flex items-center justify-between">
      <h1 className="text-3xl font-mono text-transparent bg-gradient-to-r from-orange-300 via-blue-300 to-white bg-clip-text">Portfolio</h1>
      <div className="flex gap-10 p-5">
      {navItems.length > 0 && 
      (navItems.map((item,id) => (
        <Link key={id} href={item.href} >
        <div className="text-2xl font-mono">{item.item}</div>
        </Link>
      )))
      }
      </div>
    </div>
    <section id="about" className="min-h-screen max-[315px]:w-full max-[315px]:bg-amber-800 bg-amber-300">About</section>
    <section id="projects" className="min-h-screen min-w-screen bg-blue-300">Projects</section>
    </div>
  );
}
