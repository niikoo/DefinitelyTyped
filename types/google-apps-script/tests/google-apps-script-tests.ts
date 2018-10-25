/**
 * Examples from the official Google Apps Script Documentation
 * @see https://developers.google.com/apps-script/articles/
 */


/**
 * Creates a Google Doc and sends an email to the current user with a link to the doc.
 * @see https://developers.google.com/apps-script/overview#your_first_script
 */

function createAndSendDocument() {
    // Create a new Google Doc named 'Hello, world!'
    var doc = DocumentApp.create('Hello, world!');

    // Access the body of the document, then add a paragraph.
    doc.getBody().appendParagraph('This document was created by Google Apps Script.');

    // Get the URL of the document.
    var url = doc.getUrl();

    // Get the email address of the active user - that's you.
    var email = Session.getActiveUser().getEmail();

    // Get the name of the document to use as an email subject line.
    var subject = doc.getName();

    // Append a new string to the "url" variable to use as an email body.
    var body = 'Link to your doc: ' + url;

    // Send yourself an email with a link to the document.
    GmailApp.sendEmail(email, subject, body);
}


// Regression
ScriptApp.getService().getUrl();
CalendarApp.GuestStatus.NO;

// test for URLFetchRequestOptions.payload
import URLFetchRequestOptions = URL_Fetch.URLFetchRequestOptions;
const postTest = (payload: Object): string => {
    const url = 'http://httpbin.org/post';
    const params: URLFetchRequestOptions = {
        method: 'post',
        payload: payload
    };
    return UrlFetchApp.fetch(url, params).getContentText();
};


const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheets()[0];
const range = sheet.getRange("B2:D2");
const cell = sheet.getRange("B2");
// The size of the two-dimensional array must match the size of the range.
var fontLines: Spreadsheet.FontLineStyle[][] = [
    ["underline", "line-through", "none"]
];

range.setFontLines(fontLines);
cell.setFontSize(20);

var fontSizes = [
    [16, 20, 24]
];

sheet.getRange("B2:D2");
range.setFontSizes(fontSizes);
cell.setFontStyle("italic");

var fontStyles = [
    ["italic", "normal"]
];

range.setFontStyles(fontStyles);
cell.setFontWeight("bold");
range.setFontWeights(fontStyles);
cell.setFormula("=SUM(B3:B4)");
cell.setFormulaR1C1("=SUM(R[-3]C[0]:R[-1]C[0])");

var formulas = [
    ["=SUM(B2:B4)", "=SUM(C2:C4)", "=SUM(D2:D4)"],
    ["=AVERAGE(B2:B4)", "=AVERAGE(C2:C4)", "=AVERAGE(D2:D4)"]
];
cell.setFormulas(formulas);
range.setTextDirection(SpreadsheetApp.TextDirection.RIGHT_TO_LEFT);

function logProductInfo() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = sheet.getDataRange().getValues();
    for (var i = 0; i < data.length; i++) {
        Logger.log('Product name: ' + data[i][0]);
        Logger.log('Product number: ' + data[i][1]);
    }
}

function addProduct() {
    var sheet = SpreadsheetApp.getActiveSheet();
    sheet.appendRow(['Cotton Sweatshirt XL', 'css004']);
}

function formatMySpreadsheet() {
    // Set the font style of the cells in the range of B2:C2 to be italic.
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    var cell = sheet.getRange('B2:C2');
    cell.setFontStyle('italic');
}
function validateMySpreadsheet() {
    // Set a rule for the cell B4 to be a number between 1 and 100.
    var cell = SpreadsheetApp.getActive().getRange('B4');
    var rule = SpreadsheetApp.newDataValidation()
        .requireNumberBetween(1, 100)
        .setAllowInvalid(false)
        .setHelpText('Number must be between 1 and 100.')
        .build();
    cell.setDataValidation(rule);
}

function sitesLink() {
    var recipient = Session.getActiveUser().getEmail();
    GmailApp.sendEmail(recipient, 'Email from your site', 'You clicked a link!');
}

function newChart() {
    // Generate a chart representing the data in the range of A1:B15.
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];

    var chart = sheet.newChart()
        .setChartType(Charts.ChartType.BAR)
        .addRange(sheet.getRange('A1:B15'))
        .setPosition(5, 5, 0, 0)
        .build();

    sheet.insertChart(chart);
}

/**
 * Multiplies the input value by 2.
 *
 * @param {number} input The value to multiply.
 * @return The input multiplied by 2.
 * @customfunction
 */
function DOUBLE(input: number) {
    return input * 2;
}
