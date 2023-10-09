function Navbar({ children }) {
  return (
    <div className="w-full h-20 flex justify-around items-center border-b-white border-b-4">
      {children}
    </div>
  );
}

export default Navbar;

export function NoteLenght() {
  return (
    <h1 className="font-bold lg:text-3xl md:text-2xl sm:text-lg text-lg text-slate-300 w-full text-center">
      My Notes (0)
    </h1>
  );
}

export function NoteSort() {
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <select className="w-2/4 bg-slate-400 text-white rounded-md py-1 flex sm:px-4 justify-center items-center">
        <option disabled className="font-bold">sort</option>
        <option>Newest</option>
        <option>Oldest</option>
      </select>
    </div>
  );
}
