import React, {useState, useContext} from "react"
import '../../App.css';

import AeroportItem from "../AeroportItem";

import aeroportImg from './images/home.png'

import Wrapper  from '../styles/Wrapper' 
import Row  from '../styles/Row' 
import Header  from '../styles/Header' 
import Image  from '../styles/Image' 
import Form  from '../styles/Form' 
import Search  from '../styles/Search' 
import Button  from '../styles/Button' 

import axios from "axios";
import { Aeroport } from "../../types/types";

const AeroportComponent: React.FC = () => {

  const [search, setSearch] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")

  const [aeroports, setAeroports] = useState<Aeroport[]>([])

  let first_search: boolean = true ;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setSearch(e.target.value)
  }

  const getAeroports = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // On enlève les éventuels précédents résultats
    
    if (first_search === true) {
      first_search = false ;
    } else {
      const previous_search = document.getElementById("result_display");
      previous_search?.removeChild(previous_search) ;
    }

    const options = {
      method: 'GET',
      url: "https://skyscanner50.p.rapidapi.com/api/v1/searchAirport",
      params: {query: search},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY ,
        
        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then(function (response) {
        const data = (response.data.data)
        console.log(data);
        
        setError(false)
        setAeroports(data)
        
      })
      .catch(function (error) {
        console.error(error);
        setError(true)
        setMessage(error)
        setAeroports([])
      });
    setSearch("")
  }

  return (
    <div>

      <Wrapper>
        <Header> Choix Aéroport </Header>
        { /*<Image src={aeroportImg} alt="aeroport" /> */ }
          
        <Form onSubmit={getAeroports}>
          <Search
          type="text"
          placeholder='Entrez la ville de votre aéroport'
          value={search} 
          onChange={handleChange}
          required/>
          <Button type='submit'> Rechercher </Button>
        </Form>

        {/* AFFICHAGE DES AEROPORTS*/}
      
        <div id="result_display">
      
          {
            error && <p>{`${message}`}</p>
          }
          { aeroports.length > 0 &&
            aeroports.map(aeroport => <AeroportItem key={aeroport.PlaceId} aeroport={aeroport}/>)
          }

        </div>
        
      </Wrapper>
    
    </div>
  );
}

export default AeroportComponent;
