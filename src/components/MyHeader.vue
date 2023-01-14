<script setup lang="ts">
import HeaderEffect from './HeaderEffect.vue';
</script>
<template>
    <header relative flex flex-col w-full items-center mb="2.5rem">
        <HeaderEffect />
        <nav fixed z="20" flex h="4.688rem" p="1.375rem" w-full items-center justify-between un-border="#404545" b-b="0.1rem" backdrop-blur-md>
            <div flex="row" items-center gap="0.781rem">
                <p>logo</p>
                <p font="poppins 700" text="1.563rem" uppercase>frogdevs</p>
            </div>
            <i class="ri-menu-line ri-2x" text-green />
        </nav>
        <div relative w-full z="10">
            <!-- hero -->
            <div mt="4.688rem" pt px="2.063rem" items-center>
                <div font="poppins" text="center" gap="0.625rem">
                    <h1 font="700" text="3.042rem black" leading="3.75rem">Inovando o futuro</h1>
                    <p text="1.563rem #404545" leading="2.813rem">FrogDevs transforma ideias em realidade com talento e dedicação.</p>
                </div>
            </div>
        </div>
    </header>
</template>