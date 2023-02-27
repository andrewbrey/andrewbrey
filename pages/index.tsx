import Head from "next/head";
import Link from "next/link";

const links = [
  { text: "LinkedIn", link: "https://www.linkedin.com/in/andrew-brey" },
  { text: "Blog", link: "https://blog.andrewbrey.com" },
  { text: "GitHub", link: "https://github.com/andrewbrey" },
  { text: "Resume", link: "/assets/AndrewBrey_resume.pdf" },
];

const Index = () => {
  return (
    <>
      <Head>
        <title>Andrew Brey - Software Developer</title>
      </Head>

      <div className="flex flex-col items-center justify-center h-full p-4">
        <video
          className="fixed inset-0 object-cover w-screen h-screen blur-md"
          playsInline
          autoPlay
          muted
          loop
          poster="/assets/coffee.jpg"
        >
          <source src="/assets/coffee.webm" type="video/webm" />
          <source src="/assets/coffee.mp4" type="video/mp4" />
        </video>

        <div className="fixed inset-0 w-screen h-screen opacity-50 bg-smoke-900"></div>

        <div className="relative">
          <h1 className="text-4xl font-bold text-center uppercase md:text-6xl text-smoke-100">
            Andrew Brey
          </h1>
          <h2 className="mt-2 text-2xl text-center md:mt-3 md:text-3xl text-smoke-300">
            Software Developer
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-12 sm:grid-cols-3 md:grid-cols-4">
            {links.map((l) => (
              <Link
                key={l.text}
                href={l.link}
                className="px-3 py-1.5 rounded-full ring-2 ring-smoke-100 uppercase text-sm text-center whitespace-nowrap truncate text-smoke-100 bg-smoke-200 bg-opacity-10 hover:bg-opacity-30 focus:bg-opacity-30 focus:outline-none focus:ring-offset-2"
              >
                {l.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

export const config = {
  unstable_runtimeJS: false,
};
