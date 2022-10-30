
import Form from './components/Form'
import React, {useState, useEffect} from 'react';
import './App'

function App() {
  const [countries, setCountries] = useState([])
  const [cities, setCities] = useState([])

  useEffect(() => {
    const countriesFetch = async () => {
      await fetch('https://amazon-api.sellead.com/country').then(response => {
        if(response.ok) {
          return response.json()
        }
      }).then(data => setCountries(data))
    }

    countriesFetch()
  }, [])



  useEffect(() => {
    const citiesFetch = async () => {
      await fetch('https://amazon-api.sellead.com/city').then(response => {
        if(response.ok) {
          return response.json()
        }
      }).then(data => setCities(data))
    }
    citiesFetch()
  }, [])



  return ( 
   <Form countries={countries} cities={cities}/>
);
}
  //<FormMaluco countries={batatinha}/>;
  //<CidadesIndex citys={cidade}/>

 
export default App;
