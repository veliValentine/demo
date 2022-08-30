import { useState } from 'react';
import './App.css';
import DropDownMenu from './components/DropDownMenu';
import useCountries from './hooks/useCountries';
import countryService from './services/countryService';

function App() {
  const [countries] = useCountries()
  const [country, setCountry] = useState('')

  const countriesNames = countryService.getNamesCommon(countries)

  const updateCountry = (event) => {
    const countryName = event.target.value
    if (!countryName) return
    setCountry(countryName)
  }

  return (
    <div className="App">
      <h1>Countries</h1>
      <DropDownMenu
        onChange={updateCountry}
        defaultOptionText='Select country'
        title='Country'
        values={countriesNames}
      />
      <hr />
      Country: {country}
    </div >
  );
}

export default App;
