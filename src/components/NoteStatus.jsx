function NoteStatus({ notes }) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const unCompletedNotes = allNotes - completedNotes;

  return (
    <div className="w-full flex justify-around items-center text-slate-500 py-3 sm:text-md md:text-lg lg:text-2xl lg:pb-16 md:pb-14">
      <div>
        <span>All</span>
        <span className="font-bold">({allNotes})</span>
      </div>
      <div>
        <span>Completed</span>
        <span className="font-bold">({completedNotes})</span>
      </div>
      <div>
        <span>UnCompleted</span>
        <span className="font-bold">({unCompletedNotes})</span>
      </div>
    </div>
  );
}

export default NoteStatus;
