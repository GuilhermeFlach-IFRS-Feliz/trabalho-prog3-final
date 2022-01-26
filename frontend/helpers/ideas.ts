import axios from "./axios";

export const fetchIdeas = (sorting: ideaSorting) =>
  axios.get(`http://localhost:3001/ideas/${sorting}`);

export enum ideaSorting {
  worst = "worst",
  best = "best",
  latest = "latest",
}
