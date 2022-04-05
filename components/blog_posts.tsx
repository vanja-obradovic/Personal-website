/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */

import PostCard from "./post_card";
import { myPosts } from "./posts";

const BlogPosts = () => {
  return (
    <div className="blogPostCardWrapper">
      {myPosts.map((post, index) => {
        return <PostCard key={index} post={post} />;
      })}
    </div>
  );
};

export default BlogPosts;
