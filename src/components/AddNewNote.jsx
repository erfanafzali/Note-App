function AddNewNote() {
  return (
    <div className="w-full">
      <form
        action=""
        className="flex flex-col justify-center items-center gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5 w-full"
      >
        <input
          type="text"
          className="rounded-lg bg-slate-300 placeholder:text-xs placeholder:sm:text-sm placeholder:md:text-md placeholder:lg:text-lg w-full lg:w-3/4 md:w-3/4 px-2 sm:py-1 md:py-2 lg:py-3"
          placeholder="Note title..."
        />
        <input
          type="text"
          className="rounded-lg bg-slate-300 placeholder:text-xs placeholder:sm:text-sm placeholder:md:text-md placeholder:lg:text-lg w-full lg:w-3/4 md:w-3/4 px-2 sm:py-1 md:py-2 lg:py-3"
          placeholder="Note description..."
        />
        <button className="w-full bg-blue-800 rounded-lg font-bold text-white sm:text-md md:text-lg lg:text-xl  lg:w-3/4 md:w-3/4 mt-3 sm:py-1 md:py-2 lg:py-3">Submit</button>
      </form>
    </div>
  );
}

export default AddNewNote;