import { Details } from "../types/types";
import { CardBottom, CardTop, CardWrapper, Setup } from "./styles/Cards";

interface DetailsProps{
    details: Details;
}

const DetailsItem: React.FC<DetailsProps> = ({details}) =>{

    return(
        <CardWrapper>
            <CardTop>
                <p>ID : {details.legs[0].id}</p>
            </CardTop>
            <Setup>
                
            </Setup>
            <CardBottom>
                <button>Ajouter ce vol aux favoris</button>
            </CardBottom>
        </CardWrapper>
    )
}

export default DetailsItem