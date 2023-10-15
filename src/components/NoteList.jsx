import { TrashIcon } from "@heroicons/react/24/solid";
import { useDispatchNotes, useNotes } from "../context/NotesContext";
import Message from "./Message";

function NoteList({ sortBy }) {
  const notes = useNotes();
  const allNotes = notes.length;
  if (!allNotes) {
    return (
      <Message className="w-full h-auto">
        <p className="w-full h-auto flex flex-col justify-center items-center px-2 sm:px-3 md:px-4 lg:px-5 pb-2 sm:pb-3 md:pb-4 lg:pb-5 text-slate-400 text-xs sm:text-md md:text-lg lg:text-xl">
          No Notes has already been added 😩
        </p>
      </Message>
    );
  }

  let sortedNotes = notes;
  if (sortBy === "Newest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortBy === "Oldest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortBy === "Completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(b.completed) - Number(a.completed)
    );

  return (
    <div className="w-full h-auto">
      {sortedNotes.map((note) => (
        <Notes key={note.id} note={note}  />
      ))}
    </div>
  );
}

export default NoteList;

function Notes({ note }) {
  const dispatch = useDispatchNotes();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center px-2 sm:px-3 md:px-4 lg:px-5 pb-2 sm:pb-3 md:pb-4 lg:pb-5 ">
      <div className=" w-full h-auto bg-slate-300 rounded-lg p-2 md:p-3 lg:p-5">
        <div
          className={`w-full h-auto flex justify-between items-center pb-2 sm:pb-4 md:pb-6 lg:pb-8 ${
            note.completed ? "line-through" : ""
          }`}
        >
          <div className="w-full h-auto flex justify-center items-center flex-col">
            <h2 className="text-black font-bold text-sm sm:text-md md:text-lg lg:text-xl line-brak w-full">
              {note.title}
            </h2>
            <p className="text-slate-800 text-[10px] sm:text-sm md:text-md lg:text-lg w-full line-brak">
              {note.description}
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-1 sm:gap-x-2 md:gap-x-3 lg:gap-x-4">
            <button onClick={() => dispatch({ type: "delete", payload: note.id })}>
              <TrashIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-red-500" />
            </button>
            <input
              type="checkbox"
              name={note.id}
              id={note.id}
              value={note.id}
              checked={note.completed}
              onChange={(e) => {
                const noteId = Number(e.target.value);
                dispatch({ type: "complete", payload: noteId }); 
              }}
              className={
                "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 accent-green-600"
              }
            />
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center text-[10px] font-semibold text-slate-600 sm:text-md md:text-lg lg:text-xl bg-slate-400 rounded-lg mt-4">
          {new Date(note.createdAt).toLocaleDateString("en-US", options)}
        </div>
      </div>
    </div>
  );
}
