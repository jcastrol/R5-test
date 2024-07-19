import { FormEvent, useState } from "react";
import './styles.css'

const CommentForm: React.FC<{ onCommentAdded: (author:string,message:string) => void }> = ({
  onCommentAdded,
}) => {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    onCommentAdded(author,message);
    // setAuthor("");
    // setMessage("");
  };

  return (
    
    <form className="comment-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm