import ColunaPostagem from "../ColunaPostagem/ColunaPostagem";
import ColDireita from "../FeedCom/Coluna/ColDireita";
import ColLateral from "../FeedCom/Coluna/ColLateral";
import Navbarb from "../Navbar/Navbar";


export default function LayoutFeed(){
    return(

        <>
        <Navbarb></Navbarb>
        <div class="container " id="colunaDisplay">
             <div class="row">
                 <ColLateral></ColLateral>          
                <ColunaPostagem></ColunaPostagem>
                <ColDireita></ColDireita>
             </div>
        </div>
        </>
    )
}