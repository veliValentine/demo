import axios from 'axios';

const REST_COUNTRIES_API_V3 = 'https://restcountries.com/v3.1'

const getNamesCommon = (countries = []) => countries.map(getNameCommon)

const getNameCommon = (country) => country.name.common

const getAll = async () => {
  try {
    const { data } = await axios.get(`${REST_COUNTRIES_API_V3}/all`)
    return data
  } catch (error) {
    const errorMessage = error?.response?.data ?? error?.message ?? error
    console.error('error fetching all countries', errorMessage)
    return []
  }
}

const countryService = {
  getAll,
  getNamesCommon
}

export default countryService
