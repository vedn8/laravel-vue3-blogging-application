import PublicLayout from "@/layouts/PublicLayout.vue";

import HomeView from '@/views/HomeView.vue'

export const PublicRoutes = [
    {
        path: '/',
        component: PublicLayout,
        children: [
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: '',
                name: 'home',
                component: HomeView,
            },
        ],
    },
    {
        path: '/about',
        component: PublicLayout,
        children: [
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: '',
                name: 'about',
                component: () => import('@/views/AboutView.vue'),
            },
        ],
    },
    {
        path: '/contact',
        component: PublicLayout,
        children: [
            {
                path: '',
                name: 'contactUs',
                component: () => import('@/views/ContactView.vue'),
            },
        ],
    },
]
