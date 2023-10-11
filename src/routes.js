import { createRouter, createWebHistory } from "vue-router";

// COMPONENTS
import HomePage from "./components/Home/HomePage";
import Login from "./components/SignInSignUp/LoginPage";
import Register from "./components/SignInSignUp/RegisterPage";
import ProfilePage from "./components/Profile/ProfilePage";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage, name: "home" },
    { path: "/login", component: Login, name: "login" },
    { path: "/register", component: Register, name: "register" },
    { path: "/profile/:profileId", component: ProfilePage, name: "profile" },
  ],
});

export default routes;
