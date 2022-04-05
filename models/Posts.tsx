import { Moment } from "moment";

export default class Posts {
  id: number | void;
  title: string;
  summary: string;
  date: Moment;
  tags: string[];

  constructor(
    id: number,
    title: string,
    summary: string,
    date: Moment,
    tags: string[]
  ) {
    this.id = id;
    this.title = title;
    this.summary = summary;
    this.date = date;
    this.tags = tags;
  }
}
