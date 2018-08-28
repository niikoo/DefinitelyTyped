/// <reference path='./index.d.ts' />
declare namespace chrome {
    namespace test {
        function sendMessage(...msg: any[]): any;
        function getConfig(callback: (config: any) => any): any;
        function assertEq(...e: any[]): any;
        function succeed(): any;
        function fail(reason?: any): any;
        function notifyPass(): any;
        function notifyFail(reason: any): any;
        function assertTrue(...e: any[]): any;
        function assertFalse(...e: any[]): any;
        function callbackPass(): any;
        function callbackPass(callback: () => any): any;
        function callbackPass(callback: (param: any) => any): any;
        function callbackPass(callback: (...params: any[]) => any): any;
        function callbackFail(reason: any): any;
        function listenOnce<F extends Function, E extends chrome.events.Event<F>>(event: E, callback: F): any;
        function runTests(...tests: any[]): any;
        const log: typeof console.log;
        const onMessage: chrome.events.Event<(...e: any[]) => any>;
    }
}

interface Embedder extends Window { }
declare var embedder: Embedder & { test: typeof chrome.test, webview: HTMLWebViewElement } & { [key: string]: any };
declare var util: { [key: string]: any };
