import { useEffect, useState } from "react";
import { deleteIdea, fetchIdeas, ideaSorting } from "../helpers/ideas";
import TIdea from "../types/Idea";
import IdeaType from "./idea";

const Ideas = ({ sorting }: { sorting: ideaSorting }) => {
  const [ideas, setIdeas] = useState<TIdea[]>([]);

  useEffect(() => {
    async function fetch() {
      const { data } = await fetchIdeas(sorting);
      if (!data) return;
      setIdeas(data);
    }
    fetch();
  }, [sorting]); //re-fetch every time sorting updates

  function DeleteIdea(i: number, id: number) {
    deleteIdea(id);
    setIdeas((prevIdeas) => {
      const newIdeas = [...prevIdeas];
      newIdeas.splice(i, 1);
      return newIdeas;
    });
  }

  return (
    <>
      {ideas.length &&
        ideas.map((idea, i) => (
          <IdeaType
            key={idea.ideaData.id}
            self={idea}
            deleteSelf={DeleteIdea}
            index={i}
          ></IdeaType>
        ))}
    </>
  );
};

export default Ideas;
