import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/antd.css";
import { message, Button, Input, Row, Col,Image } from "ant-design-vue";
import "@a/public.scss";

const app = createApp(App);
app.config.globalProperties.$message = message;

app.use(router);
app.use(Button);
app.use(Input);
app.use(Row);
app.use(Col);
app.use(Image);
app.mount("#app");
