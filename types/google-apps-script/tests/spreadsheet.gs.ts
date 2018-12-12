/**
 * Copyright Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * Source: https://raw.githubusercontent.com/gsuitedevs/apps-script-samples/master/templates/sheets-addon/Code.gs
 */


/**
 * @OnlyCurrentDoc  Limits the script to only accessing the current spreadsheet.
 */

var DIALOG_TITLE = 'Example Dialog';
var SIDEBAR_TITLE = 'Example Sidebar';

/**
 * Adds a custom menu with items to show the sidebar and dialog.
 *
 * @param {Object} e The event parameter for a simple onOpen trigger.
 */
function onOpen(e: any) {
    SpreadsheetApp.getUi()
        .createAddonMenu()
        .addItem('Show sidebar', 'showSidebar')
        .addItem('Show dialog', 'showDialog')
        .addToUi();
}

/**
 * Runs when the add-on is installed; calls onOpen() to ensure menu creation and
 * any other initializion work is done immediately.
 *
 * @param {Object} e The event parameter for a simple onInstall trigger.
 */
function onInstall(e: any) {
    onOpen(e);
}

/**
 * Opens a sidebar. The sidebar structure is described in the Sidebar.html
 * project file.
 */
function showSidebar() {
    var ui = HtmlService.createTemplateFromFile('Sidebar')
        .evaluate()
        .setTitle(SIDEBAR_TITLE);
    SpreadsheetApp.getUi().showSidebar(ui);
}

/**
 * Opens a dialog. The dialog structure is described in the Dialog.html
 * project file.
 */
function showDialog() {
    var ui = HtmlService.createTemplateFromFile('Dialog')
        .evaluate()
        .setWidth(400)
        .setHeight(190);
    SpreadsheetApp.getUi().showModalDialog(ui, DIALOG_TITLE);
}

/**
 * Returns the value in the active cell.
 *
 * @return {String} The value of the active cell.
 */
function getActiveValue() {
    // Retrieve and return the information requested by the sidebar.
    var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
    return cell.getValue();
}

/**
 * Replaces the active cell value with the given value.
 *
 * @param {Number} value A reference number to replace with.
 */
function setActiveValue(value: number) {
    // Use data collected from sidebar to manipulate the sheet.
    var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
    cell.setValue(value);
}

/**
 * Executes the specified action (create a new sheet, copy the active sheet, or
 * clear the current sheet).
 *
 * @param {String} action An identifier for the action to take.
 */
function modifySheets(action: string) {
    // Use data collected from dialog to manipulate the spreadsheet.
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var currentSheet = ss.getActiveSheet();
    if (action == 'create') {
        ss.insertSheet();
    } else if (action == 'copy') {
        currentSheet.copyTo(ss);
    } else if (action == 'clear') {
        currentSheet.clear();
    }
}

// Logs the height of all images in a spreadsheet
// Source: https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image
var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
for (var i = 0; i < images.length; i++) {
    Logger.log(images[i].getHeight());
}

// Logs the parent sheet of all images in a spreadsheet
// Source: https://developers.google.com/apps-script/reference/spreadsheet/over-grid-image
var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
for (var i = 0; i < images.length; i++) {
    Logger.log(images[i].getSheet());
}

// Source: https://developers.google.com/apps-script/reference/spreadsheet/sheet
// Remove all range protections in the spreadsheet that the user has permission to edit.
var protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);
for (var i = 0; i < protections.length; i++) {
    var protection = protections[i];
    if (protection.canEdit()) {
        protection.remove();
    }
}
// Remove sheet protection from the active sheet, if the user has permission to edit it.
var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
if (protection && protection.canEdit()) {
    protection.remove();
}

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// When the "numRows" argument is used, only a single column of data is returned.
var range = sheet.getRange(1, 1, 3);
var values = range.getValues();

// Prints 3 values from the first column, starting from row 1.
for (var row in values) {
    for (var col in values[row]) {
        Logger.log(values[row][col]);
    }
}
var rangeList = sheet.getRangeList(['A1:D4', 'F1:H4']);
Logger.log(sheet.getSheetId());

