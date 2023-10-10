import "./App.css";
import Navbar, { NoteLenght, NoteSort } from "./components/Navbar";
import NoteStatus from "./components/NoteStatus";
import NoteList from "./components/NoteList";
import AddNewNote from "./components/AddNewNote";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleCheckNote = (e) => {
    const noteId = Number(e.target.value);
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <div className="container mx-auto">
      <Navbar notes={notes}>
        <NoteLenght notes={notes} />
        <NoteSort />
      </Navbar>
      <NoteStatus notes={notes} onCheckNote={handleCheckNote} />
      <Main>
        <AddNewNote onAddNote={handleAddNote} />
        <NoteList
          notes={notes}
          onDeleteNote={handleDeleteNote}
          onCheckNote={handleCheckNote}
        />
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
