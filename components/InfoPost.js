import React from "react";
import PostAuthor from "./PostAuthor";
import PostMetaTitle from "./PostMetaTitle";

export default function InfoPost({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <>
      <PostMetaTitle category={category} title={title} date={date} />
      <p className=" text-white/60 mt-6 w-10/12">{shortDescription}</p>
      <PostAuthor
        authorName={authorName}
        authorAvatar={authorAvatar}
        authorJob={authorJob}
      />
    </>
  );
}
