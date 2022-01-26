export default interface Vote {
  voteType: VoteType;
  userId: number;
  ideaId: number;
}

export interface VoteType {
  like: true;
  dislike: false;
}
