export default (text) => {

    if (typeof text !== 'string')
        return null;
    // text[0] = text[0].toLocaleUpperCase();
    return `${text.charAt(0).toLocaleUpperCase()}${text.substring(1, text.length)}`;
}

