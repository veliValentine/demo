import { useState } from 'react'
import countryHelper from '../helpers/countryHelper'

let throttleId

const useCountry = (countries) => {
  const [country, setCountry] = useState()

  const updateCountryByName = (event) => {
    const name = event?.target?.value
    if (name === undefined) return
    const foundCountry = countryHelper.getCountryByCommonName(countries, name)

    clearTimeout(throttleId)
    throttleId = setTimeout(() => {

      setCountry(foundCountry)
    }, 100)
  }

  return [country, { updateCountryByName }]
}

export default useCountry
