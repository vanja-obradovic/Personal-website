/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */

import moment from "moment";
import Posts from "../models/Posts";
import PostCard from "./post_card";

const BlogPosts = () => {
  const Posts: Posts[] = [
    {
      title: "MyFirstBlogPost",
      summary: "Summary1",
      date: moment("20220405T0954"),
      tags: ["tag1", "tag3"],
    },
    {
      title: "MySecondBlogPost",
      summary: "Summary2",
      date: moment("20220405T0959"),
      tags: ["tag2"],
    },
    {
      title: "MyFirstBlogPost",
      summary: "Summary1",
      date: moment("20220405T0954"),
      tags: ["tag1"],
    },
    {
      title: "MySecondBlogPost",
      summary: "Summary2",
      date: moment("20220405T0959"),
      tags: ["tag2"],
    },
    {
      title: "MyFirstBlogPost",
      summary: "Summary1",
      date: moment("20220405T0954"),
      tags: ["tag1"],
    },
    {
      title: "MyFirstBlogPost",
      summary: "Summary1",
      date: moment("20220405T0954"),
      tags: ["tag1"],
    },
    {
      title: "MySecondBlogPost",
      summary: "Summary2",
      date: moment("20220405T0959"),
      tags: ["tag2"],
    },
    {
      title: "MyFirstBlogPost",
      summary: "Summary1",
      date: moment("20220405T0954"),
      tags: ["tag1"],
    },
    {
      title: "MySecondBlogPost",
      summary: "Summary2",
      date: moment("20220405T0959"),
      tags: ["tag2"],
    },
    {
      title: "MyFirstBlogPost",
      summary: "Summary1",
      date: moment("20220405T0954"),
      tags: ["tag1"],
    },
  ];

  return (
    <div className="blogPostCardWrapper">
      {Posts.map((post, index) => {
        return <PostCard key={index} post={post} />;
      })}
    </div>
  );
};

export default BlogPosts;
