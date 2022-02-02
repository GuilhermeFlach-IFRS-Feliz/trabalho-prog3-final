import { getCookieParser } from "next/dist/server/api-utils";
import { MdArrowCircleDown, MdArrowCircleUp } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { castVote } from "../helpers/votes";
import IdeaType from "../types/Idea";
import { StyledIdea, IdeaTitle, IdeaText, IdeaButtonsWrapper, IdeaVoteCount, VoteButton, IdeaUser, DeleteButton } from "./styled/Idea.styled";

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
      <IdeaTitle>{self.ideaData.title}</IdeaTitle>
      
      <IdeaUser>Por: {self.ideaData.user.username}</IdeaUser>

      <IdeaText> {self.ideaData.text}</IdeaText>
      
      {user?.username === self.ideaData.user.username && (
        <DeleteButton onClick={() => deleteSelf(index, self.ideaData.id)}>
          Deletar
        </DeleteButton>
      )}

      <IdeaVoteCount> <MdArrowCircleUp></MdArrowCircleUp> <span>{self.voteData.upvotes} | {self.voteData.downvotes}</span> <MdArrowCircleDown></MdArrowCircleDown> </IdeaVoteCount>
      <IdeaButtonsWrapper>
      

      <VoteButton
        onClick={() => Vote(true)}
        style={vote === true ? { backgroundColor: "#53F23D" } : {}}
      >
        Gostei
      </VoteButton>
      <VoteButton
        onClick={() => Vote(false)}
        style={vote === false ? { backgroundColor: "#FA454D" } : {}}
      >
        Não Gostei
      </VoteButton>
      </IdeaButtonsWrapper>
    </StyledIdea>
  );
};

interface Props {
  self: IdeaType;
  deleteSelf: (i: number, id: number) => void;
  index: number;
}

export default Idea;
