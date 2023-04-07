import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
    return (
    <>
        <div className={styles.card}>
            <h2>Hola! soy tu superhéroe</h2>
            <p>Me llamo {props.name}</p>
            <p>Mi super poder es: {props.superPower}</p>
        </div>
    </>
)
}

export default Card;