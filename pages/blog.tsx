import type { NextPage } from "next";
import Footer from "../components/footer";
import Header from "../components/header";
import BlogPosts from "../components/blog_posts";

const Blog: NextPage = () => {
  return (
    <div className="page_wrapper">
      <Header />

      <BlogPosts />

      <Footer />
    </div>
  );
};

export default Blog;
