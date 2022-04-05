/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */

import Posts from "../models/Posts";
import Link from "next/link";

const PostCard = ({
  post: { id, title, summary, date, tags },
}: {
  post: Posts;
}) => {
  return (
    <Link
      href={{
        pathname: `blog/${date.year()}/${date.month() + 1}/${title}`,
        query: { object: JSON.stringify({ title, summary, date, tags }) },
      }}
    >
      <div className="blogPostCard">
        <h3 style={{ marginBottom: "0" }}>{title}</h3>
        {date.format("hh:mm, Do MMMM YYYY")}
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
