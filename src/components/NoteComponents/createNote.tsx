import LinearProgress from "@mui/material/LinearProgress";

interface Props {
  textHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  saveHandler: () => void;
  inputText: string;
}

function CreateNote({ textHandler, saveHandler, inputText }: Props): JSX.Element {
  //character limit 
  const charLimit = 100; 
  const charLeft = charLimit - inputText.length; 
  return ( 
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}> 
      <textarea 
        cols={10} 
        rows={5} 
        value={inputText} 
        placeholder="Type...." 
        onChange={textHandler} 
        maxLength={100} 
      ></textarea> 
      <div className="note__footer"> 
        <span className="label">{charLeft} left</span> 
        <button className="note__save" onClick={saveHandler}> 
          Save 
        </button> 
      </div> 
      <LinearProgress 
        className="char__progress" 
        variant="determinate" 
        value={charLeft} 
      /> 
    </div> 
  ); 
} 
 
export default CreateNote;