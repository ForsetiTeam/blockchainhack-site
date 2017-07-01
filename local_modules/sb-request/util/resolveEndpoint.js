import config from '@eagle/app-config'


const resolveEndpoint = (endpoint) => {
  if (/^http|^\//.test(endpoint)) {
    return endpoint
  } else {
    // TODO remove this when there will be two builds on server
    if (config.propEnv === 'development' || config.propEnv === 'localtest') {
      return config.services.api + endpoint.replace(/^\//, '')
    } else {
      return `${window.location.origin}/${endpoint.replace(/^\//, '')}`
    }
    //return config.services.api + endpoint.replace(/^\//, '')
  }
}

export default resolveEndpoint
