/* eslint-disable @next/next/link-passhref */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { myPosts } from "../../../../util/myPosts";
import Post from "../../../../models/Post";
import PostPageHeader from "../../../../components/PostPageHeader";

const MyFirstBlogPost: NextPage = () => {
  const router = useRouter();
  const query = router.query.id;
  const id = parseInt((Array.isArray(query) ? query[0] : query) ?? "0");

  const post: Post = myPosts[id];

  if (post === undefined) return null;

  return (
    <div className="postPage">
      <PostPageHeader post={post} />
      <hr />
      <div>neki tekst</div>
    </div>
  );
};

export default MyFirstBlogPost;
