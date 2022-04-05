import type { NextPage } from "next";
import { useRouter } from "next/router";

const MySecondBlogPost: NextPage = () => {
  const router = useRouter();
  if (router.query.object === undefined) return <div></div>;
  const query: string = router.query.object!.toString();

  const { title, summary, date, tags } = JSON.parse(query);

  return (
    <div className="postPage">
      <h1>{title}</h1>
    </div>
  );
};

export default MySecondBlogPost;
