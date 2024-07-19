
import { CommentModel } from "../../../domain/model/Comment";
import './styles.css'

export interface CommentProps {
    comments: CommentModel[];
    navigateTo?: (id: string) => void;
  }
const CommentList= ({comments}:CommentProps) => {

    return (
       
        <ul className="comment-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment-item">
              <p>{comment.message}</p>
              <small>
                by {comment.author} on {new Date(comment.createdAt).toLocaleString()}
              </small>
              <br />
            </li>
          ))}
        </ul>
      
    );
  };
  
  export default CommentList;