"use client";
import { Card, CardTitle } from "@/components/ui/card";
import { projects } from "@/content";
import Image from "next/image";
import Link from "next/link";

export function HomePage() {
  // useEffect(() => {
  //   const follower = document.getElementById("follower");
  //   if (follower)
  //     window.addEventListener("mousemove", (e) => {
  //       console.log(e);
  //       follower.style.left = e.pageX + "px";
  //       follower.style.top = e.pageY + "px";
  //     });
  // }, []);
  return (
    <div className="flex flex-col">
      <main className="relative fill-transparent ">
        {/* <div
          className="w-[] h-[60vw] bg-blue-100 opacity-10 rounded-full absolute"
          id="follower"
        /> */}

        <section className="mx-auto relative z-40" id="projects">
          <section className="lg:px-[20vw] md:px-[6vw] sm:px-[2vw] ">
            <header className="py-12">
              <span className="font-bold tracking-widest opacity-70 uppercase">
                Regis NDIZIHIWE
              </span>
            </header>
            <h1 className="text-5xl font-extrabold mt-16  leading-[60px]">
              My name is Rex, I&apos;m a freelance web and mobile UI/UX designer
              living in Kigali, Rwanda.
            </h1>
            <p className="w-full font-medium opacity-60 text-xl my-10 leading-relaxed">
              Since when I started my designing career, my goal in any project
              is to get off the need of tutorials or any kind of help to use the
              product. I believe that a good design is the one that doesn&apos;t
              need any explanation to be used.
            </p>
            <div className="py-3 px-6 border w-fit border-slate-100 text-black ">
              <span className="font-medium">
                📧&nbsp;Mail me at{" "}
                <a
                  className="text-black hover:text-black-600"
                  href="mailto:ndizihiweregis06@gmail.com"
                >
                  ndizihiweregis06@gmail.com
                </a>
              </span>
            </div>
          </section>
          <div className="py-20 flex items-center gap-2 lg:px-[20vw] md:px-[6vw] sm:px-[2vw] ">
            <span className="text-2xl font-black">Portifolio</span>
            <div className="h-[1px] w-full bg-neutral-200" />
          </div>
          <div className="grid gap-8 md:grid-cols-1">
            {projects.map((project, index) => (
              <Card key={index}>
                <Link href={project.link}>
                  <Image
                    src={project.image.src}
                    alt={project.title}
                    className="bg-white rounded-2xl h-screen object-cover"  
                    width={project.image.width}
                    height={project.image.height}
                  />
                </Link>
              </Card>
            ))}
          </div>
        </section>

        <svg
          className="scale-150 z-20 h-[100px] w-[100px] fixed text-yellow-100 top-10 right-16"
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 56 56"
        >
          <path
            fill="currentColor"
            d="M13.457 44.758c6.492 6.492 14.93 8.437 19.078 8.836c1.219.14 1.899-.61 1.992-1.383c.094-.82-.422-1.711-1.593-1.875c-3.75-.516-11.508-2.203-17.133-7.898c-9.188-9.211-10.922-23.133-3.422-30.633c6.094-6.07 16.242-5.297 23.719-1.266l2.437-2.367c-9.094-5.461-21.328-5.906-28.5 1.289c-8.531 8.555-7.406 24.469 3.422 35.297m34.36-33.211l1.874-1.875c.89-.89.938-2.203.024-3.047l-.61-.562c-.796-.75-2.039-.727-2.906.093l-1.851 1.899Zm-22.758 22.71l21.046-21.023l-3.492-3.468l-21.023 21l-1.945 4.476c-.188.492.304.985.82.82Zm-3.07 3.493c7.663 7.664 19.991 10.688 26.882 3.82c5.625-5.648 4.898-15.68-1.125-24.304l-2.39 2.39c4.78 7.078 5.718 15.024 1.171 19.57c-5.53 5.532-14.672 2.907-20.953-3.023Z"
          />
        </svg>
        <svg
          className="w-[400px] z-20 h-[400px]  text-green-100 fixed top-10 left-24"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M19.14 28a3.42 3.42 0 0 1-2.42-5.85L21.86 17a1.42 1.42 0 1 0-2-2L13 21.85a3.5 3.5 0 0 1-4.85 0a3.43 3.43 0 0 1 0-4.84l8.58-8.58a1.42 1.42 0 1 0-2-2L6.41 14.7L5 13.3L13.29 5a3.43 3.43 0 0 1 4.84 4.85l-8.57 8.57a1.42 1.42 0 0 0 0 2a1.45 1.45 0 0 0 2 0l6.86-6.86a3.43 3.43 0 1 1 4.85 4.84l-5.15 5.15a1.42 1.42 0 0 0 2 2l4.44-4.43L26 22.56L21.56 27a3.38 3.38 0 0 1-2.42 1"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[400px] z-20 h-[400px]  text-orange-50 fixed top-[80vh] right-32"
          width="15"
          height="15"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346"
            clip-rule="evenodd"
          />
        </svg>
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
