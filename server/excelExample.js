const excelToJson = require('convert-excel-to-json');
const XLSX = require('xlsx');
const _ = require('lodash');

const result = excelToJson({
    sourceFile: './Book.xlsx',
    header:{
        // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
        rows: 1 // 2, 3, 4, etc.
    },
    columnToKey: {
        A: 'FirstName',
        B: 'SecondName',
        C: 'NumberofPeople',
        D: 'Url'
    }
});
// add for each invitee the url
let invitees = result.Sheet1
AddUrlForEachInvitees(invitees)
// add title for each col
// invitees.unshift({ A: 'First Name', B: 'Last Name', C: 'number of people', D: 'Url'});
// add invitees in a new excel sheet
const worksheet = XLSX.utils.json_to_sheet(invitees);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Example");
XLSX.writeFile(workbook, "Book(1).xlsx", { compression: true });

function AddUrlForEachInvitees(array) {
    array.forEach(inv => {
        Object.keys(inv).forEach(key => {
            if (typeof inv[key] === 'string') {
                inv[key] = inv[key].replace(/\s/g, ''); // Remove all spaces using regex
            }
        });
        inv.Url = `https://e-vents.me/test123/${inv.FirstName ?? ''}${inv.SecondName ? 'and': ''}${inv.SecondName ?? ''}/?numberofPeople=${inv.NumberofPeople}`
    });
}
