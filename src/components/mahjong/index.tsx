import React, { FC, useState } from "react";
import { CardType, createCards, INTEGERS, shuffle } from "../../utils";
import { Card } from "../card";
import { WrapperCards } from "../wrapperCards";
import style from "./Style.module.css";

type valueType = {
    id: number,
    num: number,
}

export const Mahjong: FC = () => {
    const [value, setValue] = useState<valueType[]>([]);
    const [start, setStart] = useState<boolean>(true)

    const mixedNums = shuffle([...INTEGERS, ...INTEGERS]);
    const createdCards = createCards(mixedNums, true);
    const [cards, setCards] = useState(createdCards);

    const onClick = (key: number, number: number) => {
        if (!value.length) {
            cards[key].isVisible = true;
            setCards(cards);
            setValue([{ id: key, num: number }]);
        } else if (value.length === 1) {
            if (number !== value[0].num) {
                cards[key].isVisible = true;
                setCards(cards);
                setValue((prev: valueType[]) => [...prev, { id: key, num: number }]);
            } else {
                cards[value[0].id].isVisible = true;
                cards[key].isVisible = true;
                setCards(cards);
                setValue([]);
            }
        } else if (value.length === 2) {
            if (value[1].num === number) {
                cards[value[1].id].isVisible = true;
                cards[value[0].id].isVisible = false;
                cards[key].isVisible = true;
                setCards(cards);
                setValue([]);
            } else {
                cards[value[0].id].isVisible = false;
                cards[value[1].id].isVisible = false;
                cards[key].isVisible = true;
                setCards(cards);
                setValue([{ id: key, num: number }]);
            }
        }
    }

    const onStart = () => {
        setCards(createCards(mixedNums, false));
        setStart(false);
    }

    return (
        <div className={style.block}>
            <WrapperCards>
                {cards.map((card: CardType) => (
                    <Card
                        key={card.id}
                        num={card.num}
                        visibility={card.isVisible}
                        onClick={() => onClick(card.id, card.num)}
                    />
                ))}
            </WrapperCards>
            {start && (
                <button className={style.btn} type={"button"} onClick={() => onStart()}>
                    Start
                </button>
            )}
        </div>
    )
}