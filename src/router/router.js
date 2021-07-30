import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Navigation from "../components/navigation";
import HomePage from '../pages/Homepage';
import Introduct from '../pages/introduct';
import Linhkien from '../pages/linhkien';
function Router1(props){
    return(
        <div>
        <BrowserRouter >
               <Navigation category={props.category}  category1={props.category1}/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/1/:Id" component={Introduct}></Route>
                    <Route exact path="/3/:Id" component={Linhkien}></Route>
                     <Route exact path="/4/:Id" component={Linhkien}></Route>
                    <Route exact path="/contentblog/:Id/:Id_p/:Id_c" component={""}></Route>
                </Switch>
        </BrowserRouter>
        </div>
    )
}
export default Router1;