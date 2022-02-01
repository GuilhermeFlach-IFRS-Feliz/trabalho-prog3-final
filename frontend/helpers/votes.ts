import axios from "./axios";

export const castVote = (voteType: boolean, ideaId: number) => {
  axios.post("/votes/cast", {
    voteType,
    ideaId,
  });
};
