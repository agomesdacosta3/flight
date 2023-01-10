// ce fichier contient des informations que l'on va vouloir partager à l'ensemble des composants de notre application 

// // fonction permet de créer un store ($_SESSION )
import { createContext , useState } from "react";
// import { Aeroport } from "../types/types";

// export const AeroportContext = createContext("") ;

// // store => l'endroit où on stocke des données / fonctions 
// // retourne un composant qui va mettre à disposition la $_SESSION
// export const AeroportProvider = (props: any) => {

//     const [aeroport, setAeroports] = useState<Aeroport[]>([])

//     const defineAeroport = (aeroport: any) => {
//         const cloneAeroport = [...aeroport]
//         cloneAeroport.push(aeroport);
//         setAeroports(cloneAeroport);
        
//     }

//     const store = { aeroport , defineAeroport  } 
//     return <AeroportContext.Provider value={store}>
//         {props.children}
//     </AeroportContext.Provider>

// }