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
    'Auth/ForgotPassword': LoginLayout,
    Welcome: GuestLayout,
};

export const resolve = async (name: string) => {
    const page = await resolvePageComponent(
        `./Pages/${name}.svelte`,
        import.meta.glob<ResolvedComponent>('./Pages/**/*.svelte'),
    );
    // const layout = layoutMap[name as keyof typeof layoutMap] ?? AuthenticatedLayout;
    const layout = null;
    console.log({ page, name, layout });
    return {
        default: page.default,
        layout,
    };
};
createInertiaApp({
    resolve,
    setup({ el, App, props }) {
        if (el.dataset.serverRendered === 'true') {
            hydrate(App, { target: el, props });
        } else {
            mount(App, { target: el, props });
        }
    },
    progress: {
        color: 'hsl(var(--clr-primary-5))',
        showSpinner: true,
    },
});
