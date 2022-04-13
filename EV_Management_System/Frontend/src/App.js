import { Route, Switch } from "react-router-dom";
import './App.css';
import { Home } from './components/Home';
import { SearchResults } from './components/SearchResults'
import SignupForm from './components/SignupForm';
import AllReviews from './components/AllReviews';
import LoginForm from './components/LoginForm';
import ProductDetails from './components/ProductDetails';
import About from './components/About';
import ComapareVehicles from './components/CompareVehicles';
import Compare from './components/Compare';
import BuyAccessories from './components/BuyAccessories';
import BookAccessories from './components/BookAccessories';
import ChargingStations from './components/ChargingStations';
import ChargingCities from './components/ChargingCities';
import PaymentSection from './components/PaymentSection';
import Admin from "./components/Admin";
import AddVehicle from "./components/AddVehicle";
import AddChargingDetailsAndFeatures from "./components/AddChargingDetailsAndFeatures";




function App() {

  return (
    <>

      <Switch>

        <Route path="/about"> <About></About> </Route>
        <Route exact path='/Admin' component={Admin} />
        <Route exact path='/AddVehicle' component={AddVehicle} />
        <Route exact path='/AddChargingDetailsAndFeatures/:id' component={AddChargingDetailsAndFeatures} />
        <Route exact path='/Vehicles/:id' component={ProductDetails} />
        <Route exact path='/BookAccessories/:arr' component={BookAccessories} />
        <Route exact path='/BuyAccessories' component={BuyAccessories} />
        <Route exact path='/PaymentSection/:arr/:tPrice' component={PaymentSection} />
        <Route exact path='/ChargingCities' component={ChargingCities} />
        <Route exact path='/ChargingStations/:id/:cityName' component={ChargingStations} />
        <Route exact path='/CompareVehicles' component={ComapareVehicles} />
        <Route exact path='/Compare/:arr' component={Compare} />
        <Route exact path='/Reviews/:id' component={AllReviews} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Login' component={LoginForm} />
        <Route exact path='/signup' component={SignupForm} />
        <Route exact path='/' component={Home} />
        <Route exact path='/Search' component={SearchResults} />
      </Switch>
    </>
  );
}

export default App;
