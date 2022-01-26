import { getCookieParser } from "next/dist/server/api-utils";
import { castVote } from "../helpers/votes";
import Idea from "../types/Idea";

const Idea = ({ self }: Props) => {

  const vote = (self.voteData && self.voteData.voteType) ? self.voteData.voteType: undefined;

  async function Vote(type: boolean) {
    if (type === vote) return;

    castVote(type, self.ideaData.id);
  }

  return (
    <div>
      <p>{self.ideaData.title}</p>
      <p>{self.ideaData.text}</p>
      <button
        onClick={() => Vote(true)}
        style={vote ? { backgroundColor: "blue" } : {}}
      >
        Like
      </button>
      <button
        onClick={() => Vote(false)}
        style={vote === false ? { backgroundColor: "red" } : {}}
      >
        Dislike
      </button>
    </div>
  );
};

interface Props {
  self: Idea;
}

export default Idea;
