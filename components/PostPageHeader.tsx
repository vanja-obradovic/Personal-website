/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */

import Link from "next/link";
import Posts from "../models/Post";

const PostPageHeader = ({
  post: { id, title, summary, date, tags },
}: {
  post: Posts;
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="postPageHeader">
        <p>{date.format("hh:mm, Do MMMM YYYY")} </p>
        <div className="tag_wrapper">
          {tags.map((tag: string, index: number) => (
            <Link href="/" key={index}>
              <p key={index} className="tags postPageTag">
                {tag}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPageHeader;
