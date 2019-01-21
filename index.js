var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = {}
  newObject[key] = value
  return Object.assign({}, object, newObject)
}

// function updateObjectWithKeyAndValue(object, key, value) {
//   return Object.assign({}, object, { [key]: value })
// }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}