export default interface Idea {
  ideaData : {
    id: number;
    title: string;
    text: string;
    date: Date;
    user : {
      username: string
    }
  },
  voteData : {
    voteType?: boolean,
    upvotes : number,
    downvotes : number,
  }
}
