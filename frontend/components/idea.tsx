import { getCookieParser } from "next/dist/server/api-utils";
import { castVote } from "../helpers/votes";
import Idea from "../types/Idea";
import { StyledIdea } from "./styled/idea.styled";

const Idea = ({ self }: Props) => {
  const vote = self.voteData ? self.voteData.voteType : undefined;

  async function Vote(type: boolean) {
    if (type === vote) return;

    castVote(type, self.ideaData.id);
  }

  return (
    <StyledIdea>
      <p>{self.ideaData.title}</p>
      <p>{self.ideaData.text}</p>
      <button
        onClick={() => Vote(true)}
        style={vote === true ? { backgroundColor: "blue" } : {}}
      >
        Like
      </button>
      <button
        onClick={() => Vote(false)}
        style={vote === false ? { backgroundColor: "red" } : {}}
      >
        Dislike
      </button>
    </StyledIdea>
  );
};

interface Props {
  self: Idea;
}

export default Idea;
