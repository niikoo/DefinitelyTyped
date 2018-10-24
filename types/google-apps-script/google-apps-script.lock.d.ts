// Type definitions for Google Apps Script 2018-10-24
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>, niikoo <https://github.com/niikoo/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />


declare namespace Lock {
  /**
   * A representation of a mutual-exclusion lock.
   *
   * This class allows scripts to make sure that only one instance of the script is executing a
   * given section of code at a time. This is particularly useful for callbacks and triggers, where a
   * user action may cause changes to a shared resource and you want to ensure that aren't collisions.
   *
   * The following examples shows how to use a lock in a form submit handler.
   *
   *     // Generates a unique ticket number for every form submission.
   *     function onFormSubmit(e) {
   *       var targetCell = e.range.offset(0, e.range.getNumColumns(), 1, 1);
   *
   *       // Get a script lock, because we're about to modify a shared resource.
   *       var lock = LockService.getScriptLock();
   *       // Wait for up to 30 seconds for other processes to finish.
   *       lock.waitLock(30000);
   *
   *       var ticketNumber = Number(ScriptProperties.getProperty('lastTicketNumber')) + 1;
   *       ScriptProperties.setProperty('lastTicketNumber', ticketNumber);
   *
   *       // Release the lock so that other processes can continue.
   *       lock.releaseLock();
   *
   *       targetCell.setValue(ticketNumber);
   *     }
   *
   * lastTicketNumber
   * ScriptProperties
   */
  interface Lock {
    hasLock(): boolean;
    releaseLock(): void;
    tryLock(timeoutInMillis: Integer): boolean;
    waitLock(timeoutInMillis: Integer): void;
  }

  /**
   * Prevents concurrent access to sections of code. This can be useful when you have multiple users
   * or processes modifying a shared resource and want to prevent collisions.
   */
  interface LockService {
    getDocumentLock(): Lock;
    getScriptLock(): Lock;
    getUserLock(): Lock;
  }

}

declare const LockService: Lock.LockService;
