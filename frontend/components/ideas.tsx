import { useEffect, useState } from "react";
import { fetchIdeas, ideaSorting } from "../helpers/ideas";
import TIdea from "../types/Idea";
import IdeaType from "./idea";

const Ideas = ({sorting} : {sorting : ideaSorting}) => {
  const [ideas, setIdeas] = useState<TIdea[]>([]);

  useEffect(() => {
    async function fetch() {
      const { data } = await fetchIdeas(sorting);
      if (!data) return;
      setIdeas(data);
    }
    fetch();
  }, [sorting]); //re-fetch every time sorting updates

  return (
    <>
      {ideas.length &&
        ideas.map((idea) => <IdeaType key={idea.ideaData.id} self={idea}></IdeaType>)}
    </>
  );
};

export default Ideas;
