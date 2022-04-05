import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { myPosts } from "../util/myPosts";
import PostCard from "../components/PostCard";

const Blog: NextPage = () => {
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
