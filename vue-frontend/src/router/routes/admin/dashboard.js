import AdminLayout from "@/layouts/AdminLayout.vue";

import AdminDashboard from "@/views/admin/Dashboard.vue";

export const DashboardRoutes = [
    {
        path: '/admin',
        component: AdminLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'adminDashboard',
                component: AdminDashboard,
                meta: { requiresAuth: true, role: 'admin' },
            },
        ],
    },
    {
        path: '/admin/dashboard',
        component: AdminLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'dashboard',
                component: AdminDashboard,
                meta: { requiresAuth: true, role: 'admin' },
            },
        ],

    },
]
