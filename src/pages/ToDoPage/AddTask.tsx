import { useAppDispatch } from "@app";
import { addTask } from "@features/tasks";
import { useForm } from "react-hook-form";
import Input from "@components/Input";
import React from "react";

const AddTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useAppDispatch();
  return (
    <form
      onSubmit={handleSubmit((formData) => {
        if (formData.description && (formData.description.trim()).length) {
          dispatch(
            addTask({
              id: crypto.randomUUID(),
              description: formData.description,
              isDone: false,
            })
          );
          reset();
        }
      })}
      className="mb-2">
      <Input type="text" {...register("description")} />
    </form>
  );
};

export default AddTask;
