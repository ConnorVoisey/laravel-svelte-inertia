import { createInertiaApp } from '@inertiajs/svelte';
import createServer from '@inertiajs/svelte/server';
import { defineRoutes } from 'momentum-trail';
import { hydrate, mount } from 'svelte';
import { resolve } from './app';
import routes from './routes.json';

defineRoutes(routes);

createServer((page) =>
    createInertiaApp({
        page,
        setup({ el, App, props }) {
            if (el.dataset.serverRendered === 'true') {
                hydrate(App, { target: el, props });
            } else {
                mount(App, { target: el, props });
            }
        },
        resolve,
    }),
);
