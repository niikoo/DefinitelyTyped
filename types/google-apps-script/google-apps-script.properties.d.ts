// Type definitions for Google Apps Script 2018-10-24
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>, niikoo <https://github.com/niikoo/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace Properties {
  interface PropertyList {
    [key: string]: string;
  }

  /**
   * The properties object acts as the interface to access user, document, or script properties. The
   * specific property type depends on which of the three methods of PropertiesService the
   * script called: PropertiesService.getDocumentProperties(), PropertiesService.getUserProperties(), or PropertiesService.getScriptProperties().
   * Properties cannot be shared between scripts. For more information about property types, see the
   * guide to the Properties service.
   */
  interface Properties {
    deleteAllProperties(): Properties;
    deleteProperty(key: string): Properties;
    getKeys(): string[];
    getProperties(): PropertyList;
    /**
     * Gets the value associated with the given key in the current Properties store, or null if no such key exists.
     */
    getProperty(key: string): string | null;
    setProperties(properties: PropertyList): Properties;
    setProperties(properties: PropertyList, deleteAllOthers: boolean): Properties;
    setProperty(key: string, value: string): Properties;
  }

  /**
   * Allows scripts to store simple data in key-value pairs scoped to one script, one user of a
   * script, or one document in which an add-on is used. Properties cannot be shared between scripts.
   * For more information about when to use each type of property, see the guide to the Properties service.
   *
   *     // Sets three properties of different types.
   *     var documentProperties = PropertiesService.getDocumentProperties();
   *     var scriptProperties = PropertiesService.getScriptProperties();
   *     var userProperties = PropertiesService.getUserProperties();
   *
   *     documentProperties.setProperty('DAYS_TO_FETCH', '5');
   *     scriptProperties.setProperty('SERVER_URL', 'http://www.example.com/MyWeatherService/');
   *     userProperties.setProperty('DISPLAY_UNITS', 'metric');
   */
  interface PropertiesService {
    getDocumentProperties(): Properties;
    getScriptProperties(): Properties;
    getUserProperties(): Properties;
  }

  /**
   * @deprecated
   * This class is deprecated and should not be used in new scripts.
   * @description
   * Script Properties are key-value pairs stored by a script in a persistent store. Script Properties
   * are scoped per script, regardless of which user runs the script.
   */
  interface ScriptProperties {
    deleteAllProperties(): ScriptProperties;
    deleteProperty(key: string): ScriptProperties;
    getKeys(): string[];
    getProperties(): Object;
    getProperty(key: string): string | null;
    setProperties(properties: Object): ScriptProperties;
    setProperties(properties: Object, deleteAllOthers: boolean): ScriptProperties;
    setProperty(key: string, value: string): ScriptProperties;
  }

  /**
   * @deprecated
   * This class is deprecated and should not be used in new scripts.
   * @description
   * User Properties are key-value pairs unique to a user. User Properties are scoped per user; any
   * script running under the identity of a user can access User Properties for that user only.
   */
  interface UserProperties {
    deleteAllProperties(): UserProperties;
    deleteProperty(key: string): UserProperties;
    getKeys(): string[];
    getProperties(): Object;
    getProperty(key: string): string | null;
    setProperties(properties: Object): UserProperties;
    setProperties(properties: Object, deleteAllOthers: boolean): UserProperties;
    setProperty(key: string, value: string): UserProperties;
  }

}

declare const PropertiesService: Properties.PropertiesService;
/** @deprecated */
declare const ScriptProperties: Properties.ScriptProperties;
/** @deprecated */
declare const UserProperties: Properties.UserProperties;
