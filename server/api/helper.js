const newArr = array => {
  let finalArr = []

  function id(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > -1) {
        return i
      }
    }
    return false
  }

  array.map(obj => {
    let preexists = finalArr.map(obj2 => {
      return Object.values(obj2).indexOf(obj.creditorName)
    })

    let credLoc = id(preexists)
    if (!(credLoc === false)) {
      finalArr[credLoc]['total balance'] += obj.balance
      finalArr[credLoc]['existing minpps'].push(obj.minPaymentPercentage)
      finalArr[credLoc].avg = finalArr[credLoc]['minpp calc']().toFixed(2)
    } else {
      let info = new Object()
      info.creditorName = obj.creditorName
      info['total balance'] = obj.balance
      const addArr = new Array()
      addArr.push(obj.minPaymentPercentage)
      info['existing minpps'] = addArr
      info['minpp calc'] = function() {
        return (
          this['existing minpps'].reduce((cT, item) => {
            return item + cT
          }, 0) / this['existing minpps'].length
        )
      }
      info['avg minpp'] = info['existing minpps'][0]

      finalArr.push(info)
    }
  })

  return finalArr
}

module.exports = newArr
