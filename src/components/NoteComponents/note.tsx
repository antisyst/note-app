import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

interface NoteProps {
  id: number;
  text: string;
  deleteNote: (id: number) => void;
}

function Note({ id, text, deleteNote }: NoteProps): JSX.Element { 
  return ( 
    <div className="note animate__animated animate__jello"> 
      <div className="note__body">{text}</div> 
      <div className="note__footer" style={{ justifyContent: "flex-end" }}> 
        <DeleteForeverOutlinedIcon 
          className="note__delete" 
          onClick={() => deleteNote(id)} 
          aria-hidden="true" 
        ></DeleteForeverOutlinedIcon> 
      </div> 
    </div> 
  ); 
} 
 
export default Note;
