import Head from "next/head";
import Link from "next/link";

const links = [
  { text: "LinkedIn", link: "https://www.linkedin.com/in/andrew-brey" },
  { text: "Blog", link: "https://blog.andrewbrey.com" },
  { text: "GitHub", link: "https://github.com/andrewbrey" },
  {
    text: "Resume",
    link:
      "https://static.fluencyy.com/www.andrewbrey.com/AndrewBrey_resume.pdf",
  },
  { text: "Fluencyy LLC", link: "https://www.fluencyy.com" },
];

const Index = () => {
  return (
    <>
      <Head>
        <title>Andrew Brey - Software Developer</title>
      </Head>

      <div className="p-4 flex flex-col items-center justify-center h-screen">
        <video
          className="fixed inset-0 h-screen w-screen object-cover"
          playsInline
          autoPlay
          muted
          loop
          poster="/assets/coffee.jpg"
        >
          <source src="/assets/coffee.webm" type="video/webm" />
          <source src="/assets/coffee.mp4" type="video/mp4" />
        </video>

        <div className="fixed inset-0 h-screen w-screen bg-smoke-900 opacity-50"></div>

        <div className="relative">
          <h1 className="text-5xl md:text-6xl text-smoke-100 font-bold uppercase text-center">
            Andrew Brey
          </h1>
          <h2 className="mt-2 md:mt-3 text-2xl md:text-3xl text-smoke-300 text-center">
            Software Developer
          </h2>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {links.map((l) => (
              <Link key={l.text} href={l.link}>
                <a className="px-3 py-1.5 rounded-full ring-2 ring-smoke-100 uppercase text-sm text-center whitespace-nowrap truncate text-smoke-100 bg-smoke-200 bg-opacity-10 hover:bg-opacity-30 focus:bg-opacity-30 focus:outline-none focus:ring-offset-2">
                  {l.text}
                </a>
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
