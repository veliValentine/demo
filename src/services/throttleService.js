const throttle = (timeout = 500) => {
  let throttleId

  const setThrottle = (callback) => {
    clearTimeout(throttleId)
    throttleId = setTimeout(callback, timeout)
  }
  return {
    setThrottle
  }
}

const throttleService = {
  throttle
}

export default throttleService