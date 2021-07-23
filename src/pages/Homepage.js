import Container from "../components/container";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Pos1 from "../components/pos1";
import Pos2 from "../components/pos2";
import Pos3 from "../components/pos3";
import Pos4 from "../components/pos4";
import Pos5 from "../components/pos5";
import Pos6 from "../components/pos6";

function HomePage(){
    return(
        <div>
            <Header/>
            <Navigation/>
            <Container/>
            <Pos1/>
            <Pos2/>
            <Pos3/>
            <Pos4/>
            <Pos5/>
            <Pos6/>
        </div>
    )
}
export default HomePage