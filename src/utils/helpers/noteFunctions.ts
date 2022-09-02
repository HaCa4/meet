import { SingleMeteor } from "../types";

export const handleNoteSubmit = (meteor: SingleMeteor, note: string) => {
  window.localStorage.setItem(`${meteor.id}`, `${note}`);
};

export const handleNoteDelete = (meteor: SingleMeteor) => {
  window.localStorage.removeItem(`${meteor.id}`);
};
