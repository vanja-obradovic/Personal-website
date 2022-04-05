import moment from "moment";
import Post from "../models/Post";

function* IdGen(): Generator<number, number, unknown> {
  let i = 0;
  while (true) {
    yield i++;
  }
}

var gen = IdGen();

export const myPosts: Post[] = [
  {
    id: gen.next().value,
    title: "MyFirstBlogPost",
    summary: "Summary1",
    date: moment("20220405T0954"),
    tags: ["tag1", "tag3"],
  },
  {
    id: gen.next().value,
    title: "MySecondBlogPost",
    summary: "Summary2",
    date: moment("20220405T0959"),
    tags: ["tag2"],
  },
  {
    id: gen.next().value,
    title: "MyFirstBlogPost",
    summary: "Summary1",
    date: moment("20220405T0954"),
    tags: ["tag1"],
  },
  {
    id: gen.next().value,
    title: "MySecondBlogPost",
    summary: "Summary2",
    date: moment("20220405T0959"),
    tags: ["tag2"],
  },
  {
    id: gen.next().value,
    title: "MyFirstBlogPost",
    summary: "Summary1",
    date: moment("20220405T0954"),
    tags: ["tag1"],
  },
  {
    id: gen.next().value,
    title: "MyFirstBlogPost",
    summary: "Summary1",
    date: moment("20220405T0954"),
    tags: ["tag1"],
  },
  {
    id: gen.next().value,
    title: "MySecondBlogPost",
    summary: "Summary2",
    date: moment("20220405T0959"),
    tags: ["tag2"],
  },
  {
    id: gen.next().value,
    title: "MyFirstBlogPost",
    summary: "Summary1",
    date: moment("20220405T0954"),
    tags: ["tag1"],
  },
  {
    id: gen.next().value,
    title: "MySecondBlogPost",
    summary: "Summary2",
    date: moment("20220405T0959"),
    tags: ["tag2"],
  },
  {
    id: gen.next().value,
    title: "MyFirstBlogPost",
    summary: "Summary1",
    date: moment("20220405T0954"),
    tags: ["tag1"],
  },
];