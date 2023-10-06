import { createRouter, createWebHistory } from 'vue-router';
import FormList from '../views/FormList.vue';
import PreviewPage from '../views/PreviewPage.vue';

const routes = [
    { path: '/', name: 'form-list', component: FormList },
    { path: '/preview', name: 'preview', component: PreviewPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
