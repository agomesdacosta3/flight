import { Navigate } from "react-router";
import { Aeroport } from "../types/types";
import { CardBottom, CardTop, CardWrapper, Setup } from "./styles/Cards";

import { useNavigate} from "react-router-dom"

interface AeroportProps{
    aeroport: Aeroport;
}

const AeroportItem: React.FC<AeroportProps> = ({aeroport}) =>{

    const navigate = useNavigate() ;

    const chooseFlight = () => {
        navigate("./flight")
    }

    return(
        <CardWrapper>
            <CardTop>
                <p> Aéroport : {aeroport.PlaceName}, {aeroport.PlaceId}</p>
            </CardTop>
            <Setup>
                <span> Iata Code : {aeroport.IataCode}</span>
                <span> Pays : {aeroport.CountryName}</span>
            </Setup>
            <CardBottom>
                <button onClick={chooseFlight}>Partir à partir de cet aéroport</button>
            </CardBottom>
        </CardWrapper>
    )
}

export default AeroportItem