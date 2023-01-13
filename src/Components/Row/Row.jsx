import React from "react";
import { ImInsertTemplate } from "react-icons/im";
import Card from "../Card/Card";
import "./Row.scss"
const imageUrl = "https://image.tmdb.org/t/p/original";
function Row({title, arr=[]})
{
      return(
            <div className="row">
                  <h2>{title}</h2>
                  <div>
                        {
                              arr.map((item,index)=>(
                                    <Card key={index} image={`${imageUrl}/${item.poster_path}`} />
                              ))
                        }
                  </div>
            
            </div>
      )
}

export default Row;