function getHourSet(result){
  return result.map(function(el){
    let time = new Date(el.time * 1000)
    return time.getHours()
  })
}

function getFahrenheits(result){
  return result.map(function(el){
    return el.temperature
  })
}

function makeRequest(endpoint, success) {
  fetch(endpoint)
  .then(resp => resp.json())
  .then(json => success(json))
}
