<script setup lang="ts">
import { useDark } from '@vueuse/core';
import MyHeader from './layout/MyHeader.vue';
import MyMain from './layout/MyMain.vue';
import MyFooter from './layout/MyFooter.vue';

const isDark = useDark({
    selector: 'body',
    attribute: 'color-scheme',
    valueDark: 'dark',
    valueLight: 'light',
})
</script>
<template>
    <div class="dark:bg-dark" bg="light">
        <MyHeader />
        <MyMain />
        <MyFooter />
    </div>
</template>
<style>
    /* selection colored */
    
</style>