// Type definitions for Google Apps Script 2018-10-24
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>, niikoo <https://github.com/niikoo/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace Language {
  /**
   * The Language service provides scripts a way to compute automatic translations of text.
   *
   *     // The code below will write "Esta es una prueba" to the log.
   *     var spanish = LanguageApp.translate('This is a test', 'en', 'es');
   *     Logger.log(spanish);
   */
  interface LanguageApp {
    translate(text: string, sourceLanguage: string, targetLanguage: string): string;
    translate(text: string, sourceLanguage: string, targetLanguage: string, advancedArgs: Object): string;
  }

}

declare const LanguageApp: Language.LanguageApp;
