import { useState } from 'react';
import './App.css';
import Country from './components/Country';
import DropDownMenu from './components/DropDownMenu';
import countryHelper from './helpers/countryHelper';
import useCountries from './hooks/useCountries';

function App() {
  const [countries] = useCountries()
  const [country, setCountry] = useState()

  const countriesNames = countryHelper.getNamesCommon(countries)

  const updateCountryName = (event) => {
    const name = event?.target?.value
    if (name === undefined) return
    const foundCountry = countryHelper.getCountryByCommonName(countries, name)
    setCountry(foundCountry)
  }

  return (
    <div className="App">
      <h1>Countries</h1>
      <DropDownMenu
        onChange={updateCountryName}
        defaultOptionText='Select country'
        title='Country'
        values={countriesNames}
      />
      <hr />
      <Country value={country} />
    </div >
  );
}

export default App;
