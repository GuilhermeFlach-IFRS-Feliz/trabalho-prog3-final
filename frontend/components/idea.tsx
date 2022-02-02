import { getCookieParser } from "next/dist/server/api-utils";
import { MdArrowCircleDown, MdArrowCircleUp } from "react-icons/md";
import { castVote } from "../helpers/votes";
import IdeaType from "../types/Idea";
import { StyledIdea, IdeaTitle, IdeaText, IdeaButtonsWrapper, IdeaVoteCount, VoteButton, IdeaUser } from "./styled/Idea.styled";

const Idea = ({ self }: Props) => {
  const vote = self.voteData ? self.voteData.voteType : undefined;

  async function Vote(type: boolean) {
    if (type === vote) return;

    castVote(type, self.ideaData.id);
  }

  return (
    <StyledIdea>
      <IdeaTitle>{self.ideaData.title}</IdeaTitle>
      <IdeaUser>{self.ideaData.user.username}</IdeaUser>
      <IdeaText> {self.ideaData.text}</IdeaText>
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
}

export default Idea;
