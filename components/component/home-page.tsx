"use client";
import { Card, CardTitle } from "@/components/ui/card";
import { Inter , DM_Serif_Text, Instrument_Sans} from 'next/font/google'
import { projects } from "@/content";
import Image from "next/image";
import Link from "next/link";


const font = Instrument_Sans({
  weight: '400',
  subsets: ['latin'],

})

const blackInter = Inter({
  weight: '800',
  subsets: ['latin']

})

const headfont = DM_Serif_Text({
  weight: '400',
  subsets: ['latin']
})


export function HomePage() {
  return (
    <div className="flex flex-col py-10">
      <main className="relative fill-transparent" style={font.style}>


        <section className="mx-auto relative z-40 p-8" id="projects">
          <section className="lg:px-[20vw] md:px-[6vw] sm:px-[2vw] ">
            <h1 className="text-3xl  mt-28  leading-[60px]" style={font.style}>
             Designs by <a href="https://regisrex.me" className="underline text-slate-500 hover:opacity-100 opacity-80 underline-offset-8">R&eacute;gis</a>
            </h1>
            <p className="w-full opacity-60 text-xl my-10 leading-relaxed" style={font.style}>
              Since when I started my designing career, my goal in any project
              is to get off the need of tutorials or any kind of help to use the
              product. I believe that a good design is the one that doesn&apos;t
              need any explanation to be used. Here&apos;s some of my work.
            </p>
            <div className="py-3 px-6 border w-fit border-slate-100 text-black ">
         
            </div>
          </section>
          {/* <div className="py-20 flex items-center gap-2 lg:px-[20vw] md:px-[6vw] sm:px-[2vw] ">
            <span className="text-2xl ">Portifolio</span>
            <div className="h-[1px] w-full bg-neutral-200" />
          </div> */}
          <div className="grid gap-8 md:grid-cols-1">
            {projects.map((project, index) => (
              <Card key={index} >
                <Link href={project.link} className="relative h-[40vh] hover:h-[90vh] transition-all duration-300 rounded-2xl overflow-hidden">
                  <Image
                    src={project.image.src}
                    alt={project.title}
                    className="bg-white   object-cover h-[100%]"  
                    width={project.image.width}
                    height={project.image.height}
                  />
                  <div className="flex bottom-0 absolute w-full items-end p-6 hover:opacity-0 h-full bg-gradient-to-bl from-transparent  to-black">
                  <p className="text-4xl text-white" style={font.style}>{project.title}</p>
                  <p style={font.style}>Descriptive text</p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
