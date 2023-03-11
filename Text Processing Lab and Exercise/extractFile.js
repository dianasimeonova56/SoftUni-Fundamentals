function extractFile(str) {
    const wordsArray = str.split('\\');
    const nameAndExtension = wordsArray.pop();
    const lastPoint = nameAndExtension.lastIndexOf('.');
    const name = nameAndExtension.substring(0, lastPoint);
    const extension = nameAndExtension.substring(lastPoint + 1)
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`)
} extractFile('C:\\Internal\\training-internal\\Template.pptx')