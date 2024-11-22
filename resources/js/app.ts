import '../css/app.scss';
import './bootstrap';

import type { ResolvedComponent } from '@inertiajs/svelte';
import { createInertiaApp } from '@inertiajs/svelte';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { defineRoutes } from 'momentum-trail';
import { hydrate, mount } from 'svelte';
import AuthenticatedLayout from './Layouts/AuthenticatedLayout.svelte';
import GuestLayout from './Layouts/GuestLayout.svelte';
import LoginLayout from './Layouts/LoginLayout.svelte';
import routes from './routes.json';

defineRoutes(routes);
const layoutMap = {
    'Auth/Login': LoginLayout,
    'Auth/Register': LoginLayout,
    Welcome: GuestLayout,
};

createInertiaApp({
    resolve: async (name) => {
        const page = await resolvePageComponent(
            `./Pages/${name}.svelte`,
            import.meta.glob<ResolvedComponent>('./Pages/**/*.svelte'),
        );
        console.log({ page, name });
        const layout = layoutMap[name as keyof typeof layoutMap] ?? AuthenticatedLayout;
        return {
            default: page.default,
            layout,
        };
    },
    setup({ el, App }) {
        if (el.dataset.serverRendered === 'true') {
            hydrate(App, { target: el });
        } else {
            mount(App, { target: el });
        }
    },
});
