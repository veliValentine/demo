const getNamesCommon = (countries = []) => countries.map(getNameCommon)

const getNameCommon = (country) => country.name.common

const getOfficialName = (country) => country.name.official

const getFlasgSvg = (country) => country.flags.svg

const getCountryByCommonName = (countries = [], name = '') => {
  const findByName = (country) => (
    getNameCommon(country) === name
  )
  return countries.find(findByName)
}

const countryHelper = {
  getNamesCommon,
  getNameCommon,
  getOfficialName,
  getFlasgSvg,
  getCountryByCommonName
}

export default countryHelper
