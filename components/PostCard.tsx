/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */

import Link from "next/link";
import { FC } from "react";
import Posts from "../models/Post";

type PostCardProps = {
  post: Posts;
};

const PostCard: FC<PostCardProps> = ({ post }) => {
  const { id, title, summary, date, tags } = post;
  return (
    <Link
      href={{
        pathname: `blog/${date.year()}/${date.month() + 1}/${title.replaceAll(
          " ",
          "_"
        )}`,
        query: { id: id },
      }}
    >
      <div className="blogPostCard">
        <h3 style={{ marginBottom: "0" }}>{title}</h3>
        {date.format("HH:mm, Do MMMM YYYY")}
        <hr />
        <p>{summary}</p>
        <div className="tag_wrapper">
          {tags.map((tag, index) => (
            <Link href="/" key={index}>
              <p key={index} className="tags">
                {tag}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
