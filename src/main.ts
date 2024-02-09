import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GoogleSignInPlugin from "vue3-google-signin"


const app = createApp(App)
let gauthClientId = '633871883161-aecshgu3v7imeeqd1n8hp62bvk4he3qk.apps.googleusercontent.com';

app.use(GoogleSignInPlugin, {
    clientId: gauthClientId,
});

app.mount('#app')
