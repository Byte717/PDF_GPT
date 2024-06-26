import pdfjsLib from 'pdfjs-dist';
const pdfFromPath = async (path) => {
    let doc = await pdfjsLib.getDocument(path).promise;
    let page1 = await doc.getPage(1);
    let content = await page1.getTextContent();
    let strings = content.items.map(function(item) {
        return item.str;
    });
    return strings;
};

module.exports = {pdfFromPath}
