import PostMetaTitle from "@components/PostMetaTitle";
import React from "react";
import Container from "@components/Container";
import Layout from "@components/Layout";
import PostAuthor from "@components/PostAuthor";
import Head from "next/head";
import Image from "next/image";

export default function detail() {
  return (
    <Layout>
      <Head>
        <title>Detail &mdash; Epictetus</title>
      </Head>

      <Container>
        <div className=" md:w-6/12 w-full mx-auto flex flex-col items-center">
          <PostMetaTitle
            category={"UI DEsign"}
            date={"July 2, 2021"}
            title={
              "Understanding color theory: the color wheel and finding complementary colors"
            }
            center
          />
          <PostAuthor
            authorName={"Leslei Alexander"}
            authorJob={"UI Designer"}
            authorAvatar={"/img/author1.png"}
          />
        </div>
        <div className=" md:w-10/12 w-full mx-auto my-10">
          <Image
            src="/img/featured-thumbnail.png"
            alt="Thumbnail"
            className=" w-full rounded-lg "
            width="100%"
            height="50%"
            layout="responsive"
            // objectFit="contain"
          />
        </div>
        <div className=" md:w-8/12 mx-auto leading-relaxed text-justify">
          <p className=" text-xl mb-4">
            Male sixth sea it a. Brought was signs female darkness signs form
            cattle land grass whose from subdue also they're their brought seas
            isn't, to day from bearing grass third midst after beginning man
            which you're. Dry, gathering beginning given made them evening.
          </p>
          <p className=" mb-4">
            Lights dry. Thing, likeness, forth shall replenish upon abundantly
            our green. Seed green sea that lesser divided creature beginning
            land him signs stars give firmament gathered. Wherein there their
            morning a he grass. Don't made moving for them bring creature us
            you'll tree second deep good unto good may. Us yielding.
          </p>
          <p>
            Have. Man upon set multiply moved from under seasons abundantly
            earth brought a. They're open moved years saw isn't morning
            darkness. Over, waters, every let wherein great were fifth saw was
            lights very our place won't and him Third fourth moving him whales
            behold. Beast second stars lights great was don't green give subdue
            his. Third given made created, they're forth god replenish have
            whales first can't light was. Herb you'll them beast kind divided.
            Were beginning fly air multiply god Yielding sea don't were forth.
          </p>
        </div>
      </Container>
    </Layout>
  );
}
