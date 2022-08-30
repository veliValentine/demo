import './App.css';
import Country from './components/Country';
import DropDownMenu from './components/DropDownMenu';
import countryHelper from './helpers/countryHelper';
import useCountries from './hooks/useCountries';
import useCountry from './hooks/useCountry';

function App() {
  const [countries, countriesLoading] = useCountries()
  const [country, countryUpdateOptions] = useCountry(countries)

  const countriesNames = countryHelper.getNamesCommon(countries)

  return (
    <div className="App">
      <h1>Countries</h1>
      {countriesLoading ? 'Loading...' :
        <>
          <DropDownMenu
            onChange={countryUpdateOptions.updateCountryByName}
            defaultOptionText='Select country'
            title='Country'
            values={countriesNames}
          />
          <hr />
          <Country value={country} />
        </>
      }
    </div >
  );
}

export default App;
