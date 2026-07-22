import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios';

// Public routes
import { PublicRoutes } from "./routes/public.js";
import { UserRoutes } from "./routes/user.js";
import { AuthRoutes } from "./routes/auth.js";
// -- Ends - Public routes

// Admin routes
import { DashboardRoutes } from "./routes/admin/dashboard.js";
import { useAuthStore } from '@/stores/auth.js';

// -- Ends - Admin routes

const routes = [
  ...AuthRoutes,
  ...PublicRoutes,
  ...UserRoutes,

  ...DashboardRoutes,


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach(async (to, from) => {

    const auth = useAuthStore();

  // Authentication check
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
      return {
          path: "/login",
      };
  }

  // Guest-only pages (login/register)
  if (to.meta.guest && auth.isLoggedIn) {
      return {
          path: "/dashboard",
      };
  }

  // Role check
  if (to.meta.role && !auth.hasRole(to.meta.role)) {
      return {
          path: "/unauthorized",
      };
  }
})


export default router
