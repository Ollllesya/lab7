import React, { useState } from "react"
import { getRandomColor } from "../helpers/getRandomColor";

function Header() {
    const [randomColorsName, setRandomColorsName] = useState({
        backgroundColor: 'white',
        color: 'black'
    });

    const [randomColorsInfo, setRandomColorsInfo] = useState({
        backgroundColor: 'white',
        color: 'black'
    });

    const changeColorsName = () => {
        setRandomColorsName({
            backgroundColor: getRandomColor(),
            color: getRandomColor(),
        });
    };

    const changeColorsInfo = () => {
        setRandomColorsInfo({
            backgroundColor: getRandomColor(),
            color: getRandomColor(),
        });
    };

    return (
        <>
            <section id="header-name">
                <h2>Скидан Олеся Олександрівна</h2>
            </section>
            <section id="header-birthday"
                style={{
                    backgroundColor: randomColorsName.backgroundColor,
                    color: randomColorsName.color,
                    cursor: "pointer",
                }}
                onClick={changeColorsName}
            >
                <p>Народилась 27 грудня 2003 року у місті Амвросіївка, Донецька область.</p>
            </section>
            <section id="header-info"
                style={{
                    backgroundColor: randomColorsInfo.backgroundColor,
                    color: randomColorsInfo.color,
                    cursor: "pointer",
                }}
                onClick={changeColorsInfo}
            >
                <p>
                    Навчалась в Амвросіївській школі №2 до 11 класу, після чого закінчила 11 клас у Ірпінській школі №17.
                    Наразі, з 2021 року, навчаюсь в Київському політехнічному інституті ім. Сікорського на спеціальності 126.
                </p>
            </section>
        </>
    )
}

export default Header
