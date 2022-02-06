import Container from "@components/Container";
import Layout from "@components/Layout";
import React from "react";
import { useState } from "react";
import CardPost from "@components/CardPost";
import MockPosts from "../utils/posts.json";
import SectionHeader from "@components/SectionHeader";
import Head from "next/head";

export default function posts() {
  const [post, setPost] = useState(MockPosts);

  return (
    <>
      <Layout>
        <Head>
          <title>Posts &mdash; Epictetus</title>
        </Head>

        <Container>
          {!post.length ? (
            <div className=" text-center p-20">
              <h1 className=" text-6xl">No Result... </h1>
              <p className=" text-xl mt-4 text-white/60 md:w-6/12 mx-auto">
                We couldn’t find any posts with the keyword `yahahahayuk`.
                Please try another keyword.
              </p>
            </div>
          ) : (
            <>
              <SectionHeader>UI Design</SectionHeader>
              <div className="flex flex-wrap -mx-4 mt-6">
                {post.map((post) => (
                  <div className=" md:w-4/12 w-full px-4" key={post.id}>
                    <CardPost {...post} />
                  </div>
                ))}
              </div>
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}
