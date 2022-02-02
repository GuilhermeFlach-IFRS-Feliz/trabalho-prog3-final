import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { castVote } from "../helpers/votes";
import IdeaType from "../types/Idea";
import { StyledIdea } from "./styled/idea.styled";

const Idea = ({ self, deleteSelf, index }: Props) => {
  const { user } = useContext(AuthContext);
  const [vote, setVote] = useState<boolean | undefined>(
    self.voteData ? self.voteData.voteType : undefined
  );

  async function Vote(type: boolean) {
    if (type === vote) return;

    castVote(type, self.ideaData.id);
    setVote(type);
  }

  return (
    <StyledIdea>
      {user?.username === self.ideaData.user.username && (
        <button onClick={() => deleteSelf(index, self.ideaData.id)}>
          Deletar
        </button>
      )}
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
  self: IdeaType;
  deleteSelf: (i: number, id: number) => void;
  index: number;
}

export default Idea;
