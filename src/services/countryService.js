import axios from 'axios';

const REST_COUNTRIES_API_V3 = 'https://restcountries.com/v3.1'

const getNamesCommon = (countries = []) => countries.map(getNameCommon)

const getCountryByCommonName = (countries = [], name = '') => {
  const findByName = (country) => (
    getNameCommon(country) === name
  )
  console.log({ name, countries })
  return countries.find(findByName)
}

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

const getNameCommon = (country) => country.name.common
const getOfficialName = (country) => country.name.official
const getFlasgSvg = (country) => country.flags.svg

const countryService = {
  getAll,
  getNamesCommon,
  getCountryByCommonName,
  getNameCommon,
  getOfficialName,
  getFlasgSvg
}

export default countryService
