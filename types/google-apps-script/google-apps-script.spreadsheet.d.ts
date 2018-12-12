// Type definitions for Google Apps Script 2018-12-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>, niikoo <https://github.com/niikoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.charts.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />
/// <reference path="google-apps-script.drive.d.ts" />

declare namespace Spreadsheet {
  type Column = string | number | boolean | Date | 'column';
  interface Row {
    [index: number]: Column[] | string[] | 'row';
  }

  /**
   * An enumeration of the types of series used to calculate auto-filled values. The manner in which
   * these series affect calculated values differs depending on the type and amount of source data.
   */
  enum AutoFillSeries { DEFAULT_SERIES, ALTERNATE_SERIES }

  /**
   * Access and modify bandings, the color patterns applied to rows or columns of a range. Each
   * banding consists of a range and a set of colors for rows, columns, headers, and footers.
   */
  interface Banding {
    copyTo(range: Range): Banding;
    getFirstColumnColor(): string;
    getFirstRowColor(): string;
    getFooterColumnColor(): string;
    getFooterRowColor(): string;
    getHeaderColumnColor(): string;
    getHeaderRowColor(): string;
    getRange(): Range;
    getSecondColumnColor(): string;
    getSecondRowColor(): string;
    remove(): void;
    setFirstColumnColor(color: string): Banding;
    setFirstRowColor(color: string): Banding;
    setFooterColumnColor(color: string): Banding;
    setFooterRowColor(color: string): Banding;
    setHeaderColumnColor(color: string): Banding;
    setHeaderRowColor(color: string): Banding;
    setRange(range: Range): Banding;
    setSecondColumnColor(color: string): Banding;
    setSecondRowColor(color: string): Banding;
  }

  /**
   * An enumeration of banding themes. Each theme consists of several complementary colors that are
   * applied to different cells based on the banding settings.
   */
  enum BandingTheme { LIGHT_GREY, CYAN, GREEN, YELLOW, ORANGE, BLUE, TEAL, GREY, BROWN, LIGHT_GREEN, INDIGO, PINK }

  /**
   * Access boolean conditions in ConditionalFormatRules. Each
   * conditional format rule may contain a single boolean condition. The boolean condition itself
   * contains a boolean criteria (with values) and formatting settings. The criteria is evaluated
   * against the content of a cell resulting in either a true or false value. If the
   * criteria evaluates to true, the condition's formatting settings are applied to the cell.
   */
  interface BooleanCondition {
    getBackground(): string;
    getBold(): boolean;
    getCriteriaType(): BooleanCriteria;
    getCriteriaValues(): any[];
    getFontColor(): string;
    getItalic(): boolean;
    getStrikethrough(): boolean;
    getUnderline(): boolean;
  }

  /**
   * An enumeration representing the boolean criteria that can be used in conditional format or
   * filter.
   */
  enum BooleanCriteria { CELL_EMPTY, CELL_NOT_EMPTY, DATE_AFTER, DATE_BEFORE, DATE_EQUAL_TO, DATE_AFTER_RELATIVE, DATE_BEFORE_RELATIVE, DATE_EQUAL_TO_RELATIVE, NUMBER_BETWEEN, NUMBER_EQUAL_TO, NUMBER_GREATER_THAN, NUMBER_GREATER_THAN_OR_EQUAL_TO, NUMBER_LESS_THAN, NUMBER_LESS_THAN_OR_EQUAL_TO, NUMBER_NOT_BETWEEN, NUMBER_NOT_EQUAL_TO, TEXT_CONTAINS, TEXT_DOES_NOT_CONTAIN, TEXT_EQUAL_TO, TEXT_STARTS_WITH, TEXT_ENDS_WITH, CUSTOM_FORMULA }

  /**
   * Styles that can be set on a range using Range.setBorder(top, left, bottom, right, vertical, horizontal, color, style).
   */
  enum BorderStyle { DOTTED, DASHED, SOLID, SOLID_MEDIUM, SOLID_THICK, DOUBLE }

  /**
   * Access conditional formatting rules. To create a new rule, use SpreadsheetApp.newConditionalFormatRule() and ConditionalFormatRuleBuilder.
   * You can use Sheet.setConditionalFormatRules(rules) to set the
   * rules for a given sheet.
   */
  interface ConditionalFormatRule {
    copy(): ConditionalFormatRuleBuilder;
    getBooleanCondition(): BooleanCondition;
    getGradientCondition(): GradientCondition;
    getRanges(): Range[];
  }

  /**
   * Builder for conditional format rules.
   *
   *     // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
   *     // they contain a number between 1 and 10.
   *     var sheet = SpreadsheetApp.getActiveSheet();
   *     var range = sheet.getRange("A1:B3");
   *     var rule = SpreadsheetApp.newConditionalFormatRule()
   *         .whenNumberBetween(1, 10)
   *         .setBackgroundColor("#FF0000")
   *         .setRanges([range])
   *         .build();
   *     var rules = sheet.getConditionalFormatRules();
   *     rules.push(rule);
   *     sheet.setConditionalFormatRules(rules);
   */
  interface ConditionalFormatRuleBuilder {
    build(): ConditionalFormatRule;
    copy(): ConditionalFormatRuleBuilder;
    getBooleanCondition(): BooleanCondition;
    getGradientCondition(): GradientCondition;
    getRanges(): Range[];
    setBackground(color: string): ConditionalFormatRuleBuilder;
    setBold(bold: boolean): ConditionalFormatRuleBuilder;
    setFontColor(color: string): ConditionalFormatRuleBuilder;
    setGradientMaxpoint(color: string): ConditionalFormatRuleBuilder;
    setGradientMaxpointWithValue(color: string, type: InterpolationType, value: string): ConditionalFormatRuleBuilder;
    setGradientMidpointWithValue(color: string, type: InterpolationType, value: string): ConditionalFormatRuleBuilder;
    setGradientMinpoint(color: string): ConditionalFormatRuleBuilder;
    setGradientMinpointWithValue(color: string, type: InterpolationType, value: string): ConditionalFormatRuleBuilder;
    setItalic(italic: boolean): ConditionalFormatRuleBuilder;
    setRanges(ranges: Range[]): ConditionalFormatRuleBuilder;
    setStrikethrough(strikethrough: boolean): ConditionalFormatRuleBuilder;
    setUnderline(underline: boolean): ConditionalFormatRuleBuilder;
    whenCellEmpty(): ConditionalFormatRuleBuilder;
    whenCellNotEmpty(): ConditionalFormatRuleBuilder;
    whenDateAfter(date: Date): ConditionalFormatRuleBuilder;
    whenDateAfter(date: RelativeDate): ConditionalFormatRuleBuilder;
    whenDateBefore(date: Date): ConditionalFormatRuleBuilder;
    whenDateBefore(date: RelativeDate): ConditionalFormatRuleBuilder;
    whenDateEqualTo(date: Date): ConditionalFormatRuleBuilder;
    whenDateEqualTo(date: RelativeDate): ConditionalFormatRuleBuilder;
    whenFormulaSatisfied(formula: string): ConditionalFormatRuleBuilder;
    whenNumberBetween(start: Number, end: Number): ConditionalFormatRuleBuilder;
    whenNumberEqualTo(number: Number): ConditionalFormatRuleBuilder;
    whenNumberGreaterThan(number: Number): ConditionalFormatRuleBuilder;
    whenNumberGreaterThanOrEqualTo(number: Number): ConditionalFormatRuleBuilder;
    whenNumberLessThan(number: Number): ConditionalFormatRuleBuilder;
    whenNumberLessThanOrEqualTo(number: Number): ConditionalFormatRuleBuilder;
    whenNumberNotBetween(start: Number, end: Number): ConditionalFormatRuleBuilder;
    whenNumberNotEqualTo(number: Number): ConditionalFormatRuleBuilder;
    whenTextContains(text: string): ConditionalFormatRuleBuilder;
    whenTextDoesNotContain(text: string): ConditionalFormatRuleBuilder;
    whenTextEndsWith(text: string): ConditionalFormatRuleBuilder;
    whenTextEqualTo(text: string): ConditionalFormatRuleBuilder;
    whenTextStartsWith(text: string): ConditionalFormatRuleBuilder;
    withCriteria(criteria: BooleanCriteria, args: any[]): ConditionalFormatRuleBuilder;
  }

  /**
   * Access the chart's position within a sheet. Can be updated using the EmbeddedChart.modify() function.
   *
   *     chart = chart.modify().setPosition(5, 5, 0, 0).build();
   *     sheet.updateChart(chart);
   */
  interface ContainerInfo {
    getAnchorColumn(): Integer;
    getAnchorRow(): Integer;
    getOffsetX(): Integer;
    getOffsetY(): Integer;
  }

  /**
   * An enumeration of possible special paste types.
   */
  enum CopyPasteType { PASTE_NORMAL, PASTE_NO_BORDERS, PASTE_FORMAT, PASTE_FORMULA, PASTE_DATA_VALIDATION, PASTE_VALUES, PASTE_CONDITIONAL_FORMATTING, PASTE_COLUMN_WIDTHS }

  /**
   * Access data validation rules.
   * To create a new rule, use ´SpreadsheetApp.newDataValidation()´ and ´DataValidationBuilder´.
   * You can use ´Range.setDataValidation(rule)´ to set the validation rule for a range.
   * 
   * @example
   *     // Log information about the data validation rule for cell A1.
   *     var cell = SpreadsheetApp.getActive().getRange('A1');
   *     var rule = cell.getDataValidation();
   *     if (rule != null) {
   *       var criteria = rule.getCriteriaType();
   *       var args = rule.getCriteriaValues();
   *       Logger.log('The data validation rule is %s %s', criteria, args);
   *     } else {
   *       Logger.log('The cell does not have a data validation rule.')
   *     }
   */
  interface DataValidation {
    copy(): DataValidationBuilder;
    getAllowInvalid(): boolean;
    getCriteriaType(): DataValidationCriteria;
    getCriteriaValues(): any[];
    getHelpText(): string;
  }

  /**
   * Builder for data validation rules.
   *
   *     // Set the data validation for cell A1 to require a value from B1:B10.
   *     var cell = SpreadsheetApp.getActive().getRange('A1');
   *     var range = SpreadsheetApp.getActive().getRange('B1:B10');
   *     var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
   *     cell.setDataValidation(rule);
   */
  interface DataValidationBuilder {
    build(): DataValidation;
    copy(): DataValidationBuilder;
    getAllowInvalid(): boolean;
    getCriteriaType(): DataValidationCriteria;
    getCriteriaValues(): any[];
    getHelpText(): string;
    requireDate(): DataValidationBuilder;
    requireDateAfter(date: Date): DataValidationBuilder;
    requireDateBefore(date: Date): DataValidationBuilder;
    requireDateBetween(start: Date, end: Date): DataValidationBuilder;
    requireDateEqualTo(date: Date): DataValidationBuilder;
    requireDateNotBetween(start: Date, end: Date): DataValidationBuilder;
    requireDateOnOrAfter(date: Date): DataValidationBuilder;
    requireDateOnOrBefore(date: Date): DataValidationBuilder;
    requireFormulaSatisfied(formula: string): DataValidationBuilder;
    requireNumberBetween(start: Number, end: Number): DataValidationBuilder;
    requireNumberEqualTo(number: Number): DataValidationBuilder;
    requireNumberGreaterThan(number: Number): DataValidationBuilder;
    requireNumberGreaterThanOrEqualTo(number: Number): DataValidationBuilder;
    requireNumberLessThan(number: Number): DataValidationBuilder;
    requireNumberLessThanOrEqualTo(number: Number): DataValidationBuilder;
    requireNumberNotBetween(start: Number, end: Number): DataValidationBuilder;
    requireNumberNotEqualTo(number: Number): DataValidationBuilder;
    requireTextContains(text: string): DataValidationBuilder;
    requireTextDoesNotContain(text: string): DataValidationBuilder;
    requireTextEqualTo(text: string): DataValidationBuilder;
    requireTextIsEmail(): DataValidationBuilder;
    requireTextIsUrl(): DataValidationBuilder;
    requireValueInList(values: string[]): DataValidationBuilder;
    requireValueInList(values: string[], showDropdown: boolean): DataValidationBuilder;
    requireValueInRange(range: Range): DataValidationBuilder;
    requireValueInRange(range: Range, showDropdown: boolean): DataValidationBuilder;
    setAllowInvalid(allowInvalidData: boolean): DataValidationBuilder;
    setHelpText(helpText: string): DataValidationBuilder;
    withCriteria(criteria: DataValidationCriteria, args: any[]): DataValidationBuilder;
  }

  /**
   * An enumeration representing the data validation criteria that can be set on a range.
   *
   *     // Change existing data-validation rules that require a date in 2013 to require a date in 2014.
   *     var oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
   *     var newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
   *     var sheet = SpreadsheetApp.getActiveSheet();
   *     var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
   *     var rules = range.getDataValidations();
   *
   *     for (var i = 0; i < rules.length; i++) {
   *       for (var j = 0; j < rules[i].length; j++) {
   *         var rule = rules[i][j];
   *
   *         if (rule != null) {
   *           var criteria = rule.getCriteriaType();
   *           var args = rule.getCriteriaValues();
   *
   *           if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
   *               && args[0].getTime() == oldDates[0].getTime()
   *               && args[1].getTime() == oldDates[1].getTime()) {
   *             // Create a builder from the existing rule, then change the dates.
   *             rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
   *           }
   *         }
   *       }
   *     }
   *     range.setDataValidations(rules);
   */
  enum DataValidationCriteria { DATE_AFTER, DATE_BEFORE, DATE_BETWEEN, DATE_EQUAL_TO, DATE_IS_VALID_DATE, DATE_NOT_BETWEEN, DATE_ON_OR_AFTER, DATE_ON_OR_BEFORE, NUMBER_BETWEEN, NUMBER_EQUAL_TO, NUMBER_GREATER_THAN, NUMBER_GREATER_THAN_OR_EQUAL_TO, NUMBER_LESS_THAN, NUMBER_LESS_THAN_OR_EQUAL_TO, NUMBER_NOT_BETWEEN, NUMBER_NOT_EQUAL_TO, TEXT_CONTAINS, TEXT_DOES_NOT_CONTAIN, TEXT_EQUAL_TO, TEXT_IS_VALID_EMAIL, TEXT_IS_VALID_URL, VALUE_IN_LIST, VALUE_IN_RANGE, CUSTOM_FORMULA, CHECKBOX }

  /**
   * An enumeration of possible directions along which data can be stored in a spreadsheet.
   */
  enum Dimension { COLUMNS, ROWS }

  /**
   * An enumeration representing the possible directions that one can move within a spreadsheet using
   * the arrow keys.
   */
  enum Direction { UP, DOWN, PREVIOUS, NEXT }

  /**
   * Builder for area charts. For more details, see the Gviz
   * documentation.
   */
  interface EmbeddedAreaChartBuilder {
    addRange(range: Range): EmbeddedChartBuilder;
    asAreaChart(): EmbeddedAreaChartBuilder;
    asBarChart(): EmbeddedBarChartBuilder;
    asColumnChart(): EmbeddedColumnChartBuilder;
    asComboChart(): EmbeddedComboChartBuilder;
    asHistogramChart(): EmbeddedHistogramChartBuilder;
    asLineChart(): EmbeddedLineChartBuilder;
    asPieChart(): EmbeddedPieChartBuilder;
    asScatterChart(): EmbeddedScatterChartBuilder;
    asTableChart(): EmbeddedTableChartBuilder;
    build(): EmbeddedChart;
    getChartType(): Charts.ChartType;
    getContainer(): ContainerInfo;
    getRanges(): Range[];
    removeRange(range: Range): EmbeddedChartBuilder;
    reverseCategories(): EmbeddedAreaChartBuilder;
    setBackgroundColor(cssValue: string): EmbeddedAreaChartBuilder;
    setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
    setColors(cssValues: string[]): EmbeddedAreaChartBuilder;
    setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
    setLegendPosition(position: Charts.Position): EmbeddedAreaChartBuilder;
    setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
    setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
    setNumHeaders(headers: Integer): EmbeddedChartBuilder;
    setOption(option: string, value: any): EmbeddedChartBuilder;
    setPointStyle(style: Charts.PointStyle): EmbeddedAreaChartBuilder;
    setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
    setRange(start: Number, end: Number): EmbeddedAreaChartBuilder;
    setStacked(): EmbeddedAreaChartBuilder;
    setTitle(chartTitle: string): EmbeddedAreaChartBuilder;
    setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
    setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
    setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
    setXAxisTitle(title: string): EmbeddedAreaChartBuilder;
    setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
    setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
    setYAxisTitle(title: string): EmbeddedAreaChartBuilder;
    setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
    useLogScale(): EmbeddedAreaChartBuilder;
  }

  /**
   * Builder for bar charts. For more details, see the Gviz
   * documentation.
   */
  interface EmbeddedBarChartBuilder {
    addRange(range: Range): EmbeddedChartBuilder;
    asAreaChart(): EmbeddedAreaChartBuilder;
    asBarChart(): EmbeddedBarChartBuilder;
    asColumnChart(): EmbeddedColumnChartBuilder;
    asComboChart(): EmbeddedComboChartBuilder;
    asHistogramChart(): EmbeddedHistogramChartBuilder;
    asLineChart(): EmbeddedLineChartBuilder;
    asPieChart(): EmbeddedPieChartBuilder;
    asScatterChart(): EmbeddedScatterChartBuilder;
    asTableChart(): EmbeddedTableChartBuilder;
    build(): EmbeddedChart;
    getChartType(): Charts.ChartType;
    getContainer(): ContainerInfo;
    getRanges(): Range[];
    removeRange(range: Range): EmbeddedChartBuilder;
    reverseCategories(): EmbeddedBarChartBuilder;
    reverseDirection(): EmbeddedBarChartBuilder;
    setBackgroundColor(cssValue: string): EmbeddedBarChartBuilder;
    setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
    setColors(cssValues: string[]): EmbeddedBarChartBuilder;
    setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
    setLegendPosition(position: Charts.Position): EmbeddedBarChartBuilder;
    setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
    setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
    setNumHeaders(headers: Integer): EmbeddedChartBuilder;
    setOption(option: string, value: any): EmbeddedChartBuilder;
    setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
    setRange(start: Number, end: Number): EmbeddedBarChartBuilder;
    setStacked(): EmbeddedBarChartBuilder;
    setTitle(chartTitle: string): EmbeddedBarChartBuilder;
    setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
    setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
    setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
    setXAxisTitle(title: string): EmbeddedBarChartBuilder;
    setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
    setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
    setYAxisTitle(title: string): EmbeddedBarChartBuilder;
    setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
    useLogScale(): EmbeddedBarChartBuilder;
  }

  /**
   * Represents a chart that has been embedded into a spreadsheet.
   *
   * This example shows how to modify an existing chart:
   *
   *     var sheet = SpreadsheetApp.getActiveSheet();
   *     var range = sheet.getRange("A2:B8")
   *     var chart = sheet.getCharts()[0];
   *     chart = chart.modify()
   *         .addRange(range)
   *         .setOption('title', 'Updated!')
   *         .setOption('animation.duration', 500)
   *         .setPosition(2,2,0,0)
   *         .build();
   *     sheet.updateChart(chart);
   *
   * This example shows how to create a new chart:
   *
   *     function newChart(range, sheet) {
   *       var sheet = SpreadsheetApp.getActiveSheet();
   *       var chartBuilder = sheet.newChart();
   *       chartBuilder.addRange(range)
   *           .setChartType(Charts.ChartType.LINE)
   *           .setOption('title', 'My Line Chart!');
   *       sheet.insertChart(chartBuilder.build());
   *     }
   */
  interface EmbeddedChart {
    getAs(contentType: string): Base.Blob;
    getBlob(): Base.Blob;
    getContainerInfo(): ContainerInfo;
    getHiddenDimensionStrategy(): Charts.ChartHiddenDimensionStrategy;
    getId(): string;
    getMergeStrategy(): Charts.ChartMergeStrategy;
    getNumHeaders(): Integer;
    getOptions(): Charts.ChartOptions;
    getRanges(): Range[];
    getTransposeRowsAndColumns(): boolean;
    getType(): string;
    modify(): EmbeddedChartBuilder;
    setId(id: string): Charts.Chart;
  }

  /**
   * Builder used to edit an EmbeddedChart. Changes made to the chart are not saved until
   * Sheet.updateChart(chart) is called on the rebuilt chart.
   *
   *     var sheet = SpreadsheetApp.getActiveSheet();
   *     var range = sheet.getRange("A1:B8");
   *     var chart = sheet.getCharts()[0];
   *     chart = chart.modify()
   *         .addRange(range)
   *         .setOption('title', 'Updated!')
   *         .setOption('animation.duration', 500)
   *         .setPosition(2,2,0,0)
   *         .build();
   *     sheet.updateChart(chart);
   */
  interface EmbeddedChartBuilder {
    addRange(range: Range): EmbeddedChartBuilder;
    asAreaChart(): EmbeddedAreaChartBuilder;
    asBarChart(): EmbeddedBarChartBuilder;
    asColumnChart(): EmbeddedColumnChartBuilder;
    asComboChart(): EmbeddedComboChartBuilder;
    asHistogramChart(): EmbeddedHistogramChartBuilder;
    asLineChart(): EmbeddedLineChartBuilder;
    asPieChart(): EmbeddedPieChartBuilder;
    asScatterChart(): EmbeddedScatterChartBuilder;
    asTableChart(): EmbeddedTableChartBuilder;
    build(): EmbeddedChart;
    getChartType(): Charts.ChartType;
    getContainer(): ContainerInfo;
    getRanges(): Range[];
    removeRange(range: Range): EmbeddedChartBuilder;
    setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
    setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
    setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
    setNumHeaders(headers: Integer): EmbeddedChartBuilder;
    setOption(option: string, value: any): EmbeddedChartBuilder;
    setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
    setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
  }

  /**
   * Builder for column charts. For more details, see the Gviz
   * documentation.
   */
  interface EmbeddedColumnChartBuilder {
    addRange(range: Range): EmbeddedChartBuilder;
    asAreaChart(): EmbeddedAreaChartBuilder;
    asBarChart(): EmbeddedBarChartBuilder;
    asColumnChart(): EmbeddedColumnChartBuilder;
    asComboChart(): EmbeddedComboChartBuilder;
    asHistogramChart(): EmbeddedHistogramChartBuilder;
    asLineChart(): EmbeddedLineChartBuilder;
    asPieChart(): EmbeddedPieChartBuilder;
    asScatterChart(): EmbeddedScatterChartBuilder;
    asTableChart(): EmbeddedTableChartBuilder;
    build(): EmbeddedChart;
    getChartType(): Charts.ChartType;
    getContainer(): ContainerInfo;
    getRanges(): Range[];
    removeRange(range: Range): EmbeddedChartBuilder;
    reverseCategories(): EmbeddedColumnChartBuilder;
    setBackgroundColor(cssValue: string): EmbeddedColumnChartBuilder;
    setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
    setColors(cssValues: string[]): EmbeddedColumnChartBuilder;
    setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
    setLegendPosition(position: Charts.Position): EmbeddedColumnChartBuilder;
    setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
    setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
    setNumHeaders(headers: Integer): EmbeddedChartBuilder;
    setOption(option: string, value: any): EmbeddedChartBuilder;
    setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
    setRange(start: Number, end: Number): EmbeddedColumnChartBuilder;
    setStacked(): EmbeddedColumnChartBuilder;
    setTitle(chartTitle: string): EmbeddedColumnChartBuilder;
    setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
    setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
    setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
    setXAxisTitle(title: string): EmbeddedColumnChartBuilder;
    setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
    setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
    setYAxisTitle(title: string): EmbeddedColumnChartBuilder;
    setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
    useLogScale(): EmbeddedColumnChartBuilder;
  }

  /**
   * Builder for combo charts. For more details, see the Gviz documentation.
   */
  interface EmbeddedComboChartBuilder {
    addRange(range: Range): EmbeddedChartBuilder;
    asAreaChart(): EmbeddedAreaChartBuilder;
    asBarChart(): EmbeddedBarChartBuilder;
    asColumnChart(): EmbeddedColumnChartBuilder;
    asComboChart(): EmbeddedComboChartBuilder;
    asHistogramChart(): EmbeddedHistogramChartBuilder;
    asLineChart(): EmbeddedLineChartBuilder;
    asPieChart(): EmbeddedPieChartBuilder;
    asScatterChart(): EmbeddedScatterChartBuilder;
    asTableChart(): EmbeddedTableChartBuilder;
    build(): EmbeddedChart;
    getChartType(): Charts.ChartType;
    getContainer(): ContainerInfo;
    getRanges(): Range[];
    removeRange(range: Range): EmbeddedChartBuilder;
    reverseCategories(): EmbeddedComboChartBuilder;
    setBackgroundColor(cssValue: string): EmbeddedComboChartBuilder;
    setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
    setColors(cssValues: string[]): EmbeddedComboChartBuilder;
    setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
    setLegendPosition(position: Charts.Position): EmbeddedComboChartBuilder;
    setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;
    setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
    setNumHeaders(headers: Integer): EmbeddedChartBuilder;
    setOption(option: string, value: any): EmbeddedChartBuilder;
    setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
    setRange(start: Number, end: Number): EmbeddedComboChartBuilder;
    setStacked(): EmbeddedComboChartBuilder;
    setTitle(chartTitle: string): EmbeddedComboChartBuilder;
    setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;
    setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
    setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;
    setXAxisTitle(title: string): EmbeddedComboChartBuilder;
    setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;
    setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;
    setYAxisTitle(title: string): EmbeddedComboChartBuilder;
    setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedComboChartBuilder;
    useLogScale(): EmbeddedComboChartBuilder;
  }

  /**
   * Builder for histogram charts. For more details, see the Gviz
   * documentation.
   */
  interface EmbeddedHistogramChartBuilder {
    addRange(range: Range): EmbeddedChartBuilder;
    asAreaChart(): EmbeddedAreaChartBuilder;
    asBarChart(): EmbeddedBarChartBuilder;
    asColumnChart(): EmbeddedColumnChartBuilder;
    asComboChart(): EmbeddedComboChartBuilder;
    asHistogramChart(): EmbeddedHistogramChartBuilder;
    asLineChart(): EmbeddedLineChartBuilder;
    asPieChart(): EmbeddedPieChartBuilder;
    asScatterChart(): EmbeddedScatterChartBuilder;
    asTableChart(): EmbeddedTableChartBuilder;
    build(): EmbeddedChart;
    getChartType(): Charts.ChartType;
    getContainer(): ContainerInfo;
    getRanges(): Range[];
    removeRange(range: Range): EmbeddedChartBuilder;
    reverseCategories(): EmbeddedHistogramChartBuilder;
    setBackgroundColor(cssValue: string): EmbeddedHistogramChartBuilder;
    setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
    setColors(cssValues: string[]): EmbeddedHistogramChartBuilder;
    setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
    setLegendPosition(position: Charts.Position): EmbeddedHistogramChartBuilder;
    setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;
    setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
    setNumHeaders(headers: Integer): EmbeddedChartBuilder;
    setOption(option: string, value: any): EmbeddedChartBuilder;
    setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
    setRange(start: Number, end: Number): EmbeddedHistogramChartBuilder;
    setStacked(): EmbeddedHistogramChartBuilder;
    setTitle(chartTitle: string): EmbeddedHistogramChartBuilder;
    setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;
    setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
    setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;
    setXAxisTitle(title: string): EmbeddedHistogramChartBuilder;
    setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;
    setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;
    setYAxisTitle(title: string): EmbeddedHistogramChartBuilder;
    setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedHistogramChartBuilder;
    useLogScale(): EmbeddedHistogramChartBuilder;
  }

  /**
   * Builder for line charts. For more details, see the Gviz
   * documentation.
   */
  interface EmbeddedLineChartBuilder {
    addRange(range: Range): EmbeddedChartBuilder;
    asAreaChart(): EmbeddedAreaChartBuilder;
    asBarChart(): EmbeddedBarChartBuilder;
    asColumnChart(): EmbeddedColumnChartBuilder;
    asComboChart(): EmbeddedComboChartBuilder;
    asHistogramChart(): EmbeddedHistogramChartBuilder;
    asLineChart(): EmbeddedLineChartBuilder;
    asPieChart(): EmbeddedPieChartBuilder;
    asScatterChart(): EmbeddedScatterChartBuilder;
    asTableChart(): EmbeddedTableChartBuilder;
    build(): EmbeddedChart;
    getChartType(): Charts.ChartType;
    getContainer(): ContainerInfo;
    getRanges(): Range[];
    removeRange(range: Range): EmbeddedChartBuilder;
    reverseCategories(): EmbeddedLineChartBuilder;
    setBackgroundColor(cssValue: string): EmbeddedLineChartBuilder;
    setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
    setColors(cssValues: string[]): EmbeddedLineChartBuilder;
    setCurveStyle(style: Charts.CurveStyle): EmbeddedLineChartBuilder;
    setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
    setLegendPosition(position: Charts.Position): EmbeddedLineChartBuilder;
    setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
    setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
    setNumHeaders(headers: Integer): EmbeddedChartBuilder;
    setOption(option: string, value: any): EmbeddedChartBuilder;
    setPointStyle(style: Charts.PointStyle): EmbeddedLineChartBuilder;
    setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
    setRange(start: Number, end: Number): EmbeddedLineChartBuilder;
    setTitle(chartTitle: string): EmbeddedLineChartBuilder;
    setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
    setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
    setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
    setXAxisTitle(title: string): EmbeddedLineChartBuilder;
    setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
    setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
    setYAxisTitle(title: string): EmbeddedLineChartBuilder;
    setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
    useLogScale(): EmbeddedLineChartBuilder;
  }

  /**
   * Builder for pie charts. For more details, see the Gviz
   * documentation.
   */
  interface EmbeddedPieChartBuilder {
    addRange(range: Range): EmbeddedChartBuilder;
    asAreaChart(): EmbeddedAreaChartBuilder;
    asBarChart(): EmbeddedBarChartBuilder;
    asColumnChart(): EmbeddedColumnChartBuilder;
    asComboChart(): EmbeddedComboChartBuilder;
    asHistogramChart(): EmbeddedHistogramChartBuilder;
    asLineChart(): EmbeddedLineChartBuilder;
    asPieChart(): EmbeddedPieChartBuilder;
    asScatterChart(): EmbeddedScatterChartBuilder;
    asTableChart(): EmbeddedTableChartBuilder;
    build(): EmbeddedChart;
    getChartType(): Charts.ChartType;
    getContainer(): ContainerInfo;
    getRanges(): Range[];
    removeRange(range: Range): EmbeddedChartBuilder;
    reverseCategories(): EmbeddedPieChartBuilder;
    set3D(): EmbeddedPieChartBuilder;
    setBackgroundColor(cssValue: string): EmbeddedPieChartBuilder;
    setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
    setColors(cssValues: string[]): EmbeddedPieChartBuilder;
    setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
    setLegendPosition(position: Charts.Position): EmbeddedPieChartBuilder;
    setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedPieChartBuilder;
    setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
    setNumHeaders(headers: Integer): EmbeddedChartBuilder;
    setOption(option: string, value: any): EmbeddedChartBuilder;
    setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
    setTitle(chartTitle: string): EmbeddedPieChartBuilder;
    setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedPieChartBuilder;
    setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
  }

  /**
   * Builder for scatter charts. For more details, see the Gviz
   * documentation.
   */
  interface EmbeddedScatterChartBuilder {
    addRange(range: Range): EmbeddedChartBuilder;
    asAreaChart(): EmbeddedAreaChartBuilder;
    asBarChart(): EmbeddedBarChartBuilder;
    asColumnChart(): EmbeddedColumnChartBuilder;
    asComboChart(): EmbeddedComboChartBuilder;
    asHistogramChart(): EmbeddedHistogramChartBuilder;
    asLineChart(): EmbeddedLineChartBuilder;
    asPieChart(): EmbeddedPieChartBuilder;
    asScatterChart(): EmbeddedScatterChartBuilder;
    asTableChart(): EmbeddedTableChartBuilder;
    build(): EmbeddedChart;
    getChartType(): Charts.ChartType;
    getContainer(): ContainerInfo;
    getRanges(): Range[];
    removeRange(range: Range): EmbeddedChartBuilder;
    setBackgroundColor(cssValue: string): EmbeddedScatterChartBuilder;
    setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
    setColors(cssValues: string[]): EmbeddedScatterChartBuilder;
    setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
    setLegendPosition(position: Charts.Position): EmbeddedScatterChartBuilder;
    setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
    setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
    setNumHeaders(headers: Integer): EmbeddedChartBuilder;
    setOption(option: string, value: any): EmbeddedChartBuilder;
    setPointStyle(style: Charts.PointStyle): EmbeddedScatterChartBuilder;
    setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
    setTitle(chartTitle: string): EmbeddedScatterChartBuilder;
    setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
    setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
    setXAxisLogScale(): EmbeddedScatterChartBuilder;
    setXAxisRange(start: Number, end: Number): EmbeddedScatterChartBuilder;
    setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
    setXAxisTitle(title: string): EmbeddedScatterChartBuilder;
    setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
    setYAxisLogScale(): EmbeddedScatterChartBuilder;
    setYAxisRange(start: Number, end: Number): EmbeddedScatterChartBuilder;
    setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
    setYAxisTitle(title: string): EmbeddedScatterChartBuilder;
    setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
  }

  /**
   * Builder for table charts. For more details, see the Gviz documentation.
   */
  interface EmbeddedTableChartBuilder {
    addRange(range: Range): EmbeddedChartBuilder;
    asAreaChart(): EmbeddedAreaChartBuilder;
    asBarChart(): EmbeddedBarChartBuilder;
    asColumnChart(): EmbeddedColumnChartBuilder;
    asComboChart(): EmbeddedComboChartBuilder;
    asHistogramChart(): EmbeddedHistogramChartBuilder;
    asLineChart(): EmbeddedLineChartBuilder;
    asPieChart(): EmbeddedPieChartBuilder;
    asScatterChart(): EmbeddedScatterChartBuilder;
    asTableChart(): EmbeddedTableChartBuilder;
    build(): EmbeddedChart;
    enablePaging(enablePaging: boolean): EmbeddedTableChartBuilder;
    enablePaging(pageSize: Integer): EmbeddedTableChartBuilder;
    enablePaging(pageSize: Integer, startPage: Integer): EmbeddedTableChartBuilder;
    enableRtlTable(rtlEnabled: boolean): EmbeddedTableChartBuilder;
    enableSorting(enableSorting: boolean): EmbeddedTableChartBuilder;
    getChartType(): Charts.ChartType;
    getContainer(): ContainerInfo;
    getRanges(): Range[];
    removeRange(range: Range): EmbeddedChartBuilder;
    setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
    setFirstRowNumber(number: Integer): EmbeddedTableChartBuilder;
    setHiddenDimensionStrategy(strategy: Charts.ChartHiddenDimensionStrategy): EmbeddedChartBuilder;
    setInitialSortingAscending(column: Integer): EmbeddedTableChartBuilder;
    setInitialSortingDescending(column: Integer): EmbeddedTableChartBuilder;
    setMergeStrategy(mergeStrategy: Charts.ChartMergeStrategy): EmbeddedChartBuilder;
    setNumHeaders(headers: Integer): EmbeddedChartBuilder;
    setOption(option: string, value: any): EmbeddedChartBuilder;
    setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
    setTransposeRowsAndColumns(transpose: boolean): EmbeddedChartBuilder;
    showRowNumberColumn(showRowNumber: boolean): EmbeddedTableChartBuilder;
    useAlternatingRowStyle(alternate: boolean): EmbeddedTableChartBuilder;
  }

  /**
   * Access and modify existing filters. To create a new filter, use Range.createFilter().
   */
  interface Filter {
    getColumnFilterCriteria(columnPosition: Integer): FilterCriteria;
    getRange(): Range;
    remove(): void;
    removeColumnFilterCriteria(columnPosition: Integer): Filter;
    setColumnFilterCriteria(columnPosition: Integer, filterCriteria: FilterCriteria): Filter;
    sort(columnPosition: Integer, ascending: boolean): Filter;
  }

  /**
   * Access filter criteria. To create a new criteria, use SpreadsheetApp.newFilterCriteria() and FilterCriteriaBuilder.
   */
  interface FilterCriteria {
    copy(): FilterCriteriaBuilder;
    getCriteriaType(): BooleanCriteria;
    getCriteriaValues(): any[];
    getHiddenValues(): string[];
    getVisibleValues(): string[];
  }

  /**
   * Builder for FilterCriteria.
   */
  interface FilterCriteriaBuilder {
    build(): FilterCriteria;
    copy(): FilterCriteriaBuilder;
    getCriteriaType(): BooleanCriteria;
    getCriteriaValues(): any[];
    getHiddenValues(): string[];
    getVisibleValues(): string[];
    setHiddenValues(values: string[]): FilterCriteriaBuilder;
    setVisibleValues(values: string[]): FilterCriteriaBuilder;
    whenCellEmpty(): FilterCriteriaBuilder;
    whenCellNotEmpty(): FilterCriteriaBuilder;
    whenDateAfter(date: Date): FilterCriteriaBuilder;
    whenDateAfter(date: RelativeDate): FilterCriteriaBuilder;
    whenDateBefore(date: Date): FilterCriteriaBuilder;
    whenDateBefore(date: RelativeDate): FilterCriteriaBuilder;
    whenDateEqualTo(date: Date): FilterCriteriaBuilder;
    whenDateEqualTo(date: RelativeDate): FilterCriteriaBuilder;
    whenFormulaSatisfied(formula: string): FilterCriteriaBuilder;
    whenNumberBetween(start: Number, end: Number): FilterCriteriaBuilder;
    whenNumberEqualTo(number: Number): FilterCriteriaBuilder;
    whenNumberGreaterThan(number: Number): FilterCriteriaBuilder;
    whenNumberGreaterThanOrEqualTo(number: Number): FilterCriteriaBuilder;
    whenNumberLessThan(number: Number): FilterCriteriaBuilder;
    whenNumberLessThanOrEqualTo(number: Number): FilterCriteriaBuilder;
    whenNumberNotBetween(start: Number, end: Number): FilterCriteriaBuilder;
    whenNumberNotEqualTo(number: Number): FilterCriteriaBuilder;
    whenTextContains(text: string): FilterCriteriaBuilder;
    whenTextDoesNotContain(text: string): FilterCriteriaBuilder;
    whenTextEndsWith(text: string): FilterCriteriaBuilder;
    whenTextEqualTo(text: string): FilterCriteriaBuilder;
    whenTextStartsWith(text: string): FilterCriteriaBuilder;
    withCriteria(criteria: BooleanCriteria, args: any[]): FilterCriteriaBuilder;
  }

  /**
   * Access gradient (color) conditions in ConditionalFormatRuleApis.
   * Each conditional format rule may contain a single gradient condition. A gradient condition is
   * defined by three points along a number scale (min, mid, and max), each of which has a color, a
   * value, and a InterpolationType. The content of a cell is
   * compared to the values in the number scale and the color applied to the cell is interpolated
   * based on the cell content's proximity to the gradient condition min, mid, and max points.
   *
   *     // Logs all the information inside gradient conditional format rules on a sheet.
   *     var sheet = SpreadsheetApp.getActiveSheet();
   *     var rules = sheet.getConditionalFormatRules();
   *     for (int i = 0; i < rules.length; i++) {
   *       var gradient = rules[i].getGradientCondition();
   *       Logger.log("The conditional format gradient information for rule %d:\n
   *         MinColor %s, MinType %s, MinValue %s, \n
   *         MidColor %s, MidType %s, MidValue %s, \n
   *         MaxColor %s, MaxType %s, MaxValue %s \n", i,
   *         gradient.getMinColor(), gradient.getMinType(), gradient.getMinValue(),
   *         gradient.getMidColor(), gradient.getMidType(), gradient.getMidValue(),
   *         gradient.getMaxColor(), gradient.getMaxType(), gradient.getMaxValue());
   *     }
   */
  interface GradientCondition {
    getMaxColor(): string;
    getMaxType(): InterpolationType;
    getMaxValue(): string;
    getMidColor(): string;
    getMidType(): InterpolationType;
    getMidValue(): string;
    getMinColor(): string;
    getMinType(): InterpolationType;
    getMinValue(): string;
  }

  /**
   * Access and modify spreadsheet groups. Groups are an association between an interval of contiguous
   * rows or columns that can be expanded or collapsed as a unit to hide/show the rows or columns.
   * Each group has a control toggle on the row or column directly before or after the group
   * (depending on settings) that can expand or collapse the group as a whole.
   *
   * The depth of a group refers to the nested position of the group and how many larger
   * groups contain the group. The collapsed state of a group refers to whether the group
   * should remain collapsed or expanded after a parent group has been expanded. Additionally, at the
   * time that a group is collapsed or expanded, the rows or columns within the group are hidden or
   * set visible, though individual rows or columns can be hidden or set visible irrespective of the
   * collapsed state.
   */
  interface Group {
    collapse(): Group;
    expand(): Group;
    getControlIndex(): Integer;
    getDepth(): Integer;
    getRange(): Range;
    isCollapsed(): boolean;
    remove(): void;
  }

  /**
   * An enumeration representing the possible positions that a group control toggle can have.
   */
  enum GroupControlTogglePosition { BEFORE, AFTER }

  /**
   * An enumeration representing the interpolation options for calculating a value to be used in a
   * GradientCondition in a ConditionalFormatRule.
   */
  enum InterpolationType { NUMBER, PERCENT, PERCENTILE, MIN, MAX }

  /**
   * Create, access and modify named ranges in a spreadsheet. Named ranges are ranges that have
   * associated string aliases. They can be viewed and edited via the Sheets UI under the Data >
   * Named ranges... menu.
   */
  interface NamedRange {
    getName(): string;
    getRange(): Range;
    remove(): void;
    setName(name: string): NamedRange;
    setRange(range: Range): NamedRange;
  }

  /**
   *
   * Deprecated. For spreadsheets created in the newer version of Google Sheets, use the more powerful
   *     Protection class instead. Although this class is deprecated, it remains available
   *     for compatibility with the older version of Sheets.
   * Access and modify protected sheets in the older version of Google Sheets.
   */
  interface PageProtection {
    addUser(email: string): void;
    getUsers(): string[];
    isProtected(): boolean;
    removeUser(user: string): void;
    setProtected(protection: boolean): void;
  }

  /**
   * Access and modify pivot table filters.
   */
  interface PivotFilter {
    getFilterCriteria(): FilterCriteria;
    getPivotTable(): PivotTable;
    getSourceDataColumn(): Integer;
    remove(): void;
    setFilterCriteria(filterCriteria: FilterCriteria): PivotFilter;
  }

  /**
   * Access and modify pivot table breakout groups.
   */
  interface PivotGroup {
    addManualGroupingRule(groupName: string, groupMembers: any[]): PivotGroup;
    areLabelsRepeated(): boolean;
    clearGroupingRule(): PivotGroup;
    clearSort(): PivotGroup;
    getDimension(): Dimension;
    getIndex(): Integer;
    getPivotTable(): PivotTable;
    getSourceDataColumn(): Integer;
    hideRepeatedLabels(): PivotGroup;
    isSortAscending(): boolean;
    moveToIndex(index: Integer): PivotGroup;
    remove(): void;
    removeManualGroupingRule(groupName: string): PivotGroup;
    resetDisplayName(): PivotGroup;
    setDisplayName(name: string): PivotGroup;
    setHistogramGroupingRule(minValue: Integer, maxValue: Integer, intervalSize: Integer): PivotGroup;
    showRepeatedLabels(): PivotGroup;
    showTotals(showTotals: boolean): PivotGroup;
    sortAscending(): PivotGroup;
    sortBy(value: PivotValue, oppositeGroupValues: any[]): PivotGroup;
    sortDescending(): PivotGroup;
    totalsAreShown(): boolean;
  }

  /**
   * Access and modify pivot tables.
   */
  interface PivotTable {
    addCalculatedPivotValue(name: string, formula: string): PivotValue;
    addColumnGroup(sourceDataColumn: Integer): PivotGroup;
    addFilter(sourceDataColumn: Integer, filterCriteria: FilterCriteria): PivotFilter;
    addPivotValue(sourceDataColumn: Integer, summarizeFunction: PivotTableSummarizeFunction): PivotValue;
    addRowGroup(sourceDataColumn: Integer): PivotGroup;
    getAnchorCell(): Range;
    getColumnGroups(): PivotGroup[];
    getFilters(): PivotFilter[];
    getPivotValues(): PivotValue[];
    getRowGroups(): PivotGroup[];
    getValuesDisplayOrientation(): Dimension;
    remove(): void;
    setValuesDisplayOrientation(dimension: Dimension): PivotTable;
  }

  /**
   * An enumeration of functions that summarize pivot table data.
   */
  enum PivotTableSummarizeFunction { CUSTOM, SUM, COUNTA, COUNT, COUNTUNIQUE, AVERAGE, MAX, MIN, MEDIAN, PRODUCT, STDEV, STDEVP, VAR, VARP }

  /**
   * Access and modify value groups in pivot tables.
   */
  interface PivotValue {
    getDisplayType(): PivotValueDisplayType;
    getFormula(): string;
    getPivotTable(): PivotTable;
    getSummarizedBy(): PivotTableSummarizeFunction;
    setDisplayName(name: string): PivotValue;
    setFormula(formula: string): PivotValue;
    showAs(displayType: PivotValueDisplayType): PivotValue;
    summarizeBy(summarizeFunction: PivotTableSummarizeFunction): PivotValue;
  }

  /**
   * An enumeration of ways to display a pivot value as a function of another value.
   */
  enum PivotValueDisplayType { DEFAULT, PERCENT_OF_ROW_TOTAL, PERCENT_OF_COLUMN_TOTAL, PERCENT_OF_GRAND_TOTAL }

  /**
   * Access and modify protected ranges and sheets. A protected range can protect either a static
   * range of cells or a named range. A protected sheet may include unprotected regions.
   *
   * @example
   *     // Protect range A1:B10, then remove all other users from the list of editors.
   *     var ss = SpreadsheetApp.getActive();
   *     var range = ss.getRange('A1:B10');
   *     var protection = range.protect().setDescription('Sample protected range');
   *
   *     // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
   *     // permission comes from a group, the script throws an exception upon removing the group.
   *     var me = Session.getEffectiveUser();
   *     protection.addEditor(me);
   *     protection.removeEditors(protection.getEditors());
   *     if (protection.canDomainEdit()) {
   *       protection.setDomainEdit(false);
   *     }
   *
   *     // Remove all range protections in the spreadsheet that the user has permission to edit.
   *     var ss = SpreadsheetApp.getActive();
   *     var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
   *     for (var i = 0; i < protections.length; i++) {
   *       var protection = protections[i];
   *       if (protection.canEdit()) {
   *         protection.remove();
   *       }
   *     }
   *
   *     // Protect the active sheet, then remove all other users from the list of editors.
   *     var sheet = SpreadsheetApp.getActiveSheet();
   *     var protection = sheet.protect().setDescription('Sample protected sheet');
   *
   *     // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
   *     // permission comes from a group, the script throws an exception upon removing the group.
   *     var me = Session.getEffectiveUser();
   *     protection.addEditor(me);
   *     protection.removeEditors(protection.getEditors());
   *     if (protection.canDomainEdit()) {
   *       protection.setDomainEdit(false);
   *     }
   */
  interface Protection {
    /**
     * Adds the given user to the list of editors for the protected sheet or range.
     * 
     * This method does not automatically give the user permission to edit the spreadsheet itself; 
     * to do that in addition, call ´Spreadsheet.addEditor(emailAddress)´.
     * @param emailAddress The email address of the user to add.
     */
    addEditor(emailAddress: string): Protection;
    /**
     * Adds the given user to the list of editors for the protected sheet or range.
     * This method does not automatically give the user permission to edit the spreadsheet itself;
     * to do that in addition, call ´Spreadsheet.addEditor(user)´.
     * @param user A representation of the user to add.
     */
    addEditor(user: Base.User): Protection;
    /**
     * Adds the given array of users to the list of editors for the protected sheet or range.
     * This method does not automatically give the users permission to edit the spreadsheet itself;
     * to do that in addition, call ´Spreadsheet.addEditors(emailAddresses)´.
     * @param emailAddresses An array of email addresses of the users to add.
     */
    addEditors(emailAddresses: string[]): Protection;
    /**
     * Determines whether all users in the domain that owns the spreadsheet have permission to edit the protected range or sheet.
     * Throws an exception if the user does not have permission to edit the protected range or sheet.
     * @returns `true` if all users in the domain that owns the spreadsheet have permission to edit the protected range or sheet; `false` if not.
     */
    canDomainEdit(): boolean;
    /**
     * Determines whether the user has permission to edit the protected range or sheet.
     * The spreadsheet owner is always able to edit protected ranges and sheets.
     */
    canEdit(): boolean;
    /**
     * Gets the description of the protected range or sheet.
     * If no description is set, this method returns an empty string.
     */
    getDescription(): string;
    /**
     * Gets the list of editors for the protected range or sheet.
     * Throws an exception if the user does not have permission to edit the protected range or sheet.
     */
    getEditors(): Base.User[];
    /**
     * Gets the type of the protected area, either `RANGE` or `SHEET`.
     */
    getProtectionType(): ProtectionType;
    /**
     * Gets the range that is being protected.
     * If the protection applies to the sheet instead of a range, this method returns a range that spans the entire sheet.
     */
    getRange(): Range;
    /**
     * Gets the name of the protected range if it is associated with a named range.
     * Returns `null` if the protection is not associated with a named range.
     * 
     * Note that scripts must explicitly call `setRangeName(rangeName)` to associate a protected range with a named range;
     * calling `Range.protect()` to create a protection from a Range that happens to be a named range, without calling `setRangeName(rangeName)`,
     * is not sufficient to associate them. However, creating a protected range from a named range in the Google Sheets UI associates them automatically.
     */
    getRangeName(): string | null;
    /**
     * Gets an array of unprotected ranges within a protected sheet.
     * If the `Protection` object corresponds to a protected range instead of a protected sheet,
     * this method returns an empty array. To change the unprotected ranges, use `setUnprotectedRanges(ranges)`
     * to set a new array of ranges; to re-protect the entire sheet, set an empty array.
     */
    getUnprotectedRanges(): Range[];
    /**
     * Determines if the protected area is using "warning based" protection.
     * Warning-based protection means that every user can edit data in the area,
     * except editing prompts a warning asking the user to confirm the edit.
     * By default, protected ranges or sheets are not warning-based.
     * To change to the warning state, use `setWarningOnly(warningOnly)`.
     */
    isWarningOnly(): boolean;
    /** Unprotects the range or sheet. */
    remove(): void;
    /**
     * Removes the given user from the list of editors for the protected sheet or range.
     * Note that if the user is a member of a Google Group that has edit permission,
     * or if all users in the domain have edit permission, the user are still be able to edit the protected area.
     * Neither the owner of the spreadsheet nor the current user can be removed.
     * @param emailAddress The email address of the user to remove.
     */
    removeEditor(emailAddress: string): Protection;
    /**
     * Removes the given user from the list of editors for the protected sheet or range.
     * Note that if the user is a member of a Google Group that has edit permission,
     * or if all users in the domain have edit permission, the user are still be able to edit the protected area.
     * Neither the owner of the spreadsheet nor the current user can be removed.
     * @param user A representation of the user to remove.
     */
    removeEditor(user: Base.User): Protection;
    /**
     * Removes the given user from the list of editors for the protected sheet or range.
     * Note that if the user is a member of a Google Group that has edit permission,
     * or if all users in the domain have edit permission, the user are still be able to edit the protected area.
     * Neither the owner of the spreadsheet nor the current user can be removed.
     * @param emailAddresses An array of email addresses of the users to remove.
     */
    removeEditors(emailAddresses: string[]): Protection;
    /**
     * Sets the description of the protected range or sheet.
     * @param description The description of the protected range or sheet.
     */
    setDescription(description: string): Protection;
    /**
     * Sets whether all users in the domain that owns the spreadsheet have permission to edit the protected range or sheet.
     * Note that any users who have explicit edit permission are able to edit the protected area regardless of this setting.
     * Throws an exception if the spreadsheet does not belong to a G Suite domain (that is, if it is owned by a gmail.com account).
     * @param editable `true` if all users in the domain that owns the spreadsheet should have permission to edit the protected range or sheet; `false` if not.
     */
    setDomainEdit(editable: boolean): Protection;
    /**
     * Associates the protected range with an existing named range.
     * If the named range covers a different area from the current protected range,
     * this method moves the protection to cover the the named range instead.
     * The named range must be on the same sheet as the current protected range.
     * Note that scripts must explicitly call this method to associate a protected range with a named range;
     * calling `Range.protect()` to create a protection from a `Range` that happens to be a named range,
     * without calling `setRangeName(rangeName)`, is not sufficient to associate them.
     * However, creating a protected range from a named range in the Google Sheets UI associates them automatically.
     * @param namedRange The existing named range to associate with the protected range.
     */
    setNamedRange(namedRange: NamedRange): Protection;
    /**
     * Adjusts the range that is being protected.
     * If the given range covers a different area from the current protected range,
     * this method moves the protection to cover the new range instead.
     * @param range 
     */
    setRange(range: Range): Protection;
    /**
     * Associates the protected range with an existing named range.
     * If the named range covers a different area from the current protected range,
     * this method moves the protection to cover the the named range instead.
     * The named range must be on the same sheet as the current protected range.
     * Note that scripts must explicitly call this method to associate a protected range with a named range;
     * calling `Range.protect()` to create a protection from a `Range` that happens to be a named range,
     * without calling `setRangeName(rangeName)`, is not sufficient to associate them.
     * However, creating a protected range from a named range in the Google Sheets UI associates them automatically.
     * @param rangeName The name of the named range to be protected.
     */
    setRangeName(rangeName: string): Protection;
    /**
     * Unprotects the given array of ranges within a protected sheet.
     * Throws an exception if the `Protection` object corresponds to a protected range
     * instead of a protected sheet or if any of the ranges are not on the protected sheet.
     * To change the unprotected ranges, set a new array of ranges;
     * to re-protect the entire sheet, set an empty array.
     * @param ranges The array of ranges to leave unprotected within a protected sheet.
     */
    setUnprotectedRanges(ranges: Range[]): Protection;
    /**
     * Sets whether or not this protected range is using "warning based" protection.
     * Warning-based protection means that every user can edit data in the area,
     * except editing prompts a warning asking the user to confirm the edit.
     * By default, protected ranges or sheets are not warning-based.
     * To check warning state, use `isWarningOnly()`.
     * @param warningOnly 
     */
    setWarningOnly(warningOnly: boolean): Protection;
  }

  /**
   * An enumeration representing the parts of a spreadsheet that can be protected from edits.
   *
   *     // Remove all range protections in the spreadsheet that the user has permission to edit.
   *     var ss = SpreadsheetApp.getActive();
   *     var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
   *     for (var i = 0; i < protections.length; i++) {
   *       var protection = protections[i];
   *       if (protection.canEdit()) {
   *         protection.remove();
   *       }
   *     }
   *
   *     // Removes sheet protection from the active sheet, if the user has permission to edit it.
   *     var sheet = SpreadsheetApp.getActiveSheet();
   *     var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
   *     if (protection && protection.canEdit()) {
   *       protection.remove();
   *     }
   */
  enum ProtectionType { RANGE, SHEET }

  interface RangeClearOptions {
    /** Whether to clear only the comments. */
    commentsOnly: boolean;
    /** Whether to clear only the contents. */
    contentsOnly: boolean;
    /** Whether to clear only the format; note that clearing format also clears data validation rules. */
    formatOnly: boolean;
    /** Whether to clear only data validation rules. */
    validationsOnly: boolean;
    /** Whether to avoid clearing filtered rows. */
    skipFilteredRows: boolean;
  }

  interface CopyToOptions {
    /** designates that only the format should be copied */
    formatOnly: boolean;
    /** designates that only the content should be copied */
    contentsOnly: boolean;
  }

  /** CSS notation string, e.g. `#ffffff` and `white`; a `null` value resets the color. */
  type CssNotation = string | null;
  /** The font line style, either 'underline', 'line-through', or 'none'; a null value resets the font line style. */
  type FontLineStyle = 'underline' | 'line-through' | 'none' | null;
  /** The alignment, either 'left', 'center' or 'normal'; a null value resets the alignment. */
  type Alignments = 'left' | 'center' | 'normal' | null;

  /**
   * Access and modify spreadsheet ranges.
   * A range can be a single cell in a sheet or a group of adjacent cells in a sheet.
   */
  interface Range {
    activate(): Range;
    activateAsCurrentCell(): Range;
    applyColumnBanding(): Banding;
    applyColumnBanding(bandingTheme: BandingTheme): Banding;
    applyColumnBanding(bandingTheme: BandingTheme, showHeader: boolean, showFooter: boolean): Banding;
    applyRowBanding(): Banding;
    applyRowBanding(bandingTheme: BandingTheme): Banding;
    applyRowBanding(bandingTheme: BandingTheme, showHeader: boolean, showFooter: boolean): Banding;
    autoFill(destination: Range, series: AutoFillSeries): void;
    autoFillToNeighbor(series: AutoFillSeries): void;
    breakApart(): Range;
    canEdit(): boolean;
    clear(): Range;
    clear(options: RangeClearOptions): Range;
    clearContent(): Range;
    clearDataValidations(): Range;
    clearFormat(): Range;
    clearNote(): Range;
    collapseGroups(): Range;
    copyFormatToRange(gridId: Integer, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
    copyFormatToRange(sheet: Sheet, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
    copyTo(destination: Range): void;
    copyTo(destination: Range, copyPasteType: CopyPasteType, transposed: boolean): void;
    copyTo(destination: Range, options: CopyToOptions): void;
    copyValuesToRange(gridId: Integer, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
    copyValuesToRange(sheet: Sheet, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
    createFilter(): Filter;
    createPivotTable(sourceData: Range): PivotTable;
    deleteCells(shiftDimension: Dimension): void;
    expandGroups(): Range;
    getA1Notation(): string;
    getBackground(): string;
    getBackgrounds(): string[][];
    getBandings(): Banding[];
    getCell(row: Integer, column: Integer): Range;
    getColumn(): Integer;
    getDataSourceUrl(): string;
    getDataTable(): Charts.DataTable;
    getDataTable(firstRowIsHeader: boolean): Charts.DataTable;
    getDataValidation(): DataValidation;
    getDataValidations(): DataValidation[][];
    getDisplayValue(): string;
    getDisplayValues(): string[][];
    getFilter(): Filter;
    getFontColor(): string;
    getFontColors(): string[][];
    getFontFamilies(): string[][];
    getFontFamily(): string;
    getFontLine(): string;
    getFontLines(): string[][];
    getFontSize(): Integer;
    getFontSizes(): Integer[][];
    getFontStyle(): string;
    getFontStyles(): string[][];
    getFontWeight(): string;
    getFontWeights(): string[][];
    getFormula(): string;
    getFormulaR1C1(): string;
    getFormulas(): string[][];
    getFormulasR1C1(): string[][];
    getGridId(): Integer;
    getHeight(): Integer;
    getHorizontalAlignment(): Alignments;
    getHorizontalAlignments(): Alignments[][];
    getLastColumn(): Integer;
    getLastRow(): Integer;
    getMergedRanges(): Range[];
    getNextDataCell(direction: Direction): Range;
    getNote(): string;
    getNotes(): string[][];
    getNumColumns(): Integer;
    getNumRows(): Integer;
    getNumberFormat(): string;
    getNumberFormats(): string[][];
    getRow(): Integer;
    getRowIndex(): Integer;
    getSheet(): Sheet;
    getTextDirection(): TextDirection;
    getTextDirections(): TextDirection[][];
    getTextRotation(): TextRotation;
    getTextRotations(): TextRotation[][];
    getValue(): Column;
    getValues(): Row[];
    getVerticalAlignment(): Alignments;
    getVerticalAlignments(): Alignments[][];
    getWidth(): Integer;
    getWrap(): boolean;
    getWrapStrategies(): WrapStrategy[][];
    getWrapStrategy(): WrapStrategy;
    getWraps(): Boolean[][];
    insertCells(shiftDimension: Dimension): Range;
    isBlank(): boolean;
    isEndColumnBounded(): boolean;
    isEndRowBounded(): boolean;
    isPartOfMerge(): boolean;
    isStartColumnBounded(): boolean;
    isStartRowBounded(): boolean;
    merge(): Range;
    mergeAcross(): Range;
    mergeVertically(): Range;
    moveTo(target: Range): void;
    offset(rowOffset: Integer, columnOffset: Integer): Range;
    offset(rowOffset: Integer, columnOffset: Integer, numRows: Integer): Range;
    offset(rowOffset: Integer, columnOffset: Integer, numRows: Integer, numColumns: Integer): Range;
    protect(): Protection;
    randomize(): Range;
    setBackground(color: string): Range;
    setBackgroundRGB(red: Integer, green: Integer, blue: Integer): Range;
    setBackgrounds(color: string[][]): Range;
    setBorder(top: boolean, left: boolean, bottom: boolean, right: boolean, vertical: boolean, horizontal: boolean): Range;
    setBorder(top: boolean, left: boolean, bottom: boolean, right: boolean, vertical: boolean, horizontal: boolean, color: string, style: BorderStyle): Range;
    setDataValidation(rule: DataValidation): Range;
    setDataValidations(rules: DataValidation[][]): Range;
    setFontColor(color: CssNotation): Range;
    setFontColors(colors: CssNotation[][]): Range;
    /**
     * Sets the font family, such as "Arial" or "Helvetica".
     * @param fontFamily The font family to set; a null value resets the font family.
     */
    setFontFamily(fontFamily: CssNotation): Range;
    /**
     * Sets a rectangular grid of font families (must match dimensions of this range).
     * Examples of font families are "Arial" or "Helvetica".
     * @param fontFamilies A two-dimensional array of font families; null values reset the font family.
     */
    setFontFamilies(fontFamilies: CssNotation[][]): Range;
    /**
     * Sets the font line style of the given range ('underline', 'line-through', or 'none').
     * @param fontLine The font line style, either 'underline', 'line-through', or 'none'; a null value resets the font line style.
     */
    setFontLine(fontLine: FontLineStyle): Range;
    /**
     * Sets a rectangular grid of line styles (must match dimensions of this range).
     * @param fontLines A two-dimensional array of font line styles ('underline', 'line-through', or 'none'); null values reset the font line style.
     */
    setFontLines(fontLines: FontLineStyle[][]): Range;
    setFontSize(size: Integer): Range;
    setFontSizes(sizes: Integer[][]): Range;
    setFontStyle(fontStyle: string): Range;
    setFontStyles(fontStyles: any[][]): Range;
    setFontWeight(fontWeight: string): Range;
    setFontWeights(fontWeights: any[][]): Range;
    setFormula(formula: string): Range;
    setFormulaR1C1(formula: string): Range;
    setFormulas(formulas: string[][]): Range;
    /**
     * Sets a rectangular grid of formulas (must match dimensions of this range).
     * The given formulas must be in R1C1 notation.
     */
    setFormulasR1C1(formulas: string[][]): Range;
    setHorizontalAlignment(alignment: Alignments): Range;
    setHorizontalAlignments(alignments: Alignments[][]): Range;
    setNote(note: string): Range;
    setNotes(notes: any[][]): Range;
    setNumberFormat(numberFormat: string): Range;
    setNumberFormats(numberFormats: any[][]): Range;
    setShowHyperlink(showHyperlink: boolean): Range;
    setTextDirection(direction: TextDirection): Range;
    setTextDirections(directions: TextDirection[][]): Range;
    setTextRotation(degrees: Integer): Range;
    setTextRotation(rotation: TextRotation): Range;
    setTextRotations(rotations: TextRotation[][]): Range;
    setValue(value: any): Range;
    setValues(values: any[][]): Range;
    setVerticalAlignment(alignment: Alignments): Range;
    setVerticalAlignments(alignments: Alignments[][]): Range;
    setVerticalText(isVertical: boolean): Range;
    setWrap(isWrapEnabled: boolean): Range;
    setWrapStrategies(strategies: WrapStrategy[][]): Range;
    setWrapStrategy(strategy: WrapStrategy): Range;
    setWraps(isWrapEnabled: any[][]): Range;
    shiftColumnGroupDepth(delta: Integer): Range;
    shiftRowGroupDepth(delta: Integer): Range;
    sort(sortSpecObj: any): Range;
    splitTextToColumns(): void;
    splitTextToColumns(delimiter: string): void;
    splitTextToColumns(delimiter: TextToColumnsDelimiter): void;
  }

  /**
   * A collection of one or more Range instances in the same sheet. You can use this class
   * to apply operations on collections of non-adjacent ranges or cells.
   */
  interface RangeList {
    activate(): RangeList;
    breakApart(): RangeList;
    clear(): RangeList;
    clear(options: RangeClearOptions): RangeList;
    clearContent(): RangeList;
    clearDataValidations(): RangeList;
    clearFormat(): RangeList;
    clearNote(): RangeList;
    getRanges(): Range[];
    setBackground(color: string): RangeList;
    setBackgroundRGB(red: Integer, green: Integer, blue: Integer): RangeList;
    setBorder(top: boolean, left: boolean, bottom: boolean, right: boolean, vertical: boolean, horizontal: boolean): RangeList;
    setBorder(top: boolean, left: boolean, bottom: boolean, right: boolean, vertical: boolean, horizontal: boolean, color: string, style: BorderStyle): RangeList;
    setFontColor(color: string): RangeList;
    setFontFamily(fontFamily: string): RangeList;
    setFontLine(fontLine: string): RangeList;
    setFontSize(size: Integer): RangeList;
    setFontStyle(fontStyle: string): RangeList;
    setFontWeight(fontWeight: string): RangeList;
    setFormula(formula: string): RangeList;
    setFormulaR1C1(formula: string): RangeList;
    setHorizontalAlignment(alignment: Alignments): RangeList;
    setNote(note: string): RangeList;
    setNumberFormat(numberFormat: string): RangeList;
    setShowHyperlink(showHyperlink: boolean): RangeList;
    setTextDirection(direction: TextDirection): RangeList;
    setTextRotation(degrees: Integer): RangeList;
    setValue(value: any): RangeList;
    setVerticalAlignment(alignment: Alignments): RangeList;
    setVerticalText(isVertical: boolean): RangeList;
    setWrap(isWrapEnabled: boolean): RangeList;
    setWrapStrategy(strategy: WrapStrategy): RangeList;
  }

  /**
   * An enumeration representing the relative date options for calculating a value to be used in
   * date-based BooleanCriteria.
   */
  enum RelativeDate { TODAY, TOMORROW, YESTERDAY, PAST_WEEK, PAST_MONTH, PAST_YEAR }

  /**
   * Access the current active selection in the active sheet. A selection is the set of cells the user
   * has highlighted in the sheet, which can be non-adjacent ranges. One cell in the selection is the
   * current cell, where the user's current focus is. The current cell is highlighted with a
   * darker border in the Google Sheets UI.
   *
   *     var activeSheet = SpreadsheetApp.getActiveSheet();
   *     var rangeList = activeSheet.getRangeList(['A1:B4', 'D1:E4']);
   *     rangeList.activate();
   *
   *     var selection = activeSheet.getSelection();
   *     // Current Cell: D1
   *     Logger.log('Current Cell: ' + selection.getCurrentCell().getA1Notation());
   *     // Active Range: D1:E4
   *     Logger.log('Active Range: ' + selection.getActiveRange().getA1Notation());
   *     // Active Ranges: A1:B4, D1:E4
   *     var ranges =  selection.getActiveRangeList().getRanges();
   *     for (var i = 0; i < ranges.length; i++) {
   *       Logger.log('Active Ranges: ' + ranges[i].getA1Notation());
   *     }
   *     Logger.log('Active Sheet: ' + selection.getActiveSheet().getName());
   */
  interface Selection {
    getActiveRange(): Range;
    getActiveRangeList(): RangeList;
    getActiveSheet(): Sheet;
    getCurrentCell(): Range;
    getNextDataRange(direction: Direction): Range;
  }

  /**
   * Behavior common to all images in a spreadsheet.
   */
  interface Image {
    /** Returns the actual height of this image in pixels. */
    getHeight(): Integer;
    /** Returns the name of the function assigned to this image. */
    getScript(): string;
    /** Returns the sheet this image appears on */
    getSheet(): Sheet;
    /**
     * Returns a Google-hosted URL to the image.
     * This is not the same URL used to originally
     * specify the image and is only guaranteed to
     * be valid as long as the image is not deleted
     * from the spreadsheet.
     */
    getUrl(): string;
    /** Returns the actual width of this image in pixels. */
    getWidth(): Integer;
    /**
     * Deletes this image from the spreadsheet.
     * Any further operation on the image results in a script error.
     */
    remove(): void;
    /**
     * Sets the actual height of this image in pixels.
     * @param height The desired height in pixels.
     */
    setHeight(height: Integer): Image;
    /**
     * Sets the actual width of this image in pixels.
     * @param width The desired width in pixels.
     */
    setWidth(width: Integer): Image;
  }

  /**
   * Represents an image over the grid in a spreadsheet.
   */
  interface OverGridImage extends Image {
    /**
     * Assigns the function with the specified function name to this image.
     * @param functionName The name of the function being specified.
     */
    assignScript(functionName: string): OverGridImage;
    /** Returns the alt-text description for this image. */
    getAltTextDescription(): string;
    /** Returns the alt-text title for this image. */
    getAltTextTitle(): string;
    /** Returns the cell where an image is anchored. */
    getAnchorCell(): Range;
    /** Returns the horizontal pixel offset from the anchor cell. */
    getAnchorCellXOffset(): Integer;
    /** Returns the vertical pixel offset from the anchor cell. */
    getAnchorCellYOffset(): Integer;
    /** Returns the inherent height of this image in pixels. */
    getInherentHeight(): Integer;
    /** Returns the inherent height of this image in pixels. */
    getInherentWidth(): Integer;
    /**
     * Replaces this image with the one specified by the provided BlobSource.
     * @param blob The new image as a Blob.
     */
    replace(blob: Base.BlobSource): OverGridImage;
    /**
     * Replaces this image with the one from the specified URL.
     * @param url The URL of the new image.
     */
    replace(url: string): OverGridImage;
    /** Resets this image to its inherent dimensions. */
    resetSize(): OverGridImage;
    /**
     * Sets the alt-text description for this image.
     * @param description The new alt-text description for the image.
     */
    setAltTextDescription(description: string): OverGridImage;
    /**
     * Sets the alt-text title for this image.
     * @param title The new alt-text title for the image.
     */
    setAltTextTitle(title: string): OverGridImage;
    /**
     * Sets the cell where an image is anchored.
     * @param cell The new anchor cell.
     */
    setAnchorCell(cell: Range): OverGridImage;
    /**
     * Sets the horizontal pixel offset from the anchor cell.
     * @param offset The new horizonal pixel offset.
     */
    setAnchorCellXOffset(offset: Integer): OverGridImage
    /**
     * Sets the vertical pixel offset from the anchor cell.
     * @param offset The new vertical pixel offset.
     */
    setAnchorCellYOffset(offset: Integer): OverGridImage;
  }

  interface ClearOptions {
    /** Whether to clear the content. */
    contentsOnly: boolean;
    /** Whether to clear the format. */
    formatOnly: boolean;
  }
  /**
   * Access and modify spreadsheet sheets. Common operations are renaming a sheet and accessing range
   * anys from the sheet.
   */
  interface Sheet {
    /**
     * Activates this sheet.
     * Does not alter the sheet itself, only the parent's notion of the active sheet.
     */
    activate(): Sheet;
    /**
     * Appends a row to the spreadsheet.
     * This operation is atomic;
     * it prevents issues where a user asks for the last row,
     * and then writes to that row, and an intervening mutation
     * occurs between getting the last row and writing to it.
     * @param rowContents 	An array of values to insert after the last row in the sheet.
     */
    appendRow(rowContents: Row | Row[]): Sheet;
    /**
     * Sets the width of the given column to fit its contents.
     * @param columnPosition The position of the given column to resize.
     */
    autoResizeColumn(columnPosition: Integer): Sheet;
    /**
     * Sets the width of all columns starting at the given column position to fit their contents.
     * @param startColumn The starting column to auto-resize.
     * @param numColumns The number of columns to auto-resize.
     */
    autoResizeColumns(startColumn: Integer, numColumns: Integer): Sheet;
    /**
     * Sets the height of all rows starting at the given row position to fit their contents.
     * @param startRow The starting row to auto-resize.
     * @param numRows 	The number of rows to auto-resize.
     */
    autoResizeRows(startRow: Integer, numRows: Integer): Sheet;
    /**
     * Clears the sheet of content and formatting information.
     */
    clear(): Sheet;
    /**
     * Clears the sheet of contents and/or format, as specified with the given advanced options.
     * @param options A JavaScript map containing advanced options.
     */
    clear(options: ClearOptions): Sheet;
    /**
     * Removes all conditional format rules from the sheet.
     * Equivalent to calling `setConditionalFormatRules(rules)` with an empty array as input.
     */
    clearConditionalFormatRules(): void;
    /**
     * Clears the sheet of contents, while preserving formatting information.
     */
    clearContents(): Sheet;
    /**
     * Clears the sheet of formatting, while preserving contents.
     * Formatting refers to how data is formatted as allowed by
     * choices under the "Format" menu (ex: bold, italics,
     * conditional formatting) and not width or height of cells.
     */
    clearFormats(): Sheet;
    /**
     * Clears the sheet of all notes.
     */
    clearNotes(): Sheet;
    /**
     * Collapses all column groups on the sheet.
     */
    collapseAllColumnGroups(): Sheet;
    /**
     * Collapses all row groups on the sheet.
     */
    collapseAllRowGroups(): Sheet;
    /**
     * Copies the sheet to a given spreadsheet, which can be the same spreadsheet as the source. The copied sheet is named "Copy of [original name]".
     * @param spreadsheet The spreadsheet to copy this sheet to, which can be the same spreadsheet as the source.
     */
    copyTo(spreadsheet: Spreadsheet): Sheet;
    /**
     * Deletes the column at the given column position.
     * @param columnPosition The position of the column, starting at 1 for the first column.
     */
    deleteColumn(columnPosition: Integer): Sheet;
    /**
     * Deletes a number of columns starting at the given column position.
     * @param columnPosition The position of the first column to delete.
     * @param howMany The number of columns to delete.
     */
    deleteColumns(columnPosition: Integer, howMany: Integer): void;
    deleteRow(rowPosition: Integer): Sheet;
    deleteRows(rowPosition: Integer, howMany: Integer): void;
    expandAllColumnGroups(): Sheet;
    expandAllRowGroups(): Sheet;
    expandColumnGroupsUpToDepth(groupDepth: Integer): Sheet;
    expandRowGroupsUpToDepth(groupDepth: Integer): Sheet;
    getActiveCell(): Range;
    getActiveRange(): Range;
    getActiveRangeList(): RangeList;
    getBandings(): Banding[];
    getCharts(): EmbeddedChart[];
    getColumnGroup(columnIndex: Integer, groupDepth: Integer): Group;
    getColumnGroupControlPosition(): GroupControlTogglePosition;
    getColumnGroupDepth(columnIndex: Integer): Integer;
    getColumnWidth(columnPosition: Integer): Integer;
    getConditionalFormatRules(): ConditionalFormatRule[];
    getCurrentCell(): Range;
    getDataRange(): Range;
    getFilter(): Filter;
    getFormUrl(): string;
    getFrozenColumns(): Integer;
    getFrozenRows(): Integer;
    /** Returns all over-the-grid images on the sheet. */
    getImages(): OverGridImage[];
    /** Gets the position of the sheet in its parent spreadsheet. Starts at 1. */
    getIndex(): Integer;
    /** Returns the position of the last column that has content. */
    getLastColumn(): Integer;
    /** Returns the position of the last row that has content. */
    getLastRow(): Integer;
    /** Returns the current number of columns in the sheet, regardless of content. */
    getMaxColumns(): Integer;
    /** Returns the current number of rows in the sheet, regardless of content. */
    getMaxRows(): Integer;
    /** Returns the name of the sheet. */
    getName(): string;
    /** Gets all the named ranges in this sheet. */
    getNamedRanges(): NamedRange[];
    /** Returns the Spreadsheet that contains this sheet. */
    getParent(): Spreadsheet;
    /** Returns all the pivot tables on this sheet. */
    getPivotTables(): PivotTable[];
    /**
     * Gets an array of objects representing all protected ranges in the sheet,
     * or a single-element array representing the protection on the sheet itself.
     * @param type The type of protected area, either SpreadsheetApp.ProtectionType.RANGE or SpreadsheetApp.ProtectionType.SHEET.
     * @returns an array of objects representing all protected ranges in the sheet, or a single-element array representing the protection on the sheet itself
     */
    getProtections(type: ProtectionType): Protection[];
    /**
     * Returns the range with the top left cell at the given coordinates.
     * @param row The row of the cell to return.
     * @param column The column of the cell to return.
     */
    getRange(row: Integer, column: Integer): Range;
    /**
     * Returns the range with the top left cell at the given coordinates, and with the given number of rows.
     * @param row The starting row of the range.
     * @param column The column of the range.
     * @param numRows The number of rows to return.
     */
    getRange(row: Integer, column: Integer, numRows: Integer): Range;
    /**
     * Returns the range with the top left cell at the given coordinates with the given number of rows and columns.
     * @param row The starting row of the range.
     * @param column The starting column of the range.
     * @param numRows The number of rows to return.
     * @param numColumns The number of columns to return.
     */
    getRange(row: Integer, column: Integer, numRows: Integer, numColumns: Integer): Range;
    /**
     * Returns the range as specified in A1 notation or R1C1 notation.
     * @param a1Notation The range to return, as specified in A1 notation or R1C1 notation.
     */
    getRange(a1Notation: string): Range;
    /**
     * Returns the RangeList collection representing the ranges in the same sheet specified by a non-empty list of A1 notations or R1C1 notations.
     * @param a1Notations The list of ranges to return, as specified in A1 notation or R1C1 notation.
     */
    getRangeList(a1Notations: string[]): RangeList;
    /**
     * Returns the row group at the given index and group depth.
     * @param rowIndex The row index of the group control toggle or an index within the group.
     * @param groupDepth The depth of the group.
     */
    getRowGroup(rowIndex: Integer, groupDepth: Integer): Group;
    /** Returns the `GroupControlTogglePosition` for all row groups on the sheet. */
    getRowGroupControlPosition(): GroupControlTogglePosition;
    /**
     * Returns the group depth of the row at the given index.
     * The group depth indicates how many groups overlap with the row.
     * This can range between zero and eight.
     * @param rowIndex The index of the row.
     */
    getRowGroupDepth(rowIndex: Integer): Integer;
    /**
     * Gets the height in pixels of the given row.
     * @param rowPosition The position of the row to examine.
     */
    getRowHeight(rowPosition: Integer): Integer;
    /** Returns the current Selection in the spreadsheet. */
    getSelection(): Selection;
    /**
     * Returns the ID of the sheet represented by this object.
     * This is an ID for the sheet that is unique to the spreadsheet.
     * 
     * The ID is a monotonically increasing integer assigned at
     * sheet creation time that is independent of sheet position.
     * 
     * This is useful in conjunction with methods such as
     * `Range.copyFormatToRange(gridId, column, columnEnd, row, rowEnd)`
     * that take a `gridId` parameter rather than a `Sheet` instance.
     */
    getSheetId(): Integer;
    /** Returns the sheet name. */
    getSheetName(): string;
    /**
     * Returns the rectangular grid of values for this range starting at the given coordinates.
     * A -1 value given as the row or column position is equivalent to getting
     * the very last row or column that has data in the sheet.
     * @param startRow The position of the starting row.
     * @param startColumn The position of the starting column.
     * @param numRows The number of rows to return values for.
     * @param numColumns The number of columns to return values for.
     * @returns A two-dimensional array of values
     */
    getSheetValues(startRow: Integer, startColumn: Integer, numRows: Integer, numColumns: Integer): Row[];
    /**
     * Gets the sheet tab color, or null if the sheet tab has no color.
     * @returns color code in CSS notation (such as '#ffffff')
     */
    getTabColor(): string;
    /**
     * Returns `true` if the sheet's gridlines are hidden; otherwise returns `false`.
     * Gridlines are visible by default.
     * @returns `true` if gridlines are hidden; `false` otherwise.
     */
    hasHiddenGridlines(): boolean;
    /**
     * Hides the columns in the given range.
     * @param column The column range to hide.
     */
    hideColumn(column: Range): void;
    /**
     * Hides the column at the given index.
     * @param columnIndex the index of the column to hide
     */
    hideColumns(columnIndex: Integer): void;
    /**
     * Hides one or more consecutive columns starting at the given index.
     * @param columnIndex Hides one or more consecutive columns starting at the given index.
     * @param numColumns The number of columns to hide.
     */
    hideColumns(columnIndex: Integer, numColumns: Integer): void;
    /**
     * Hides the rows in the given range.
     * @param row The row range to hide.
     */
    hideRow(row: Range): void;
    /**
     * Hides the row at the given index.
     * @param rowIndex The index of the row to hide.
     */
    hideRows(rowIndex: Integer): void;
    /**
     * Hides one or more consecutive rows starting at the given index.
     * @param rowIndex The starting index of the rows to hide.
     * @param numRows The number of rows to hide.
     */
    hideRows(rowIndex: Integer, numRows: Integer): void;
    /**
     * Hides this sheet.
     * Has no effect if the sheet is already hidden.
     * If this method is called on the only visible sheet, it throws an exception.
     */
    hideSheet(): Sheet;
    /**
     * Adds a new chart to this sheet.
     * @param chart the chart to insert
     */
    insertChart(chart: EmbeddedChart): void;
    /** Inserts a column after the given column position. */
    insertColumnAfter(afterPosition: Integer): Sheet;
    /** Inserts a column before the given column position. */
    insertColumnBefore(beforePosition: Integer): Sheet;
    /**
     * Inserts a blank column in a sheet at the specified location.
     * @param columnIndex The index indicating where to insert a column.
     */
    insertColumns(columnIndex: Integer): void;
    /**
     * Inserts one or more consecutive blank columns in a sheet starting at the specified location.
     * @param columnIndex The index indicating where to insert a column.
     * @param numColumns The number of columns to insert.
     */
    insertColumns(columnIndex: Integer, numColumns: Integer): void;
    /**
     * Inserts a number of columns after the given column position.
     * @param afterPosition The column after which the new column should be added.
     * @param howMany The number of columns to insert.
     */
    insertColumnsAfter(afterPosition: Integer, howMany: Integer): Sheet;
    /**
     * Inserts a number of columns before the given column position.
     * @param beforePosition The column before which the new column should be added.
     * @param howMany The number of columns to insert.
     */
    insertColumnsBefore(beforePosition: Integer, howMany: Integer): Sheet;
    /**
     * Inserts a `BlobSource` as an image in the document at a given row and column.
     * The image size is retrieved from the blob contents.
     * @param blobSource The blob containing the image contents, MIME type, and (optionally) name.
     * @param column The column position.
     * @param row The row position.
     */
    insertImage(blobSource: Base.BlobSource, column: Integer, row: Integer): OverGridImage;
    /**
     * Inserts a `BlobSource` as an image in the document at a given row and column, with a pixel offset.
     * The image size is retrieved from the blob contents.
     * @param blobSource The blob containing the image contents, MIME type, and (optionally) name.
     * @param column The column position.
     * @param row The row position.
     * @param offsetX The horizontal offset from cell corner in pixels.
     * @param offsetY The vertical offset from cell corner in pixels.
     */
    insertImage(blobSource: Base.BlobSource, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): OverGridImage;
    /**
     * Inserts an image in the document at a given row and column.
     * @param url The URL of the image.
     * @param column The column position.
     * @param row The row position.
     * @param offsetX The horizontal offset from cell corner in pixels.
     * @param offsetY The vertical offset from cell corner in pixels.
     */
    insertImage(url: string, column: Integer, row: Integer): OverGridImage;
    /**
     * Inserts an image in the document at a given row and column, with a pixel offset.
     * @param url The URL of the image.
     * @param column The column position.
     * @param row The row position.
     * @param offsetX The horizontal offset from cell corner in pixels.
     * @param offsetY The vertical offset from cell corner in pixels.
     */
    insertImage(url: string, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): OverGridImage;
    /**
     * Inserts a row after the given row position.
     * @param afterPosition The row after which the new row should be added.
     */
    insertRowAfter(afterPosition: Integer): Sheet;
    /**
     * Inserts a row before the given row position.
     * @param beforePosition The row before which the new row should be added.
     */
    insertRowBefore(beforePosition: Integer): Sheet;
    /**
     * Inserts a blank row in a sheet at the specified location.
     * @param rowIndex The index indicating where to insert a row.
     */
    insertRows(rowIndex: Integer): void;
    /**
     * Inserts one or more consecutive blank rows in a sheet starting at the specified location.
     * @param rowIndex The index indicating where to insert a row.
     * @param numRows The number of rows to insert.
     */
    insertRows(rowIndex: Integer, numRows: Integer): void;
    /**
     * Inserts a number of rows after the given row position.
     * @param afterPosition The row after which the new rows should be added.
     * @param howMany The number of rows to insert.
     */
    insertRowsAfter(afterPosition: Integer, howMany: Integer): Sheet;
    /**
     * Inserts a number of rows before the given row position.
     * @param beforePosition The row before which the new rows should be added.
     * @param howMany The number of rows to insert.
     */
    insertRowsBefore(beforePosition: Integer, howMany: Integer): Sheet;
    /**
     * Returns whether the given column is hidden by the user.
     * @param columnPosition The position of the column to examine.
     */
    isColumnHiddenByUser(columnPosition: Integer): boolean;
    /**
     * Returns true if this sheet layout is right-to-left.
     * Returns false if the sheet uses the default left-to-right layout.
     */
    isRightToLeft(): boolean;
    /**
     * Returns whether the given row is hidden by a filter (not a filter view).
     * @param rowPosition The position of the row to examine.
     */
    isRowHiddenByFilter(rowPosition: Integer): boolean;
    /**
     * Returns whether the given row is hidden by the user.
     * @param rowPosition The position of the row to examine.
     */
    isRowHiddenByUser(rowPosition: Integer): boolean;
    /** Returns true if the sheet is currently hidden. */
    isSheetHidden(): boolean;
    /**
     * Moves the columns selected by the given range to the position indicated by the `destinationIndex`.
     * The `columnSpec` itself does not have to exactly represent an entire column or group of columns
     * to move—it selects all columns that the range spans.
     * @param columnSpec A range spanning the columns that should be moved.
     * @param destinationIndex The index that the columns should be moved to.
     * Note that this index is based on the coordinates before the columns are moved.
     * Existing data is shifted right to make room for the moved columns while
     * the source columns are removed from the grid. Therefore, the data may
     * end up at a different index than originally specified.
     */
    moveColumns(columnSpec: Range, destinationIndex: Integer): void;
    /**
     * Moves the rows selected by the given range to the position indicated by the `destinationIndex`.
     * The `rowSpec` itself does not have to exactly represent an entire row or group of rows to
     * move—it selects all rows that the range spans.
     * @param rowSpec A range spanning the rows that should be moved.
     * @param destinationIndex The index that the rows should be moved to.
     * Note that this index is based on the coordinates before the rows are moved.
     * Existing data is shifted right to make room for the moved rows while
     * the source rows are removed from the grid. Therefore, the data may
     * end up at a different index than originally specified.
     */
    moveRows(rowSpec: Range, destinationIndex: Integer): void;
    /**
     * Returns a builder to create a new chart for this sheet.
     */
    newChart(): EmbeddedChartBuilder;
    /**
     * Creates an object that can protect the sheet from being edited except by users who have permission.
     * Until the script actually changes the list of editors for the sheet
     * (by calling
     *  `Protection.removeEditor(emailAddress)`,
     *  `Protection.removeEditor(user)`,
     *  `Protection.removeEditors(emailAddresses)`,
     *  `Protection.addEditor(emailAddress)`,
     *  `Protection.addEditor(user)`,
     *  `Protection.addEditors(emailAddresses)`,  
     *  or setting a new value for   
     *  `Protection.setDomainEdit(editable)`),   
     * the permissions mirror those of the spreadsheet itself,
     * which effectively means that the sheet remains unprotected.
     * If the sheet is already protected, this method returns an object
     * representing its existing protection settings.
     * A protected sheet may include unprotected regions.
     */
    protect(): Protection;
    /**
     * Removes a chart from the parent sheet.
     * @param chart the chart to remove
     */
    removeChart(chart: EmbeddedChart): void;
    /**
     * Sets the specified range as the `active range` in the active sheet, with the top left cell in the range as the `current cell`.
     * @param range The range to set as the active range.
     */
    setActiveRange(range: Range): Range;
    setActiveRangeList(rangeList: RangeList): RangeList;
    setActiveSelection(range: Range): Range;
    setActiveSelection(a1Notation: string): Range;
    setColumnGroupControlPosition(position: GroupControlTogglePosition): Sheet;
    setColumnWidth(columnPosition: Integer, width: Integer): Sheet;
    setColumnWidths(startColumn: Integer, numColumns: Integer, width: Integer): Sheet;
    setConditionalFormatRules(rules: ConditionalFormatRule[]): void;
    setCurrentCell(cell: Range): Range;
    setFrozenColumns(columns: Integer): void;
    setFrozenRows(rows: Integer): void;
    setHiddenGridlines(hideGridlines: boolean): Sheet;
    setName(name: string): Sheet;
    setRightToLeft(rightToLeft: boolean): Sheet;
    setRowGroupControlPosition(position: GroupControlTogglePosition): Sheet;
    setRowHeight(rowPosition: Integer, height: Integer): Sheet;
    setRowHeights(startRow: Integer, numRows: Integer, height: Integer): Sheet;
    setTabColor(color: string): Sheet;
    showColumns(columnIndex: Integer): void;
    showColumns(columnIndex: Integer, numColumns: Integer): void;
    showRows(rowIndex: Integer): void;
    showRows(rowIndex: Integer, numRows: Integer): void;
    showSheet(): Sheet;
    sort(columnPosition: Integer): Sheet;
    sort(columnPosition: Integer, ascending: boolean): Sheet;
    unhideColumn(column: Range): void;
    unhideRow(row: Range): void;
    updateChart(chart: EmbeddedChart): void;
    getSheetProtection(): PageProtection;
    setSheetProtection(permissions: PageProtection): void;
  }

  /**
   * Access and modify Google Sheets files. Common operations are adding new sheets and adding
   * collaborators.
   */
  interface Spreadsheet {
    addEditor(emailAddress: string): Spreadsheet;
    addEditor(user: Base.User): Spreadsheet;
    addEditors(emailAddresses: string[]): Spreadsheet;
    addMenu(name: string, subMenus: any[]): void;
    addViewer(emailAddress: string): Spreadsheet;
    addViewer(user: Base.User): Spreadsheet;
    addViewers(emailAddresses: string[]): Spreadsheet;
    appendRow(rowContents: any[]): Sheet;
    autoResizeColumn(columnPosition: Integer): Sheet;
    copy(name: string): Spreadsheet;
    deleteActiveSheet(): Sheet;
    deleteColumn(columnPosition: Integer): Sheet;
    deleteColumns(columnPosition: Integer, howMany: Integer): void;
    deleteRow(rowPosition: Integer): Sheet;
    deleteRows(rowPosition: Integer, howMany: Integer): void;
    deleteSheet(sheet: Sheet): void;
    duplicateActiveSheet(): Sheet;
    getActiveCell(): Range;
    getActiveRange(): Range;
    getActiveRangeList(): RangeList;
    getActiveSheet(): Sheet;
    getAs(contentType: string): Base.Blob;
    getBandings(): Banding[];
    getBlob(): Base.Blob;
    getColumnWidth(columnPosition: Integer): Integer;
    getCurrentCell(): Range;
    getDataRange(): Range;
    getEditors(): Base.User[];
    getFormUrl(): string;
    getFrozenColumns(): Integer;
    getFrozenRows(): Integer;
    getId(): string;
    /** Returns all over-the-grid images on the sheet. */
    getImages(): OverGridImage[];
    getLastColumn(): Integer;
    getLastRow(): Integer;
    getName(): string;
    getNamedRanges(): NamedRange[];
    getNumSheets(): Integer;
    getOwner(): Base.User;
    getProtections(type: ProtectionType): Protection[];
    getRange(a1Notation: string): Range;
    getRangeByName(name: string): Range;
    getRangeList(a1Notations: string[]): RangeList;
    getRowHeight(rowPosition: Integer): Integer;
    getSelection(): Selection;
    getSheetByName(name: string): Sheet;
    getSheetId(): Integer;
    getSheetName(): string;
    getSheetValues(startRow: Integer, startColumn: Integer, numRows: Integer, numColumns: Integer): any[][];
    getSheets(): Sheet[];
    getSpreadsheetLocale(): string;
    getSpreadsheetTimeZone(): string;
    getUrl(): string;
    getViewers(): Base.User[];
    hideColumn(column: Range): void;
    hideRow(row: Range): void;
    insertColumnAfter(afterPosition: Integer): Sheet;
    insertColumnBefore(beforePosition: Integer): Sheet;
    insertColumnsAfter(afterPosition: Integer, howMany: Integer): Sheet;
    insertColumnsBefore(beforePosition: Integer, howMany: Integer): Sheet;
    insertImage(blobSource: Base.BlobSource, column: Integer, row: Integer): void;
    insertImage(blobSource: Base.BlobSource, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): void;
    insertImage(url: string, column: Integer, row: Integer): void;
    insertImage(url: string, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): void;
    insertRowAfter(afterPosition: Integer): Sheet;
    insertRowBefore(beforePosition: Integer): Sheet;
    insertRowsAfter(afterPosition: Integer, howMany: Integer): Sheet;
    insertRowsBefore(beforePosition: Integer, howMany: Integer): Sheet;
    insertSheet(): Sheet;
    insertSheet(sheetIndex: Integer): Sheet;
    insertSheet(sheetIndex: Integer, options: any): Sheet;
    insertSheet(options: any): Sheet;
    insertSheet(sheetName: string): Sheet;
    insertSheet(sheetName: string, sheetIndex: Integer): Sheet;
    insertSheet(sheetName: string, sheetIndex: Integer, options: any): Sheet;
    insertSheet(sheetName: string, options: any): Sheet;
    moveActiveSheet(pos: Integer): void;
    removeEditor(emailAddress: string): Spreadsheet;
    removeEditor(user: Base.User): Spreadsheet;
    removeMenu(name: string): void;
    removeNamedRange(name: string): void;
    removeViewer(emailAddress: string): Spreadsheet;
    removeViewer(user: Base.User): Spreadsheet;
    rename(newName: string): void;
    renameActiveSheet(newName: string): void;
    setActiveRange(range: Range): Range;
    setActiveRangeList(rangeList: RangeList): RangeList;
    setActiveSelection(range: Range): Range;
    setActiveSelection(a1Notation: string): Range;
    setActiveSheet(sheet: Sheet): Sheet;
    setActiveSheet(sheet: Sheet, restoreSelection: boolean): Sheet;
    setColumnWidth(columnPosition: Integer, width: Integer): Sheet;
    setCurrentCell(cell: Range): Range;
    setFrozenColumns(columns: Integer): void;
    setFrozenRows(rows: Integer): void;
    setNamedRange(name: string, range: Range): void;
    setRowHeight(rowPosition: Integer, height: Integer): Sheet;
    setSpreadsheetLocale(locale: string): void;
    setSpreadsheetTimeZone(timezone: string): void;
    show(userInterface: any): void;
    sort(columnPosition: Integer): Sheet;
    sort(columnPosition: Integer, ascending: boolean): Sheet;
    toast(msg: string): void;
    toast(msg: string, title: string): void;
    toast(msg: string, title: string, timeoutSeconds: Number): void;
    unhideColumn(column: Range): void;
    unhideRow(row: Range): void;
    updateMenu(name: string, subMenus: any[]): void;
    getSheetProtection(): PageProtection;
    isAnonymousView(): boolean;
    isAnonymousWrite(): boolean;
    setAnonymousAccess(anonymousReadAllowed: boolean, anonymousWriteAllowed: boolean): void;
    setSheetProtection(permissions: PageProtection): void;
  }

  /**
   * Access and create Google Sheets files. This class is the parent class for the Spreadsheet service.
   */
  interface SpreadsheetApp {
    AutoFillSeries: typeof AutoFillSeries;
    BandingTheme: typeof BandingTheme;
    BooleanCriteria: typeof BooleanCriteria;
    BorderStyle: typeof BorderStyle;
    CopyPasteType: typeof CopyPasteType;
    DataValidationCriteria: typeof DataValidationCriteria;
    Dimension: typeof Dimension;
    Direction: typeof Direction;
    GroupControlTogglePosition: typeof GroupControlTogglePosition;
    InterpolationType: typeof InterpolationType;
    PivotTableSummarizeFunction: typeof PivotTableSummarizeFunction;
    PivotValueDisplayType: typeof PivotValueDisplayType;
    ProtectionType: typeof ProtectionType;
    RelativeDate: typeof RelativeDate;
    TextDirection: typeof TextDirection;
    TextToColumnsDelimiter: typeof TextToColumnsDelimiter;
    WrapStrategy: typeof WrapStrategy;
    create(name: string): Spreadsheet;
    create(name: string, rows: Integer, columns: Integer): Spreadsheet;
    flush(): void;
    getActive(): Spreadsheet;
    getActiveRange(): Range;
    getActiveRangeList(): RangeList;
    getActiveSheet(): Sheet;
    getActiveSpreadsheet(): Spreadsheet;
    getCurrentCell(): Range;
    getSelection(): Selection;
    getUi(): Base.Ui;
    newConditionalFormatRule(): ConditionalFormatRuleBuilder;
    newDataValidation(): DataValidationBuilder;
    newFilterCriteria(): FilterCriteriaBuilder;
    open(file: Drive.File): Spreadsheet;
    openById(id: string): Spreadsheet;
    openByUrl(url: string): Spreadsheet;
    setActiveRange(range: Range): Range;
    setActiveRangeList(rangeList: RangeList): RangeList;
    setActiveSheet(sheet: Sheet): Sheet;
    setActiveSheet(sheet: Sheet, restoreSelection: boolean): Sheet;
    setActiveSpreadsheet(newActiveSpreadsheet: Spreadsheet): void;
    setCurrentCell(cell: Range): Range;
  }

  /**
   * An enumerations of text directions.
   */
  enum TextDirection {
    /** Left-to-right text direction. */
    LEFT_TO_RIGHT,
    /** Right-to-left text direction.*/
    RIGHT_TO_LEFT,
  }

  /**
   * Access the text rotation settings for a cell.
   */
  interface TextRotation {
    getDegrees(): Integer;
    isVertical(): boolean;
  }

  /**
   * An enumeration of the types of preset delimiters that can split a column of text into multiple
   * columns.
   */
  enum TextToColumnsDelimiter { COMMA, SEMICOLON, PERIOD, SPACE }

  /**
   * An enumeration of the strategies used to handle cell text wrapping.
   */
  enum WrapStrategy { WRAP, OVERFLOW, CLIP }

}

declare type Range = Spreadsheet.Range;
declare const SpreadsheetApp: Spreadsheet.SpreadsheetApp;
