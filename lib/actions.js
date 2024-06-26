"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    name: formData.get("name"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (meal.title.length > 10) {
    return {
      message: "Invalid input size",
    };
  }

  await saveMeal(meal);

  revalidatePath("/meals");
  redirect("/meals");
}
