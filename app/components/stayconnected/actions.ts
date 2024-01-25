"use server";

export const subscribe = async (
  formData: FormData
): Promise<{ message: string; error: boolean; success: boolean }> => {
  try {
    const email = formData.get("email") as string;

    const data: { email: string } = {
      email,
    };

    const res = await fetch("https://aiesecgh.net/api/newsletter", {
      cache: "no-store",
      mode: "same-origin",
      method: "POST",
      body: JSON.stringify(data),
    });
    return Promise.resolve({
      message: "Success!",
      error: false,
      success: true,
    });
  } catch (error) {
    return Promise.resolve({
      message: "An error occured, please try again",
      error: true,
      success: false,
    });
  }
};
