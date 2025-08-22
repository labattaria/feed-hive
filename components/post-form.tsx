"use client";

import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import FormSubmit from "./form-submit";
import { createPost as serverCreatePost } from "@/actions/posts";

export interface FormState {
  errors?: string[];
}

export default function PostForm() {
  const router = useRouter();

  const [state, formAction] = useFormState<FormState>(
    async (_state, formData?: FormData) => {
      if (!formData) return { errors: ["No form data submitted"] };

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
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input type="file" accept="image/png, image/jpeg" id="image" name="image" />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows={5} />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
        {state.errors && (
          <ul className="form-errors">
            {state.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}
