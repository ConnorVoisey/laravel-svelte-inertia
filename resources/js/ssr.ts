import { createInertiaApp, type ResolvedComponent } from '@inertiajs/svelte';
import createServer from '@inertiajs/svelte/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { defineRoutes } from 'momentum-trail';
import routes from './routes.json';
import { resolve } from './app';
import { hydrate, mount } from 'svelte';

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
