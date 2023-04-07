import React from "react";
import {useState} from 'react';
import Card from "./Card";
import styles from "./form.module.css";

const Form = () => {

    const [name, setName] = useState("");
    const [superPower, setSuperPower] = useState("");
    const [error, setError] = useState (false);
    const [card, setCard] = useState (false);

    const isValidName = name.length >= 3 && !name.startsWith(" ");
    const isValidSuperPower = superPower.length >= 6;

    function validation(e){
        e.preventDefault();
        if (isValidName && isValidSuperPower){
            setError(false);
            console.log("Creacion correcta");
            setCard(true);
        }else {
            setError(true);
            console.log("Por favor chequea que la información sea correcta");
        }
    }

    const nameChange = (e) => {
        setName(e.target.value);
    };

    const superPowerChange = (e) => {
        setSuperPower(e.target.value);
    };


    return(
        <div >

            <form onSubmit={validation} className={styles.form}>

                <input 
                type="text" 
                placeholder="Ingrese el nombre"
                value={name} 
                onChange={nameChange}
                className={styles.input}/>

                <input 
                className={styles.input}
                type="text" 
                placeholder="Ingrese un super poder"
                value={superPower} 
                onChange={superPowerChange}
                />

                <button type="submit" className={styles.button}> Crear Superheroe</button>

                {error && <div className={styles.errorMessage}>
                    <p>Por favor chequea que la información sea correcta.</p>
                    <ul>
                        <li>Minimo 3 tres letras para el nombre</li>
                        <li>Que el nombre no tenga espacios adelante</li>
                        <li>Minimo seis letras por el poder</li>
                    </ul>
                    </div>}
            </form>

            {card && <Card
            name= {name}
            superPower= {superPower}
            />}

        </div>
        );
}

export default Form;