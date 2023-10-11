function Navbar({ children }) {
  return (
    <div className="w-full h-20 flex justify-around items-center border-b-white border-b-4">
      {children}
    </div>
  );
}

export default Navbar;

export function NoteLenght({ notes }) {
  return (
    <h1 className="font-bold lg:text-3xl md:text-2xl sm:text-lg text-lg text-slate-300 w-full text-center">
      My Notes ({[...notes].length})
    </h1>
  );
}

export function NoteSort({ sortBy, onSortNote }) {
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <select
        onChange={onSortNote}
        value={sortBy}
        className="w-2/4 bg-slate-400 text-white rounded-md py-1 flex sm:px-4 justify-center items-center"
      >
        <option value="Completed">Completed</option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
    </div>
  );
}
