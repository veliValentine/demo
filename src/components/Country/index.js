import countryHelper from '../../helpers/countryHelper'
import './index.css'

const Country = ({
  value: country
}) => {
  if (!country) return <h2>No country selected</h2>
  const commonName = countryHelper.getNameCommon(country)
  const officialName = countryHelper.getOfficialName(country)
  const flagUrl = countryHelper.getFlasgSvg(country)
  return (
    <div className='container'>
      <div>
        <h2>{commonName}</h2>
        <h4>{officialName}</h4>
      </div>
      <img
        alt={`Flag of ${commonName}`}
        src={flagUrl}
        width={200}
        height={100}
      />
    </div>
  )
}

export default Country
