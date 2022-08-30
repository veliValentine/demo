import './App.css';
import useCountries from './hooks/useCountries';

function App() {
  const [countries] = useCountries()
  console.log(countries)
  return (
    <div className="App">
      <h1>Countries</h1>
    </div>
  );
}

export default App;
