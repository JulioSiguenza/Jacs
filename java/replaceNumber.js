//write a javaScript programa to replace every Character in a giving string with the character following it in the alphabet

// String.fromCharCode  retorna la letra dependiendo de su codigo que tenga UNIT-16 la letra.
//charCodeAt retorna que codigo tiene la letra, se le entrega la posicion del array.

const moveCharsForward = (str) =>
    str
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
        .join('');

console.log(moveCharsForward('abcd'))
