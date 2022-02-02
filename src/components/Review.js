import React, { useState } from "react";
import people from "../data/data";
import "./Review.scss";

export function Review() {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    const checkNumber = (number) => {
        if (number > people.length -1) {
            return 0;
        } else if (number < 0) {
            return people.length - 1;
        }
        return number;
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    }
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    }
    const randomNumber = () => {
        let randomPerson = Math.floor(Math.random() * people.length);
        setIndex((index) => {
            if (randomPerson === index) {
                return checkNumber(randomPerson + 1);
            }
            return checkNumber(randomPerson);
        });
    }

    return (
        <section className="review-box">
            <div className="review-image">
                <img src={image} alt={name} />
            </div>
            <h4 className="name">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="btn-container">
                <button 
                    type="button" 
                    onClick={prevPerson}
                >
                    <i className="fas fa-chevron-left chev"/>
                </button>
                <button
                    type="button"
                    onClick={nextPerson}
                >
                    <i className="fas fa-chevron-right chev" />
                </button>
            </div>
            <button
                className="surprise-me-btn"
                onClick={randomNumber}
            >Surprise Me</button>
        </section>
    )
}