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