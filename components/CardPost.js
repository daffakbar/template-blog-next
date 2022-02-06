import Link from "next/link";
import React from "react";
import InfoPost from "./InfoPost";
export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article className=" py-6 ">
      <Link href="/detail">
        <a>
          <img src={thumbnail} alt="" className=" w-full rounded mb-4" />
        </a>
      </Link>

      <InfoPost {...infoPost} />
    </article>
  );
}
