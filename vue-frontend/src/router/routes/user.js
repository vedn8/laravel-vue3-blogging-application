import PublicLayout from "@/layouts/PublicLayout.vue";

import UserProfile from "@/views/users/MyProfile.vue";
import UserPosts from "@/views/users/MyPosts.vue";
import UserDetail from "@/views/users/UserDetail.vue";
import DashboardPage from "@/views/users/Dashboard.vue";

export const UserRoutes = [
    {
        path: '/dashboard',
        component: PublicLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'DashboardPage',
                component: DashboardPage,
            },
        ],
    },
    {
        path: '/user',
        component: PublicLayout,
        meta: { requiresAuth: true },
        children: [
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: '',
                name: 'UserDetail',
                component: UserDetail,
                meta: { requiresAuth: true },
            },
        ],
    },
    {
        path: '/user/:id',
        component: PublicLayout,
        meta: { requiresAuth: true },
        children: [
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'profile',
                name: 'UserProfile',
                component: UserProfile,
                meta: { requiresAuth: true, role: 'user' },
            },
            {
                // UserPosts will be rendered inside User's <router-view>
                // when /user/:id/posts is matched
                path: 'posts',
                name: "UserPosts",
                component: UserPosts,
                meta: { requiresAuth: true, role: 'user' },
            },
        ],
    },
];
