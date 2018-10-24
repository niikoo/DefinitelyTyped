// Type definitions for Google Apps Script 2018-10-24
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>, niikoo <https://github.com/niikoo/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

/**
   * A typesafe enum for character sets.
   */
declare enum Charset { US_ASCII, UTF_8 }

/**
 * Selector of Digest algorithm
 */
declare enum DigestAlgorithm { MD2, MD5, SHA_1, SHA_256, SHA_384, SHA_512 }

/**
 * Selector of RSA algorithm
 */
declare enum RsaAlgorithm { RSA_SHA_1, RSA_SHA_256 }

/**
 * Selector of MAC algorithm
 */
declare enum MacAlgorithm { HMAC_MD5, HMAC_SHA_1, HMAC_SHA_256, HMAC_SHA_384, HMAC_SHA_512 }

/**
 * This service provides utilities for string encoding/decoding, date formatting, JSON manipulation,
 * and other miscellaneous tasks.
 */
namespace Utilities {
  function base64Decode(encoded: string): Byte[];
  function base64Decode(encoded: string, charset: Charset): Byte[];
  function base64DecodeWebSafe(encoded: string): Byte[];
  function base64DecodeWebSafe(encoded: string, charset: Charset): Byte[];
  function base64Encode(data: Byte[]): string;
  function base64Encode(data: string): string;
  function base64Encode(data: string, charset: Charset): string;
  function base64EncodeWebSafe(data: Byte[]): string;
  function base64EncodeWebSafe(data: string): string;
  function base64EncodeWebSafe(data: string, charset: Charset): string;
  function computeDigest(algorithm: DigestAlgorithm, value: Byte[]): Byte[];
  function computeDigest(algorithm: DigestAlgorithm, value: string): Byte[];
  function computeDigest(algorithm: DigestAlgorithm, value: string, charset: Charset): Byte[];
  function computeHmacSha256Signature(value: Byte[], key: Byte[]): Byte[];
  function computeHmacSha256Signature(value: string, key: string): Byte[];
  function computeHmacSha256Signature(value: string, key: string, charset: Charset): Byte[];
  function computeHmacSignature(algorithm: MacAlgorithm, value: Byte[], key: Byte[]): Byte[];
  function computeHmacSignature(algorithm: MacAlgorithm, value: string, key: string): Byte[];
  function computeHmacSignature(algorithm: MacAlgorithm, value: string, key: string, charset: Charset): Byte[];
  function computeRsaSignature(algorithm: RsaAlgorithm, value: string, key: string): Byte[];
  function computeRsaSignature(algorithm: RsaAlgorithm, value: string, key: string, charset: Charset): Byte[];
  function computeRsaSha1Signature(value: string, key: string): Byte[];
  function computeRsaSha1Signature(value: string, key: string, charset: Charset): Byte[];
  function computeRsaSha256Signature(value: string, key: string): Byte[];
  function computeRsaSha256Signature(value: string, key: string, charset: Charset): Byte[];
  function formatDate(date: Date, timeZone: string, format: string): string;
  function formatString(template: string, ...args: Object[]): string;
  function getUuid(): string;
  function gzip(blob: Base.BlobSource): Base.Blob;
  function gzip(blob: Base.BlobSource, name: string): Base.Blob;
  function newBlob(data: Byte[]): Base.Blob;
  function newBlob(data: Byte[], contentType: string): Base.Blob;
  function newBlob(data: Byte[], contentType: string, name: string): Base.Blob;
  function newBlob(data: string): Base.Blob;
  function newBlob(data: string, contentType: string): Base.Blob;
  function newBlob(data: string, contentType: string, name: string): Base.Blob;
  function parseCsv(csv: string): string[][];
  function parseCsv(csv: string, delimiter: Char): string[][];
  function sleep(milliseconds: Integer): void;
  function ungzip(blob: Base.BlobSource): Base.Blob;
  function unzip(blob: Base.BlobSource): Base.Blob[];
  function zip(blobs: Base.BlobSource[]): Base.Blob;
  function zip(blobs: Base.BlobSource[], name: string): Base.Blob;
  function jsonParse(jsonString: string): Object;
  function jsonStringify(obj: Object): string;
}
