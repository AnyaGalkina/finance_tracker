import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';


// declare const self: ServiceWorkerGlobalScope;

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', async  (event: any) => {
    console.log('installed')
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('activate', async  (event: any) => {
    console.log('activated')
});
