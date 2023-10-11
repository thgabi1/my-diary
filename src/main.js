import { createApp } from "vue";
import App from "./App.vue";
import Router from "./routes";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";

const app = createApp(App);

app.component("app-header", HeaderComp);
app.component("app-footer", FooterComp);
app.use(Antd);
app.use(Router);
app.mount("#app");
