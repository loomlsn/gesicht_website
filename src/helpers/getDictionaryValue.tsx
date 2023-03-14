import { useRouter } from "next/router";
import { textDA } from "../modules/globals/dictionary";
import { textEN } from "../modules/globals/dictionary";

export function getDictionaryValue() {
    const { locale, locales, asPath } = useRouter();
    const danishDictionary = textDA;
    const englishDictionary = textEN;

    if (locale === "en") {
        return englishDictionary;
    } else {
        return danishDictionary;
    }
}

// import 'server-only';

// const dictionaries = {
//     da: () => import(textDA).then((module) => module.default),
//     en: () => import(textEN).then((module) => module.default),
// };

// export const getDictionary = async (locale) => dictionaries[locale]();