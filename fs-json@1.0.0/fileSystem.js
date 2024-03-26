const { readFileSync, writeFileSync } = require('fs');

// Eine spezielle Einkaufsliste laden
function readShoppingListFor(userId, database = 'database.json') {
    return loadDataObject(database)[userId] || '';
}

// Eine Einkaufsliste für einen Benutzer speichern
function saveShoppingListFor(userId, list, database = 'database.json') {
    let databaseObject = loadDataObject(database);
    databaseObject = addToList(list, userId, databaseObject);
    saveDataObject(databaseObject, database);
}

// Artikel entfernen
function removeShoppingListEntryFor(userId, entry = '', database = 'database.json') {
    let databaseObject = loadDataObject(database);
    databaseObject = removeFromList(userId, entry, databaseObject);
    saveDataObject(databaseObject, database);
}

// Einkaufsliste aktualisieren
function updateShoppingListFor(userId, list = '', database = 'database.json') {
    let databaseObject = loadDataObject(database);
    databaseObject = removeFromList(userId, '', databaseObject);
    if (list) databaseObject = addToList(list, userId, databaseObject);
    saveDataObject(databaseObject, database);
}

// Artikel zur Einkaufsliste hinzufügen
function addToList(list, userId, databaseObject) {
    databaseObject[userId] = databaseObject[userId] ? databaseObject[userId].concat(`, ${list}`) : list;
    return databaseObject;
}

// Artikel aus der Einkaufsliste entfernen
function removeFromList(userId, entry, databaseObject) {
    if (!databaseObject[userId] || !databaseObject[userId].includes(entry)) return databaseObject;

    if (entry) {
        databaseObject[userId] = databaseObject[userId]
            .split(', ')
            .filter(elem => elem !== entry)
            .join(', ');
    } else {
        delete databaseObject[userId];
    }

    return databaseObject;
}

// Daten schreiben
function saveDataObject(dataObject, database) {
    writeFileSync(database, JSON.stringify(dataObject));
}

// Daten lesen
function loadDataObject(database) {
    const data = readFileSync(database);
    const FALLBACK_VALUE = '{}';
    return JSON.parse(data.byteLength > 0 ? data : FALLBACK_VALUE);
}

// Beispielnutzung
//saveShoppingListFor('727272', 'cheese, bread, eggs');
//saveShoppingListFor('727272', 'bananas');
//saveShoppingListFor('727272', 'bread, cheese, chicken, banana');
//saveShoppingListFor('727299', 'beer, water, beef');
//updateShoppingListFor('727272', 'bread, cheese, chicken');
//updateShoppingListFor('727272');
//console.log(loadDataObject('database.json'));

module.exports = {
    saveShoppingListFor,
    readShoppingListFor,
    updateShoppingListFor,
    removeShoppingListEntryFor
}
