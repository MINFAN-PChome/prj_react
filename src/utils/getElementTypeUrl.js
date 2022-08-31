const getElementTypeUrl = (type) => {
  switch (type) {
    case 'Store':
      return 'https://24h.pchome.com.tw/store/'
    case 'Prod':
      return 'https://24h.pchome.com.tw/prod/'
    case 'Search':
      return 'https://ecshweb.pchome.com.tw/search/v3.3/?q='

    default:
      return ''
  }
}
export default getElementTypeUrl
