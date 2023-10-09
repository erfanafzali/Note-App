import "./App.css";
import Navbar, { NoteLenght, NoteSort } from "./components/Navbar";
import NoteStatus from "./components/NoteStatus";
import NoteList from "./components/NoteList";
import AddNewNote from "./components/AddNewNote";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar>
        <NoteLenght />
        <NoteSort />
      </Navbar>
      <NoteStatus />
      <Main>
        <AddNewNote />
        <NoteList />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return (
    <div className="w-full h-auto flex justify-between items-start px-4 py-6">
      {children}
    </div>
  );
}
