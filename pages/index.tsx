import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Andrew Brey - Software Developer</title>
      </Head>

      <div className="flex flex-col items-center justify-center h-screen">
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

        <div className="relative">
          <h1 className="text-6xl text-white">Andrew Brey</h1>
        </div>
      </div>
    </>
  );
};

export default Index;

export const config = {
  unstable_runtimeJS: false,
};
