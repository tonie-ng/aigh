"use server";

export const subscribe = async (
  formData: FormData
): Promise<{ error: boolean; success: boolean }> => {
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
      error: false,
      success: true,
    });
  } catch (error) {
		console.log(error);
    return Promise.resolve({
      error: true,
      success: false,
    });
  }
};
