import Image from "next/image";
import Link from "next/link";
import React from "react";
import InfoPost from "./InfoPost";
export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article className=" py-6 ">
      <Link href="/detail">
        <a>
          <Image
            src={thumbnail}
            alt=""
            className=" w-full rounded mb-4"
            width="100%"
            height="50%"
            layout="responsive"
          />
        </a>
      </Link>

      <InfoPost {...infoPost} />
    </article>
  );
}
