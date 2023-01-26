import "uno.css";
import '@unocss/reset/antfu.css';
import "remixicon/fonts/remixicon.css";

import App from "./App.vue";
import { createApp } from "vue";
import { createI18n } from 'vue-i18n'
import { messages } from "./messages";

const i18n = createI18n({
    legacy: false,
    locale: 'pt', 
    messages
})

const app = createApp(App);

app.use(i18n)
app.mount("#app");
