import { useEffect, useState } from 'react'
import countryService from '../services/countryService'
import useLoading from './useLoading'

const useCountries = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading, setLoaded] = useLoading()

  const fetchAllCountries = async () => {
    try {
      setLoading()
      const allCountries = await countryService.getAll()
      setCountries(allCountries)
    } catch (error) {
      console.error('error getting all countries - hook')
    } finally {
      setLoaded()
    }
  }

  useEffect(() => {
    fetchAllCountries()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return [countries, loading]
}

export default useCountries
