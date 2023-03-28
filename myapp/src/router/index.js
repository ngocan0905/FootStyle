import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/ProductsPage.vue";

const routes = [
  {
    path: "/products",
    name: "Products",
    component: Home,
  },
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: import("../views/ProductDetailPage.vue"),
  },
  {
    path: "/cart",
    name: "CartPage",
    component: import("../views/CartPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: import("../views/NotFoundPage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: import("../views/Register.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: import("../views/ForgotPassword.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: import("../views/AboutPage.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: import("../views/ContactPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
