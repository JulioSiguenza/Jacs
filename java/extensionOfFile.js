//write a javaScript programa to get extension of a filename


const extensionOfFile = (str) => str.slice(str.lastIndexOf('.'));


console.log(extensionOfFile('index.html'));