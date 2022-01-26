import { useEffect, useState } from "react";
import { fetchIdeas, ideaSorting } from "../helpers/ideas";
import TIdea from "../types/Idea";
import Idea from "./idea";

const Ideas = () => {
  const [ideas, setIdeas] = useState<TIdea[]>([]);
  const [sorting, _setSorting] = useState<ideaSorting>(ideaSorting.latest);

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
        ideas.map((idea) => <Idea key={idea.ideaData.id} self={idea}></Idea>)}
    </>
  );
};

export default Ideas;