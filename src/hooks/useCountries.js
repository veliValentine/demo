import { useEffect, useState } from 'react'
import countryService from '../services/countryService'

const useCountries = () => {
  const [countries, setCountries] = useState([])

  const fetchAllCountries = async () => {
    const allCountries = await countryService.getAll()
    setCountries(allCountries)
  }
  useEffect(() => {
    fetchAllCountries()
  }, [])

  return [countries, fetchAllCountries]
}

export default useCountries
