function writeCards(arrayStrings, event) {
    const newArrayStrings = [];
    for (let i = 0; i < arrayStrings.length; i++) {
        newArrayStrings[i] = `Thank you, ${arrayStrings[i]}, for the wonderful ${event} gift!`;
    }
    return newArrayStrings;
}

function countDown(startNum) {
    for (let i = startNum; i >= 0; i--) {
        console.log(i);
    }
}