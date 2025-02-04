import './App.css';
import {useState} from "react"

const api={
  key:"df68b21917b829325d92015994d1f33b",
  link:"https://api.openweathermap.org/data/2.5/"
}

const App=()=> {
  const [search,setSearch]=useState("");
  const [weather,setWeather]=useState({})
let imageurl="data:image/png;base64,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"
 
 
  
  const clickedbutton=async()=>{
const response=await fetch(`${api.link}weather?q=${search}&units=metric&APPID=${api.key}`)
const data=await response.json()
setWeather(data)
setSearch("")
  }

  return (
    <div className="App">
     <header className="app-headder">
      <h1 className="head">Weather App</h1>
      </header>
      <div className="searchInput">
        <input type="text" value={search} placeholder="Enter city/town..." onChange={e=>setSearch(e.target.value)}/>
        <button onClick={clickedbutton}>Search</button>
      </div>
      {typeof weather.main!=="undefined"?(
        <div className="searchInpu">
        <div className="det">
          <h2 className="subHead">{weather.name}</h2>
          <img src={imageurl} alt="weather" className="imageicon"/>
          </div>
          <div className="det">
            <p className="detNam">Weather Condition: </p>
          <p>{weather.weather[0].main}</p>
          </div>
          <div className="det">
            <p className="detNam">Temperature: </p>
          <p>{weather.main.temp}</p>
          </div>
          <div className="det">
            <p className="detNam">Pressure: </p>
          <p>{weather.main.pressure}</p>
          </div>
          <div className="det">
            <p className="detNam">Humidity: </p>
          <p>{weather.main.humidity}</p>
          </div>
          <div className="det">
            <p className="detNam">Visibility: </p>
          <p>{weather.visibility}</p>
          </div>
          <div className="det">
            <p className="detNam">Wind-Speed: </p>
          <p>{weather.wind.speed}</p>
          </div>

        </div>
      ):("")}
     
    </div>
  )
}

export default App

