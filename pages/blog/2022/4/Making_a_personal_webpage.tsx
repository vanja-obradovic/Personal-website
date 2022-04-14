/* eslint-disable @next/next/link-passhref */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { myPosts } from "../../../../utils/myPosts";
import Post from "../../../../models/Post";
import PostPageHeader from "../../../../components/PostPageHeader";
import { useEffect } from "react";

const Making_a_personal_webpage: NextPage = () => {
  const router = useRouter();

  const query = router.query.id;
  const id = parseInt((Array.isArray(query) ? query[0] : query) ?? "-1");

  const post: Post = myPosts[id];

  useEffect(() => {
    if (post === undefined) router.push("/404");
  }, [router, post]);

  return (
    <div className="postPage">
      {post && (
        <>
          <PostPageHeader post={post} />
          <hr />
          <div>Neki tekst 1</div>
        </>
      )}
    </div>
  );
};

export default Making_a_personal_webpage;
