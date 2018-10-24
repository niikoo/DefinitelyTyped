// Type definitions for Google Apps Script 2018-10-24
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>, niikoo <https://github.com/niikoo/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />


declare namespace Mail {
  /**
   * Sends email.
   *
   * This service allows users to send emails with complete control over the content of the email.
   * Unlike GmailApp, MailApp's sole purpose is sending email. MailApp cannot access a user's Gmail
   * inbox.
   *
   * Changes to scripts written using GmailApp are more likely to trigger a re-authorization
   * request from a user than MailApp scripts.
   */
  interface MailApp {
    getRemainingDailyQuota(): Integer;
    sendEmail(message: Object): void;
    sendEmail(recipient: string, subject: string, body: string): void;
    sendEmail(recipient: string, subject: string, body: string, options: Object): void;
    sendEmail(to: string, replyTo: string, subject: string, body: string): void;
  }

}


declare const MailApp: Mail.MailApp;
