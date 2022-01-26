import { castVote } from "../helpers/votes";
import Idea from "../types/Idea";

const Idea = ({ self }: Props) => {
  const vote = self.votes ? self.votes[0].voteType : undefined;

  async function Vote(type: boolean) {
    if (type === vote) return;

    castVote(type, self.id);
  }

  return (
    <div>
      <p>{self.title}</p>
      <p>{self.text}</p>
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
