import { Details } from "../types/types";
import { CardBottom, CardTop, CardWrapper, Setup } from "./styles/Cards";

interface DetailsProps{
    details: Details;
}

const DetailsItem: React.FC<DetailsProps> = ({details}) =>{

    return(
        <CardWrapper>
            <CardTop>
                <p>ID Voyage : {details.id}</p>
            </CardTop>
            <Setup>
                <p>Compagnie Aérienne : {details.segments[0].marketingCarrier.name}</p>
                <p>De {details.origin.city} à {details.destination.city}</p>
                <p>Départ (heure locale): {details.departure} | Arrivée (heure locale) : {details.arrival}</p>
                <p>Durée : {details.duration}</p>
                <p>Nombre d'escale(s) : {details.stopCount}</p>
            </Setup>
            <CardBottom>
                <button>Ajouter ce vol aux favoris</button>
            </CardBottom>
        </CardWrapper>
    )
}

export default DetailsItem