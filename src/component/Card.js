import React from "react";
import image1 from "../image/image1.png";
import image2 from "../image/image2.png";
import image3 from "../image/image3.png";
import star from "../image/star.png";

let image = [image1, image2, image3];

function Card({key, img,rating,reviewCount, country, title, price, openSpots, location})
{
    let badgetext = "";
    if(openSpots===0)
    {
        badgetext = "SOLD OUT";
    }
    else if(location==="Online")
    {
        badgetext = "ONLINE";
    }
    return(
        <div className="card">

            { badgetext!=="" && <div className="card__badge">{badgetext}</div>}

            <img className="card__image" src={image[img-1]} alt="image1"></img>

            <div className="card__stats">
                <img className="star" src={star} alt="star"></img>
                <span>{rating}</span>
                <span className="gray">({reviewCount}) &#x2022; </span>
                <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price} </span>/ person</p>

        </div>
    )
}

export default Card;