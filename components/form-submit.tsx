"use client";

import { useFormStatus } from "react-dom";

interface FormSubmitProps {
  onReset?: () => void;
}

export default function FormSubmit({ onReset }: FormSubmitProps) {
  const status = useFormStatus();

  if (status.pending) {
    return <p>Creating post...</p>;
  }

  return (
    <>
      <button
        type="reset"
        onClick={onReset}
        className="font-inherit py-2 px-4 text-base rounded border-none bg-transparent hover:text-[#e299b6] cursor-pointer"
      >
        Reset
      </button>
      <button
        className="font-inherit py-2 px-4 text-base rounded border-none bg-[#e32195] text-[#eee7ea] hover:bg-[#a80a69] cursor-pointer"
      >
        Create Post
      </button>
    </>
  );
}
