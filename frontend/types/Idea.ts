import Vote from "./Vote";

export default interface Idea {
  id: number;
  title: string;
  text: string;
  date: Date;
  votes?: Vote[];
  userId: number;
}
