import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

function notesReducer(notes, action) {
  switch (action.type) {
    case "add": {
      return [...notes, action.payload];
    }
    case "delete": {
      return notes.filter((s) => s.id !== action.payload);
    }
    case "complete": {
      return notes.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new Error("unknown Error" + action.type);
  }
}

function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export default NotesProvider;

export function useNotes() {
  return useContext(NotesContext);
}

export function useDispatchNotes() {
  return useContext(NotesDispatchContext);
}
