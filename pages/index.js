import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import { useState } from "react";

import Container from "@components/Container";
import Layout from "@components/Layout";
import mockPosts from "../utils/posts.json";
export default function Home() {
  const [post, setPost] = useState(mockPosts);
  return (
    <Layout>
      <Head>
        <title>Home &mdash; Epictetus</title>
      </Head>
      <Container>
        <FeaturedPost />
        <div className="flex flex-wrap -mx-4 mt-6">
          {post.map((post) => (
            <div className=" md:w-4/12 w-full px-4" key={post.id}>
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
