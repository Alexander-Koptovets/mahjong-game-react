export type CardType = {
    id: number,
    num: number,
    isVisible: boolean,
}

export const integers = (n: number) => {
    const nums = [];

    nextPrime:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        nums.push(i)
    }
    console.log(nums);
    return [...nums, ...nums];
}

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