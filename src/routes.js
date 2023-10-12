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
    { path: "/bejelentkezes", component: Login, name: "login" },
    { path: "/regisztracio", component: Register, name: "register" },
    { path: "/profil/:profileId", component: ProfilePage, name: "profile" },
  ],
});

export default routes;
