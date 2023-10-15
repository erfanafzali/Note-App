import "./App.css";
import Navbar, { NoteLenght, NoteSort } from "./components/Navbar";
import NoteStatus from "./components/NoteStatus";
import NoteList from "./components/NoteList";
import AddNewNote from "./components/AddNewNote";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import NotesProvider from "./context/NotesContext";

function App() {
  const [sortBy, setSortBy] = useState("Newest");

  return (
    <NotesProvider>
      <div className="container mx-auto">
        <Toaster />
        <Navbar>
          <NoteLenght />
          <NoteSort
            onSortNote={(e) => setSortBy(e.target.value)}
            sortBy={sortBy}
          />
        </Navbar>
        <NoteStatus />
        <Main>
          <AddNewNote />
          <NoteList sortBy={sortBy} />
        </Main>
      </div>
    </NotesProvider>
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
