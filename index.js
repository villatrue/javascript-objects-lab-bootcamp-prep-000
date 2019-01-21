var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = {}
  newObject[key] = value
  return Object.assign({}, object, newObject)
}

// function updateObjectWithKeyAndValue(object, key, value) {
//   return Object.assign({}, object, { [key]: value })
// }