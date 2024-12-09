import { nanoid } from "nanoid";

export function truncateText(text: string, maxLength = 10) {
  if (!text) return "";

  if (text?.length <= maxLength) {
    return text;
  }
  return text?.slice(0, maxLength);
}

export const generateUniqueName = (name: string) => {
  return (truncateText(name?.replace(/ /g, "_"), 10) + nanoid())?.replace(
    / /g,
    "_",
  );
};

export function isValidTokenName(name: string) {
  if (!/^[a-zA-Z]/.test(name)) {
    return { status: false, data: "Name should start with a letter" };
  }

  if (/[^a-zA-Z0-9\s\-_]/.test(name)) {
    return {
      status: false,
      data: "Only - or _ are allowed as special characters",
    };
  }

  // Check 3: It must be at least 2 characters long
  if (name.length < 2) {
    return { status: false, data: "name must be at least 2 characters long" };
  }

  return { status: true, data: name };
}
