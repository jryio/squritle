function parseHash(input) {
    return JSON.parse(input);
}

function generateHash(state) {
    return encodeURI(JSON.stringify(state));
}
