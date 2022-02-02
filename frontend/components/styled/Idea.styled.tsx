import styled from "styled-components";

export const StyledIdea = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;

  background-color: aliceblue;
  border-radius: 5px;
  margin-top: 10px;
  height: 500px;
  padding: 0px 20px 20px 20px;

  width: 300px;
`;

export const IdeaTitle = styled.p`
  font-weight: bold;
  text-align: center;
  height: 15px;
`;

export const IdeaUser = styled.p`
  font-weight: bold;
  text-align: center;

  height: 15px;
`;


export const IdeaText = styled.p`
  flex:1;
  border: 1px solid red;
  text-align: justify;
`;

export const IdeaVoteCount = styled.p`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  padding: 0px 5px;

  overflow: hidden;
  height: 20px;
  
  span {
    line-height: 20px;
    vertical-align: middle;
    margin-top: -2px;
    margin-left: 3px;
    margin-right: 3px;
  }
  
`;

export const IdeaButtonsWrapper = styled.p`
  height: 15px;
`;

export const VoteButton = styled.button`
  border: 2px solid #ffab00;
  background-color: #ffe0b2;
  padding: 3px 5px;
  margin: 3px;
  
`;