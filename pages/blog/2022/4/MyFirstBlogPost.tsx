/* eslint-disable @next/next/link-passhref */
import moment from "moment";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const MyFirstBlogPost: NextPage = () => {
  const router = useRouter();
  if (router.query.object === undefined) return <div></div>;
  const query: string = router.query.object!.toString();

  const { title, summary, date, tags } = JSON.parse(query);

  return (
    <div className="postPage">
      <h1>{title}</h1>
      <div className="postPageHeader">
        <p>{moment(date).format("hh:mm, Do MMMM YYYY")} </p>
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
      <hr />
      <div>neki tekst</div>
    </div>
  );
};

export default MyFirstBlogPost;
