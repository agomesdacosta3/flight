import React, {useState} from "react"
import '../../App.css';

import FlightItem from "../FlightItem";

// import flightImg from './images/flight.png'

import Wrapper  from '../styles/Wrapper' 
// import Row  from '../styles/Row' 
import Header  from '../styles/Header' 
// import Image  from '../styles/Image' 
import Form  from '../styles/Form' 
import Search  from '../styles/Search' 
import Button  from '../styles/Button'

import axios from "axios";
import { Flight } from "../../types/types";

const FlightComponent: React.FC = () => {

  const [departIata, setDepartIata] = useState<string>("ORY")
  const [retourIata, setRetourIata] = useState<string>("NYCA")

  const [departDate, setDepartDate] = useState<string>("")
  const [retourDate, setRetourDate] = useState<string>("")

  const [adults, setAdults] = useState<number>(1)
  
  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")

  const [flights, setFlights] = useState<Flight[]>([])

  let first_search: boolean = true ;

  const handleChangeDepartDate = (e: React.ChangeEvent<HTMLInputElement>,) =>{
    setDepartDate(e.target.value)
  }
  const handleChangeRetourDate = (e: React.ChangeEvent<HTMLInputElement>,) =>{
    setRetourDate(e.target.value)
  }
  const handleChangeDepartIata = (e: React.ChangeEvent<HTMLInputElement>,) =>{
    setDepartIata(e.target.value)
  }
  const handleChangeRetourIata = (e: React.ChangeEvent<HTMLInputElement>,) =>{
    setRetourIata(e.target.value)
  }
  const handleChangeAdult = (e: React.ChangeEvent<HTMLInputElement>,) =>{
    setAdults(parseInt(e.target.value))
  }

  const getFlights = async (e: React.FormEvent<HTMLFormElement>) => {

  // On enlève les éventuels précédents résultats
    
  if (first_search === true) {
    first_search = false ;
  } else {
    const previous_search = document.getElementById("result_display");
    previous_search?.removeChild(previous_search) ;
  }

  e.preventDefault();

  const options = {
    method: 'GET',
    url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
    params: {
      origin: departIata,
      destination: retourIata,
      date: departDate,
      returnDate: retourDate,
      adults: adults,
    },

    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY ,
      'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
    }
  };

  axios.request(options)

    .then(function (response) {
      console.log(response.data);
      const data = response.data.data ;
	    console.log(data);
      setError(false)
      setFlights(data)
    })
    .catch(function (error) {

      console.error(error);
      setError(true)
      setMessage(error)
      setFlights([])
    });
  }

  return (
    <div>

      <Wrapper>
        <Header> Choix Vols </Header>
        { /*<Image src={aeroportImg} alt="aeroport" /> */ }
          
        <Form onSubmit={getFlights}>

          <Search
            type="text"
            placeholder='Entrez le code IATA de votre aéroport de départ'
            value={departIata} 
            onChange={handleChangeDepartIata}
            readOnly
            required/>

          <Search
            type="text"
            placeholder="Entrez le code IATA de l'aéroport d'arrivée"
            value={retourIata} 
            onChange={handleChangeRetourIata}
            required/>

          <Search
            type="date"
            placeholder='Entrez la date de départ'
            value={departDate}
            onChange={handleChangeDepartDate}
            required/>
         
          <Search
            type="date"
            placeholder='Entrez la date de retour (Optionnel)'
            value={retourDate}
            onChange={handleChangeRetourDate}/>

          <Search
            type="number"
            placeholder='Entrez le nombre de passager adulte (Optionnel)'
            value={adults} 
            min = "1"
            onChange={handleChangeAdult}/>

          <Button type='submit'> Rechercher des vols </Button>
        </Form>

        {/* AFFICHAGE DES AEROPORTS*/}
      
        <div>
      
          {
            error && <p>{`${message}`}</p>
          }
          
          { flights.length > 0 &&
            flights.map(flight => <FlightItem key={flight.id} flight={flight}/>)
          }

        </div>
        
      </Wrapper>
    
    </div>
  );
}

export default FlightComponent;
