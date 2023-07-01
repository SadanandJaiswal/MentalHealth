import React from 'react';
import { useParams } from 'react-router-dom';

import disorderAPi from "../api/disorderApi"

import "../style/Disorder.css";

const Disorder = () => {
    const {disorder} = useParams();

  return (
    <>
   <div className="content">
    {
        disorderAPi.map((item)=>{
            if(item.name == disorder)
            {
            return(
                    <div className="disorder_card" style={{color:'white'}}>
                        <h1 className="name">{item.name}</h1>
                        <center>
                            <img src={item.imageUrl} alt="" />
                        </center>
                        <h2 className="title_of_disorder">{item.title}</h2>
                        <div className="what_is">{item.what_is}</div>
                        <div className="symptoms">
                            <h2>Some common symptoms of {item.name} include:</h2>
                            {
                                item.Symptoms.map((sym)=>{
                                    return(
                                        <li>{sym}</li>
                                    )
                                })
                            }
                        </div>
                        <div className="strategies">
                            <h2>Strategies to overcome {DataTransferItemList.name}:</h2>
                            {
                                item.strategies.map((sat)=>{
                                    return(
                                        <li>{sat}</li>
                                    )
                                })
                            }
                        </div>
                    </div>
            )
        }
        })
    }
   </div>
    </>
  )
}

export default Disorder
