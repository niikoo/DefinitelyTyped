// Type definitions for google-apps-script
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen>, grant <https://github.com/grant>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// Base Types
/// <reference path="google-apps-script.base.d.ts"/>
/// <reference path="google-apps-script.cache.d.ts"/>
/// <reference path="google-apps-script.types.d.ts"/>

// Google Services (Google APIs)
/// <reference path="google-apps-script.calendar.d.ts"/>
/// <reference path="google-apps-script.card.d.ts"/>
/// <reference path="google-apps-script.charts.d.ts"/>
/// <reference path="google-apps-script.contacts.d.ts"/>
/// <reference path="google-apps-script.content.d.ts"/>
/// <reference path="google-apps-script.document.d.ts"/>
/// <reference path="google-apps-script.drive.d.ts"/>
/// <reference path="google-apps-script.forms.d.ts"/>
/// <reference path="google-apps-script.gmail.d.ts"/>
/// <reference path="google-apps-script.groups.d.ts"/>
/// <reference path="google-apps-script.mail.d.ts"/>
/// <reference path="google-apps-script.maps.d.ts"/>
/// <reference path="google-apps-script.sites.d.ts"/>
/// <reference path="google-apps-script.slides.d.ts"/>
/// <reference path="google-apps-script.spreadsheet.d.ts"/>

// Script Services (Other *App / *Service)
/// <reference path="google-apps-script.html.d.ts"/>
/// <reference path="google-apps-script.jdbc.d.ts"/>
/// <reference path="google-apps-script.language.d.ts"/>
/// <reference path="google-apps-script.lock.d.ts"/>
/// <reference path="google-apps-script.properties.d.ts"/>
/// <reference path="google-apps-script.optimization.d.ts"/>
/// <reference path="google-apps-script.script.d.ts"/>
/// <reference path="google-apps-script.ui.d.ts"/>
/// <reference path="google-apps-script.url-fetch.d.ts"/>
/// <reference path="google-apps-script.utilities.d.ts"/>
/// <reference path="google-apps-script.xml-service.d.ts"/>

// API Types (Advanced Google Services)
/*
/// <reference types="gapi" />
/// <reference types="gapi.analytics" />
/// <reference types="gapi.auth2" />
/// <reference types="gapi.calendar" />
/// <reference types="gapi.client" />
/// <reference types="gapi.client.acceleratedmobilepageurl" />
/// <reference types="gapi.client.adexchangebuyer" />
/// <reference types="gapi.client.adexchangebuyer2" />
/// <reference types="gapi.client.adexchangeseller" />
/// <reference types="gapi.client.adexperiencereport" />
/// <reference types="gapi.client.admin" />
/// <reference types="gapi.client.adsense" />
/// <reference types="gapi.client.adsensehost" />
/// <reference types="gapi.client.analytics" />
/// <reference types="gapi.client.analyticsreporting" />
/// <reference types="gapi.client.androiddeviceprovisioning" />
/// <reference types="gapi.client.androidenterprise" />
/// <reference types="gapi.client.androidmanagement" />
/// <reference types="gapi.client.androidpublisher" />
/// <reference types="gapi.client.appengine" />
/// <reference types="gapi.client.appsactivity" />
/// <reference types="gapi.client.appstate" />
/// <reference types="gapi.client.bigquery" />
/// <reference types="gapi.client.bigquerydatatransfer" />
/// <reference types="gapi.client.blogger" />
/// <reference types="gapi.client.books" />
/// <reference types="gapi.client.calendar" />
/// <reference types="gapi.client.civicinfo" />
/// <reference types="gapi.client.classroom" />
/// <reference types="gapi.client.cloudbilling" />
/// <reference types="gapi.client.cloudbuild" />
/// <reference types="gapi.client.clouddebugger" />
/// <reference types="gapi.client.clouderrorreporting" />
/// <reference types="gapi.client.cloudfunctions" />
/// <reference types="gapi.client.cloudiot" />
/// <reference types="gapi.client.cloudkms" />
/// <reference types="gapi.client.cloudmonitoring" />
/// <reference types="gapi.client.cloudresourcemanager" />
/// <reference types="gapi.client.cloudtasks" />
/// <reference types="gapi.client.cloudtrace" />
/// <reference types="gapi.client.clouduseraccounts" />
/// <reference types="gapi.client.compute" />
/// <reference types="gapi.client.consumersurveys" />
/// <reference types="gapi.client.container" />
/// <reference types="gapi.client.content" />
/// <reference types="gapi.client.customsearch" />
/// <reference types="gapi.client.dataflow" />
/// <reference types="gapi.client.dataproc" />
/// <reference types="gapi.client.datastore" />
/// <reference types="gapi.client.deploymentmanager" />
/// <reference types="gapi.client.dfareporting" />
/// <reference types="gapi.client.discovery" />
/// <reference types="gapi.client.dlp" />
/// <reference types="gapi.client.dns" />
/// <reference types="gapi.client.doubleclickbidmanager" />
/// <reference types="gapi.client.doubleclicksearch" />
/// <reference types="gapi.client.drive" />
/// <reference types="gapi.client.firebasedynamiclinks" />
/// <reference types="gapi.client.firebaseremoteconfig" />
/// <reference types="gapi.client.firebaserules" />
/// <reference types="gapi.client.firestore" />
/// <reference types="gapi.client.fitness" />
/// <reference types="gapi.client.fusiontables" />
/// <reference types="gapi.client.games" />
/// <reference types="gapi.client.gamesconfiguration" />
/// <reference types="gapi.client.gamesmanagement" />
/// <reference types="gapi.client.genomics" />
/// <reference types="gapi.client.gmail" />
/// <reference types="gapi.client.groupsmigration" />
/// <reference types="gapi.client.groupssettings" />
/// <reference types="gapi.client.iam" />
/// <reference types="gapi.client.identitytoolkit" />
/// <reference types="gapi.client.kgsearch" />
/// <reference types="gapi.client.language" />
/// <reference types="gapi.client.licensing" />
/// <reference types="gapi.client.logging" />
/// <reference types="gapi.client.manufacturers" />
/// <reference types="gapi.client.mirror" />
/// <reference types="gapi.client.ml" />
/// <reference types="gapi.client.monitoring" />
/// <reference types="gapi.client.oauth2" />
/// <reference types="gapi.client.oslogin" />
/// <reference types="gapi.client.pagespeedonline" />
/// <reference types="gapi.client.partners" />
/// <reference types="gapi.client.people" />
/// <reference types="gapi.client.playcustomapp" />
/// <reference types="gapi.client.playmoviespartner" />
/// <reference types="gapi.client.plus" />
/// <reference types="gapi.client.plusdomains" />
/// <reference types="gapi.client.prediction" />
/// <reference types="gapi.client.proximitybeacon" />
/// <reference types="gapi.client.pubsub" />
/// <reference types="gapi.client.qpxexpress" />
/// <reference types="gapi.client.reseller" />
/// <reference types="gapi.client.resourceviews" />
/// <reference types="gapi.client.runtimeconfig" />
/// <reference types="gapi.client.safebrowsing" />
/// <reference types="gapi.client.script" />
/// <reference types="gapi.client.searchconsole" />
/// <reference types="gapi.client.servicecontrol" />
/// <reference types="gapi.client.servicemanagement" />
/// <reference types="gapi.client.serviceuser" />
/// <reference types="gapi.client.sheets" />
/// <reference types="gapi.client.siteverification" />
/// <reference types="gapi.client.slides" />
/// <reference types="gapi.client.sourcerepo" />
/// <reference types="gapi.client.spanner" />
/// <reference types="gapi.client.spectrum" />
/// <reference types="gapi.client.speech" />
/// <reference types="gapi.client.sqladmin" />
/// <reference types="gapi.client.storage" />
/// <reference types="gapi.client.storagetransfer" />
/// <reference types="gapi.client.streetviewpublish" />
/// <reference types="gapi.client.surveys" />
/// <reference types="gapi.client.tagmanager" />
/// <reference types="gapi.client.taskqueue" />
/// <reference types="gapi.client.tasks" />
/// <reference types="gapi.client.testing" />
/// <reference types="gapi.client.toolresults" />
/// <reference types="gapi.client.translate" />
/// <reference types="gapi.client.urlshortener" />
/// <reference types="gapi.client.vault" />
/// <reference types="gapi.client.videointelligence" />
/// <reference types="gapi.client.vision" />
/// <reference types="gapi.client.webfonts" />
/// <reference types="gapi.client.webmasters" />
/// <reference types="gapi.client.youtube" />
/// <reference types="gapi.client.youtubeanalytics" />
/// <reference types="gapi.client.youtubereporting" />
/// <reference types="gapi.drive" />
/// <reference types="gapi.pagespeedonline" />
/// <reference types="gapi.people" />
/// <reference types="gapi.plus" />
/// <reference types="gapi.translate" />
/// <reference types="gapi.urlshortener" />
/// <reference types="gapi.youtube" />
/// <reference types="gapi.youtubeanalytics" />
declare const Calendar: typeof gapi.client.calendar;*/
