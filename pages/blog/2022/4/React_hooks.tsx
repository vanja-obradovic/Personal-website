import type { NextPage } from "next";
import { useRouter } from "next/router";
import { myPosts } from "../../../../utils/myPosts";
import Post from "../../../../models/Post";
import PostPageHeader from "../../../../components/PostPageHeader";

const React_hooks: NextPage = () => {
  const router = useRouter();

  const query = router.query.id;
  const id = parseInt((Array.isArray(query) ? query[0] : query) ?? "-1");

  const post: Post = myPosts[id];
  if (post === undefined) return null;

  return (
    <div className="postPage">
      <PostPageHeader post={post} />
      <hr />
      <div>Neki tekst 4</div>
    </div>
  );
};

export default React_hooks;
