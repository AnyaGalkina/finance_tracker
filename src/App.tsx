import React, {useState} from "react";
import './App.css';
import testImage from "./components/baby-carriage-solid.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHamburger} from "@fortawesome/free-solid-svg-icons";

// state = []

function App() {
    // const[ totalSum, setTotalSum ] = useState('');

  return (
    <div className="App">
        <Spends/>
        <FontAwesomeIcon icon={faHamburger} className={"hover:text-red-500"}/>
        <FontAwesomeIcon icon="fa-solid fa-beer-mug" />
        <FontAwesomeIcon icon="coffee" />
        <FontAwesomeIcon icon={['fas', 'coffee']} />
        <FontAwesomeIcon icon={['far', 'coffee']} />
        {/*<FontAwesomeIcon icon={faCoffee} />*/}

    </div>
  );
}

export default App;


const Spends = () => {


    return (
        <div>

            <button><FontAwesomeIcon icon="fa-solid fa-burger" /> </button>


            <input/>
            {/*<img  src={testImage} onClick={()=> {alert("you've add spend 🍔" )}}/>*/}

        </div>
    );
};
