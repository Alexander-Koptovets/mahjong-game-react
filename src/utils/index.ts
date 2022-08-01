export type CardType = {
    id: number,
    num: number,
    isVisible: boolean,
}

export const INTEGERS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

export const shuffle = (array: number[]) => {
    return array.sort(() => Math.random() - 0.5);
}

export const createCards = (arr: number[], isVisible: boolean) => {
    const cards: CardType[] = [];

    arr.map((num, index) => {
        cards.push({
            id: index,
            num: num,
            isVisible: isVisible,
        })
    })

    return cards;
}