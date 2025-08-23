"use client";

import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import FormSubmit from "./form-submit";
import { createPost as serverCreatePost } from "@/actions/posts";
import { useState, useEffect } from "react";

export interface FormState {
  errors?: string[];
}

export default function PostForm() {
  const [fileName, setFileName] = useState("Выберите файл");
  const router = useRouter();

  useEffect(() => {
    const lang = navigator.language.slice(0, 2);
    setFileName(lang === "en" ? "Choose a file" : "Выберите файл");
  }, []);

  const [state, formAction] = useFormState<FormState>(
    async (_state, formData?: FormData) => {
      if (!formData) {
        return { errors: ["No form data submitted"] };
      } 

      const result = await serverCreatePost(formData);

      if (!result?.errors) {
        router.push("/feed");
        return { errors: [] };
      }

      return { errors: result.errors };
    },
    {}
  );

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="mb-4 w-full block">
          <label htmlFor="title" className="block font-bold w-full text-[0.9rem] text-[#c7a7b7] mb-1">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="block w-full p-2 rounded border-none bg-[#443f41] text-[#eee7ea] font-inherit"
          />
        </p>
          <p className="mb-4 w-full block">
            <label
              htmlFor="image"
              className="block font-bold w-full text-[0.9rem] text-[#c7a7b7] mb-1"
            >
              Image
            </label>

            <label className="block w-full p-2 rounded bg-[#443f41] text-[#eee7ea] font-inherit cursor-pointer hover:bg-[#554f51]">
              {fileName}
              <input
                type="file"
                accept="image/png, image/jpeg"
                id="image"
                name="image"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setFileName(e.target.files[0].name);
                  } else {
                    const lang = navigator.language.slice(0, 2);
                    setFileName(lang === "en" ? "Choose a file" : "Выберите файл");
                  }
                }}
              />
            </label>
          </p>
        <p className="mb-4 w-full block">
          <label htmlFor="content" className="block font-bold w-full text-[0.9rem] text-[#c7a7b7] mb-1">Content</label>
          <textarea
            id="content"
            name="content"
            rows={5}
            className="block w-full p-2 rounded border-none bg-[#443f41] text-[#eee7ea] font-inherit"
          />
        </p>
        <p className="flex justify-end gap-4 mt-4">
          <FormSubmit onReset={() => {
            const lang = navigator.language.slice(0, 2);
            setFileName(lang === "en" ? "Choose a file" : "Выберите файл");
          }} />
        </p>
        {state.errors && (
          <ul className="flex justify-end gap-4">
            {state.errors.map((error) => (
              <li key={error} className="my-1 text-[#c882a2]">{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}
