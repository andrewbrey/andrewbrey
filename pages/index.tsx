import Head from "next/head";
import Container from "../components/container";
import Link from "next/link";
import Layout from "../components/layout";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Link as={`/blog`} href="/blog">
            <a className="hover:underline">Blog</a>
          </Link>
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const config = {
  unstable_runtimeJS: false,
};
