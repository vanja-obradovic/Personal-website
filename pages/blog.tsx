import type { NextPage } from "next";
import { myPosts } from "../utils/myPosts";
import PostCard from "../components/PostCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Posts from "../models/Post";

const Blog: NextPage = () => {
  myPosts.sort((a: Posts, b: Posts): number => {
    return b.id - a.id;
  });

  return (
    <div className="page_wrapper">
      <Header />

      <div className="blogPostCardWrapper">
        {myPosts.map((post, index) => {
          return <PostCard key={index} post={post} />;
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
