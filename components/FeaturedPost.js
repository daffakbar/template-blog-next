import Image from "next/image";
import Link from "next/link";
import React from "react";
import InfoPost from "./InfoPost";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-4 lg:items-center items-start flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full mb-4 md:mb-0">
          <Link href={"/detail"}>
            <a>
              <Image
                src="/img/featured-thumbnail.png"
                alt="Featured Thumbnail"
                className=" rounded-xl w-full"
                width="100%"
                height="50%"
                layout="responsive"
              />
            </a>
          </Link>
        </div>
        <div className="px-4 lg:w-4/12 md:w-5/12 w-full">
          <InfoPost
            category="UI DESIGN"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            authorAvatar="/img/author1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
      <hr className=" border-white/10 mt-10 lg:hidden" />
    </article>
  );
}
