import { Flight } from "../types/types";
import { CardBottom, CardTop, CardWrapper, Setup } from "./styles/Cards";

interface FlightProps{
    flight: Flight;
}

const FlightItem: React.FC<FlightProps> = ({flight}) =>{

    return(
        <CardWrapper>
            <CardTop>
                <>
                {console.log(flight.id)}
                </>
                <p>ID Vol : {flight.legs[0].id}</p>
            </CardTop>
            <Setup>
                <p>Prix : {flight.price.amount}</p>
                <p>Durée Aller : {flight.legs[0].duration}</p>
                <p>Date Départ : {flight.legs[0].departure}</p>
                <p>Date Arrivée : {flight.legs[0].arrival}</p>
            </Setup>
            <CardBottom>
                <button>Voir les détails du vol</button>
            </CardBottom>
        </CardWrapper>
    )
}

export default FlightItem 