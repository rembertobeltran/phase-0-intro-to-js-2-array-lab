const cats = ['Milo','Otis', 'Garfield',];

function destructivelyAppendCat() {;
    cats.push('Ralph');
}

function destructivelyPrependCat() {;
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {;
    cats.pop();
}

function destructivelyRemoveFirstCat() {;
    cats.shift();
}

function appendCat() {
    const newCats = [...cats, 'Broom'];
    return newCats;
}

function prependCat() {
    const newCats = ['Arnold',...cats];
    return newCats;
}

function removeLastCat() {
    const newCats = [...cats];
    newCats.splice(2)
    return newCats
}

function removeFirstCat() {
    const newCats = [...cats];
    newCats.splice(0,1)
    return newCats
}