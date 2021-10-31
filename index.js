function myEach(collection, callback) {
    // console.log(collection)
    /* Check if collection is array or object
    If array, make a copies. If object, turn values into an array
    Iterate over new array or object values */
    for (const element of Object.values(collection)) {
        callback(element)
    }
    return collection
}

function myMap (collection, callback) {
    collection.forEach(callback * 3)
}