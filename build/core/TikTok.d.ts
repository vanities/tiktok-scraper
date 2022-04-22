/// <reference types="node" />
import { CookieJar } from 'request';
import { EventEmitter } from 'events';
import { PostCollector, TikTokConstructor, Result, MusicMetadata, UserMetadata, HashtagMetadata, Headers } from '../types';
import { Downloader } from '../core';
export declare class TikTokScraper extends EventEmitter {
    private mainHost;
    private userIdStore;
    private download;
    private filepath;
    private json2csvParser;
    private filetype;
    private input;
    private proxy;
    private strictSSL;
    private number;
    private since;
    private asyncDownload;
    private asyncScraping;
    private collector;
    private event;
    private scrapeType;
    private cli;
    private spinner;
    private byUserId;
    private storeHistory;
    private historyPath;
    private idStore;
    Downloader: Downloader;
    private storeValue;
    private maxCursor;
    private noWaterMark;
    private noDuplicates;
    private timeout;
    private bulk;
    private validHeaders;
    private csrf;
    private zip;
    private fileName;
    private test;
    private hdVideo;
    private webHookUrl;
    private method;
    private httpRequests;
    headers: Headers;
    private sessionList;
    private verifyFp;
    private store;
    cookieJar: CookieJar;
    constructor({ download, filepath, filetype, proxy, strictSSL, asyncDownload, cli, event, progress, input, number, since, type, by_user_id, store_history, historyPath, noWaterMark, useTestEndpoints, fileName, timeout, bulk, zip, test, hdVideo, webHookUrl, method, headers, verifyFp, sessionList, }: TikTokConstructor);
    private get fileDestination();
    private get folderDestination();
    private get getApiEndpoint();
    private get getProxy();
    private request;
    private returnInitError;
    scrape(): Promise<Result | any>;
    private withoutWatermark;
    private extractVideoId;
    private getUrlWithoutTheWatermark;
    private mainLoop;
    private submitScrapingRequest;
    private saveCollectorData;
    saveMetadata({ json, csv }: {
        json: any;
        csv: any;
    }): Promise<void>;
    private getDownloadedVideosFromHistory;
    private storeDownloadProgress;
    private collectPosts;
    private getValidHeaders;
    private scrapeData;
    private getTrendingFeedQuery;
    private getMusicFeedQuery;
    private getHashTagId;
    private getUserId;
    getUserProfileInfo(): Promise<UserMetadata>;
    getHashtagInfo(): Promise<HashtagMetadata>;
    getMusicInfo(): Promise<MusicMetadata>;
    signUrl(): Promise<any>;
    private getVideoMetadataFromHtml;
    private getVideoMetadata;
    getVideoMeta(html?: boolean): Promise<PostCollector>;
    private sendDataToWebHookUrl;
}