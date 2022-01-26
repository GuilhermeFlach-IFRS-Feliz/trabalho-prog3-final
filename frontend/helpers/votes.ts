import axios from "./axios";

export const castVote = (type: boolean, ideaId: number) => {
  axios.post("/votes/cast", {
    type,
    ideaId,
  });
};
