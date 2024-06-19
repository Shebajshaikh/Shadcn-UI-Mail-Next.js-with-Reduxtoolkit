import { atom, useAtom } from "jotai";

import { Mails, mails } from "./data";

type Config = {
  selected: Mails["id"] | null;
};

const configAtom = atom<Config>({
  selected: mails[0].id,
});

export function useMail() {
  return useAtom(configAtom);
}
