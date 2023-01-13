import React from "react";

import "./Card.scss"

function Card({image})
{
      return(
            <>
                  <img className="card" src={image} alt="" srcset="" />
            </>
      )
}

export default Card;