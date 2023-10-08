import { createRouter, createWebHistory } from "vue-router";

// COMPONENTS
import HomePage from "./components/Home/HomePage";
import SignInSignUp from "./components/SignInSignUp/SignInSignUp";
import ProfilePage from "./components/Profile/ProfilePage";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage, name: "home" },
    { path: "/login", component: SignInSignUp, name: "signinsignup" },
    { path: "/profile/:profileId", component: ProfilePage, name: "profile" },
  ],
});

export default routes;
