var selection = SlidesApp.getActivePresentation().getSelection();
var selectionType = selection.getSelectionType();
var currentPage;
switch (selectionType) {
    case SlidesApp.SelectionType.NONE:
        Logger.log('Nothing selected');
        break;
    case SlidesApp.SelectionType.CURRENT_PAGE:
        currentPage = selection.getCurrentPage();
        Logger.log('Selection is a page with ID: ' + currentPage.getObjectId());
        break;
    case SlidesApp.SelectionType.PAGE_ELEMENT:
        var pageElements = selection.getPageElementRange().getPageElements();
        Logger.log('There are ' + pageElements.length + ' page elements selected.');
        break;
    case SlidesApp.SelectionType.TEXT:
        var tableCellRange = selection.getTableCellRange();
        if (tableCellRange != null) {
            var tableCell = tableCellRange.getTableCells()[0];
            Logger.log('Selected text is in a table at row ' +
                tableCell.getRowIndex() + ', column ' +
                tableCell.getColumnIndex());
        }
        var textRange = selection.getTextRange();
        if (textRange.getStartIndex() == textRange.getEndIndex()) {
            Logger.log('Text cursor position: ' + textRange.getStartIndex());
        } else {
            Logger.log('Selection is a text range from: ' + textRange.getStartIndex() + ' to: ' +
                textRange.getEndIndex() + ' is selected');
        }
        break;
    case SlidesApp.SelectionType.TABLE_CELL:
        var tableCells = selection.getTableCellRange().getTableCells();
        var table = tableCells[0].getParentTable();
        Logger.log('There are ' + tableCells.length + ' table cells selected.');
        break;
    case SlidesApp.SelectionType.PAGE:
        var pages = selection.getPageRange().getPages();
        Logger.log('There are ' + pages.length + ' pages selected.');
        break;
    default:
        break;
}

