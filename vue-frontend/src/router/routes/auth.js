import PublicLayout from "@/layouts/PublicLayout.vue";

import LoginPage from "@/views/auth/Login.vue";
import RegisterPage from "@/views/auth/Register.vue";

export const AuthRoutes = [
    {
        path: '/login',
        component: PublicLayout,
        meta: { guest: true },
        children: [
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: '',
                name: 'LoginPage',
                component: LoginPage,
            },
        ],
    },
    {
        path: '/register',
        component: PublicLayout,
        meta: { guest: false },
        children: [
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: '',
                name: 'RegisterPage',
                component: RegisterPage,
            },
        ],
    },
]