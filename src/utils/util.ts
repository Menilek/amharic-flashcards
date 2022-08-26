import { DigitsType, NumbersType, SeasonsType, MonthsType } from './types'

export const Days = {
    Monday: "Segno",
    Tuesday: "Makisegno",
    Wednesday: "Erob",
    Thursday: "Hamus",
    Friday: "Arb",
    Saturday: "Kidame",
    Sunday: "Ehud"
}

export const Months: MonthsType = {
    "September": "Meskerem",
    "October": "Tikimt",
    "November": "Hidar",
    "December": "Tahsas",
    "January": "Tir",
    "February": "Yekatit",
    "March": "Megabit",
    "April": "Miyazya",
    "May": "Ginbot",
    "June": "Sene",
    "July": "Hamle",
    "August": "Nehase",
    "The 13th Month": "Pagume"
}

export const Seasons: SeasonsType = {
    "Spring": "Tseday",
    "Summer": "Bega",
    "Autumn": "Belg",
    "Winter": "Kiremt"
}

export const Digits: DigitsType = {
    Zero: "Zero",
    One: "And",
    Two: "Hulet",
    Three: "Sost",
    Four: "Arat",
    Five: "Amust",
    Six: "Sidist",
    Seven: "Sebat",
    Eight: "Simint",
    Nine: "Zetegn",
    Ten: "Asur"
}

export const Numbers: NumbersType = {
    Ten: "Asur",
    Twenty: "Haya",
    Thirty: "Selasa",
    Forty: "Arba",
    Fifty: "Hamsa",
    Sixty: "Silsa",
    Seventy: "Seba",
    Eighty: "Semanya",
    Ninety: "Zetena",
    Hundred: "Meto",
    Thousand: "Shih",
    Million: "Miliyon",
}

export const findKey = (obj: any, value: string) => {
    return Object.keys(obj).find(key => obj[key] === value);
}