let options = `
    <option value="">Grade</option>
    <option value="A1">A1</option>
    <option value="B2">B2</option>
    <option value="B3">B3</option>
    <option value="C4">C4</option>
    <option value="C5">C5</option>
    <option value="C6">C6</option>
`;

let selectTags = document.getElementsByTagName('select');
selectArray = Array.from(selectTags);
selectArray.forEach(select => {
    select.innerHTML = options;
});