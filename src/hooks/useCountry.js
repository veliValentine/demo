import { useState } from 'react'
import countryHelper from '../helpers/countryHelper'

const useCountry = (countries) => {
  const [country, setCountry] = useState()

  const updateCountryByName = (event) => {
    const name = event?.target?.value
    if (name === undefined) return
    const foundCountry = countryHelper.getCountryByCommonName(countries, name)
    setCountry(foundCountry)
  }

  return [country, { updateCountryByName }]
}

export default useCountry
