import React from "react";
import CommentForm from "../../components/CommentForm";
import CommentList from "../../components/CommentList";
import CommentsViewModel from "./CommentsViewModel";

type Props = {
    idBook:string
};


const Comments = (props: Props) => {
    
    const {comments,createComment}=CommentsViewModel(props.idBook)
  return (
    <div className="container">
      <h2>Comments</h2>
      <CommentForm onCommentAdded={createComment} />
      <CommentList comments={comments} />
    </div>
  );
};

export default Comments