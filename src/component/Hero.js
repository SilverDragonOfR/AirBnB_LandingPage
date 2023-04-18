import React from "react";
import group_small from "../image/group_small.png";

function Hero()
{
    return (
        <section className="hero">

            <div className="hero__photo">
                <img src={group_small} alt="group_small"/>
            </div>

            <h1 className="hero__header">Online Experiences</h1>
            <p className="hero__text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>

        </section>
    )
}

export default Hero;