
const isDay = () => {
    const date = new Date();
    const hours = date.getHours()
    return hours < 22 && hours > 6;
}


const dayTheme = {
    fontSerif: '',
    fontSansSerif: '',
    headerBackground: 'radial-gradient(circle, rgba(6,17,51,1) 0%, rgba(0,0,0,1) 84%);',
    mainScreenBackground: ' radial-gradient(circle, rgba(205,210,255,1) 2%, rgba(180,195,255,1) 4%, rgba(17,22,148,0.9108018207282913) 29%, rgba(88,15,145,1) 47%, rgba(17,57,184,1) 60%, rgba(2,6,38,1) 91%)',
    search: {
        background: '',
        inputBg: ''
    },
    championPosition: {
        isDragging: '',
        isOver: '',
        default: ''
    },
    championItem: {
        isMarked: '',
        default: ''
    },

    mainButtonBackground: 'linear-gradient(5deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 37%, rgba(28, 164, 191, 1) 100%)',
    spellOnCD: 'rgba(40,0,255,0.2)',
    notUsedSpell: 'rgba(40,0,200,0.8)'
}
const nightTheme = {
    headerBackground: 'radial-gradient(circle, rgba(6,17,51,1) 0%, rgba(0,0,0,1) 84%);',
    buttonBackground: 'linear-gradient(5deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 37%, rgba(28, 164, 191, 1) 100%)',
    mainButtonBackground: ' radial-gradient(circle, rgba(205,210,255,1) 2%, rgba(180,195,255,1) 4%, rgba(17,22,148,0.9108018207282913) 29%, rgba(88,15,145,1) 47%, rgba(17,57,184,1) 60%, rgba(2,6,38,1) 91%)',
    spellOnCD: 'rgba(40,0,255,0.2)',
    notUsedSpell: 'rgba(40,0,200,0.8)'
}

export default isDay() ? dayTheme : nightTheme;
// export default {
//     headerBackground: 'radial-gradient(circle, rgba(6,17,51,1) 0%, rgba(0,0,0,1) 84%);',
//     buttonBackground: 'linear-gradient(5deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 37%, rgba(28, 164, 191, 1) 100%)',
//     mainScreenBackground: ' radial-gradient(circle, rgba(205,210,255,1) 2%, rgba(180,195,255,1) 4%, rgba(17,22,148,0.9108018207282913) 29%, rgba(88,15,145,1) 47%, rgba(17,57,184,1) 60%, rgba(2,6,38,1) 91%)',
//     spellOnCD: 'rgba(40,0,255,0.2)',
//     ActiveSpell: 'rgba(40,0,200,0.8)'
// }