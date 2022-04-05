import type { NextPage } from "next";
import { useRouter } from "next/router";

const MySecondBlogPost: NextPage = () => {
  const router = useRouter();
  const { title, summary, date, tags } = JSON.parse(router.query.object);

  return (
    <div className="postPage">
      <h1>{title}</h1>
    </div>
  );
};

export default MySecondBlogPost;
