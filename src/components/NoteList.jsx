import { DocumentCheckIcon, TrashIcon } from "@heroicons/react/24/outline";

function NoteList() {
  return (
    <div className="w-full h-auto">
      <Notes />
    </div>
  );
}

export default NoteList;

function Notes() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center px-2 sm:px-3 md:px-4 lg:px-5">
      <div className=" w-full h-auto bg-slate-300 rounded-lg p-2 md:p-3 lg:p-5">
        <div className="w-full h-auto flex justify-between items-center pb-2 sm:pb-4 md:pb-6 lg:pb-8">
          <div className="w-full h-auto">
            <h2 className="text-black font-bold text-sm sm:text-md md:text-lg lg:text-xl">
              my title
            </h2>
            <p className="text-slate-800 text-[10px] sm:text-sm md:text-md lg:text-lg">
              my description
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-1 sm:gap-x-2 md:gap-x-3 lg:gap-x-4">
            <button>
              <TrashIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-red-500" />
            </button>
            <button>
              <DocumentCheckIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-green-500" />
            </button>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center text-[10px] font-semibold text-slate-600 sm:text-md md:text-lg lg:text-xl bg-slate-400 rounded-lg mt-4">
          date
        </div>
      </div>
    </div>
  );
}
