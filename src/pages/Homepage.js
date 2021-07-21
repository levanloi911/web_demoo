import Container from "../components/container";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Pos1 from "../components/pos1";
import Pos2 from "../components/pos2";
import Pos3 from "../components/pos3";

function HomePage(){
    return(
        <div>
            <Header/>
            <Navigation/>
            <Container/>
            <Pos1/>
            <Pos2/>
            <Pos3/>
        </div>
    )
}
export default HomePage