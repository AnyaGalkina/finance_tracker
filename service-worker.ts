import React from 'react';

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', async  (event: any) => {
    console.log('installed')
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('activate', async  (event: any) => {
    console.log('activated')
});
