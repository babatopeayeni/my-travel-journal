import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import Cards from "./Cards"
import Data from "./Data"
 
export default function App() {
  const cards = Data.map(item =>{         
    return(
        <Cards 
       // item={item}
       title = {item.title}
        location = {item.location}
        googleMapsUrl = {item.googleMapsUrl}
       startDate = {item.startDate}
        endDate= {item.endDate}
        description = {item.description}
        img = {item.image}
        
        />

    )
  })
  return (
    <div className="App-container">
        <div className="App">
          < Navbar />
          <section className="cards-list">
           {cards}
          </section>
       </div>
    </div>
  );
}


