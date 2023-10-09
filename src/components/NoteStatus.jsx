function NoteStatus() {
  return (
    <div className="w-full flex justify-around items-center text-slate-500 py-3 sm:text-md md:text-lg lg:text-2xl lg:pb-16 md:pb-14">
      <div>
        <span>All</span>
        <span className="font-bold">(0)</span>
      </div>
      <div>
        <span>Completed</span>
        <span className="font-bold">(0)</span>
      </div>
      <div>
        <span>UnCompleted</span>
        <span className="font-bold">(0)</span>
      </div>
    </div>
  );
}

export default NoteStatus;
