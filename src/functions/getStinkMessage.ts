import { removeDiacritics } from "./removeDiacritics";

const NAME_PLACEHOLDER = "{{NAME}}";

const MESSAGE_TEMPLATES: Record<"Yes" | "No", string> = {
  Yes: `Ano, ${NAME_PLACEHOLDER} smrdí 🤮`,
  No: `Ne, ${NAME_PLACEHOLDER} nesmrdí 🛀`,
};

const ALWAYS_STINK_LIST: string[] = ["Martin", "Sova", "Richard", "Ričí"];

const NEVER_STINK_LIST: string[] = ["Michael", "Renat"];

const getIsOnList = (list: string[], name: string): boolean => {
  const normalizedList = list.map((name) =>
    removeDiacritics(name).toLowerCase()
  );
  const normalizedName = removeDiacritics(name).toLowerCase();
  return normalizedList.includes(normalizedName);
};

const getValidatedStink = (stink: boolean, name: string): boolean => {
  if (getIsOnList(ALWAYS_STINK_LIST, name)) return true;
  if (getIsOnList(NEVER_STINK_LIST, name)) return false;
  return stink;
};

export const getStinkMessage = (name: string, stink: boolean) => {
  const validatedStink = getValidatedStink(stink, name);
  const messageTemplate = validatedStink
    ? MESSAGE_TEMPLATES.Yes
    : MESSAGE_TEMPLATES.No;
  return messageTemplate.replace(NAME_PLACEHOLDER, name);
};
