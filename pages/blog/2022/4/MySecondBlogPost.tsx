import type { NextPage } from "next";
import { useRouter } from "next/router";

const MySecondBlogPost: NextPage = () => {
  const router = useRouter();
  const query: String = new String(router.query.object);
  const { title, summary, date, tags } = JSON.parse(query.toString());

  return (
    <div className="postPage">
      <h1>{title}</h1>
    </div>
  );
};

export default MySecondBlogPost;
