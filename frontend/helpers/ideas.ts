import axios from "./axios";

export const fetchIdeas = (sorting: ideaSorting) =>
  axios.get(`http://localhost:3001/ideas/${sorting}`);

export const deleteIdea = (id: string | number) =>
  axios.delete(`http://localhost:3001/ideas/${id}`);

export enum ideaSorting {
  worst = "worst",
  best = "best",
  latest = "latest",
}
