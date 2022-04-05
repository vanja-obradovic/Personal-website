import { Moment } from "moment";

export default class Posts {
  title: string;
  summary: string;
  date: Moment;
  tags: string[];

  constructor(title: string, summary: string, date: Moment, tags: string[]) {
    this.title = title;
    this.summary = summary;
    this.date = date;
    this.tags = tags;
  }
}
