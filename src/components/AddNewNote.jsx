import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatchNotes } from "../context/NotesContext";

function AddNewNote() {
  const dispatch = useDispatchNotes(); 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const notify = () => toast("Please write your note😁");
    const lenghtError = () => toast("Please enter more characters🙃");
    console.log(notify);
    if (!title || !description) {
      return notify();
    } else if (title.length < 3 || description < 5) {
      return lenghtError();
    }
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: "add", payload: newNote });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col justify-center items-center gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5 w-full"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="rounded-lg bg-slate-300 placeholder:text-xs placeholder:sm:text-sm placeholder:md:text-md placeholder:lg:text-lg w-full lg:w-3/4 md:w-3/4 px-2 sm:py-1 md:py-2 lg:py-3 "
          placeholder="Note title..."
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="rounded-lg bg-slate-300 placeholder:text-xs placeholder:sm:text-sm placeholder:md:text-md placeholder:lg:text-lg w-full lg:w-3/4 md:w-3/4 px-2 sm:py-1 md:py-2 lg:py-3 "
          placeholder="Note description..."
        />
        <button
          type="submit"
          className="w-full bg-blue-800 rounded-lg font-bold text-white sm:text-md md:text-lg lg:text-xl  lg:w-3/4 md:w-3/4 mt-3 sm:py-1 md:py-2 lg:py-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
