import { useState } from 'react'
import countryHelper from '../helpers/countryHelper'
import throttleService from '../services/throttleService'

const useCountry = (countries) => {
  const [country, setCountry] = useState()
  const { setThrottle } = throttleService.throttle(150)

  const updateCountryByName = (event) => {
    const name = event?.target?.value
    if (name === undefined) return
    const foundCountry = countryHelper.getCountryByCommonName(countries, name)

    setThrottle(() => setCountry(foundCountry))
  }

  return [country, { updateCountryByName }]
}

export default useCountry
