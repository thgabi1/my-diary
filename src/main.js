import { createApp } from "vue";
import App from "./App.vue";
import Router from "./routes";

import HeaderComp from "./components/HeaderComp.vue";

const app = createApp(App);

app.component("app-header", HeaderComp);
app.use(Router);
app.mount("#app");
