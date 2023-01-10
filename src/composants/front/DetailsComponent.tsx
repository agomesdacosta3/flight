import React, { useEffect, useState } from "react"
import Form from "../styles/Form";
import '../../App.css';
import Button from "../styles/Button";
import Header from "../styles/Header";
import Wrapper from "../styles/Wrapper";
import { Details } from "../../types/types";
import DetailsItem from "../DetailsItem";

import axios from "axios";

const DetailsComponent: React.FC = () => {

  const [error, setError] = useState<boolean>(false)
  const [check, setCheck] = useState<number>(2)
  const [message, setMessage] = useState<string>("")

  const flightId: string = "15083-2301231225--31685-0-13542-2301231230|13542-2302041620--31685-0-15083-2302041830" ;
  // const legs: [number | string] = [""];

  const [a, setFlightDetails] = useState<Details[]>([]) ;
  const [details, setDetails] = useState([]) ;

  useEffect (() => {
    getFlightDetails();
  }, [] )

  async function getFlightDetails () {
    
    const options = {
      method: 'GET',
      url: 'https://skyscanner50.p.rapidapi.com/api/v1/getFlightDetails',
      params: {
        itineraryId: flightId,
       // itineraryId: '15083-2301121930--30727-2-12712-2301131855|12712-2301191645--30727-2-15083-2301201840',
       legs: '[{"origin":"ORY","destination":"LOND","date":"2023-01-23"},{"date":"2023-02-04","destination":"ORY","origin":"LOND"}]',
        adults: '1'
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then(function (response) {
        const data = response.data.data ;
        console.log(data);
        setError(false)
        setCheck(data.legs[0].id)
        console.log("lenght avant : " + details.length)
        setDetails(data);
        console.log("lenght apres : " + details.length)
      })
      .catch(function (error) {

        console.error(error);
        setError(true)
        setMessage(error)
        setFlightDetails([])
      });
  }

  return (
    <div>
      
      <Wrapper>
        <Header>Détails du vol</Header>

        { /*<Image src={FlightDetailsImg} alt="details" /> */ }

        {/* <Form onSubmit={getFlightDetails}>
        
          <Button type='submit'> Afficher les détails </Button>

        </Form> */}
      
        {/* AFFICHAGE DES DETAILS*/}
      
        <div id="result_display">

          <p>{`${check}`}</p>
          <p>{`${details.length}`}</p>
          
          {
            error && <p>{`${message}`}</p>
          }
          
          { details.length > 0 &&
            <DetailsItem key={flightId} details={details[0]}/>
          }

        </div>
        
      </Wrapper>
    
    </div>
  );
}

export default DetailsComponent;
