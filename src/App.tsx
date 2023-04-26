import "./App.scss";
import Notes from "./components/NoteComponents/notes";
import Header from "./components/NoteComponents/header";
import Footer from "./components/wm/footer";
function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
      <Footer/>
    </div>
  );
}
export default App;
