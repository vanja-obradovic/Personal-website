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
    title: "Making a personal webpage",
    summary: "Making a personal webpage has never been easier",
    date: moment("20220405T0951"),
    tags: ["Web", "HowTo"],
  },
  {
    id: gen.next().value,
    title: "Choosing a hosting provider",
    summary: "Comparison of the most popular free hosting providers",
    date: moment("20220406T1000"),
    tags: ["Web"],
  },
  {
    id: gen.next().value,
    title: "VS Code shortcuts",
    summary:
      "List of the most useful VS Code shortcuts that are guaranteed to increase your productivity",
    date: moment("20220407T1500"),
    tags: ["Coding", "Tips"],
  },
  {
    id: gen.next().value,
    title: "React hooks",
    summary: "Introduction to react hooks",
    date: moment("20220408T1200"),
    tags: ["Web", "React"],
  },
];
