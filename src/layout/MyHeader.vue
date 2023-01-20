<script setup lang="ts">
import HeaderEffect from '../components/HeaderEffect.vue';
import TheMenu from '../components/TheMenu.vue';

const closeMenu: Boolean = $ref(false);
</script>
<template>
    <header flex flex-col w-full min-h="27.5rem" items-center>
        <nav :class="closeMenu ? 'bg-dark' : 'backdrop-blur-md'" fixed z="20" flex flex-col w-full>
            <div flex-row h="4.688rem" p="1.375rem" items-center justify-between un-border="gray @dark:darkGray" b-b="0.1rem">
                <div flex="row" items-center gap="0.781rem">
                    <img src="src/assets/logo.svg" alt="logo">
                    <p font="poppins 700" text="1.563rem dark @dark:light" uppercase>frogdevs</p>
                </div>
                <div flex-row gap="1.563rem">
                    <i
                        :class="closeMenu ? 'ri-close-line' : 'ri-menu-line'"
                        class="ri-2x" 
                        sm:hidden 
                        cursor-pointer 
                        text-green 
                        @click="closeMenu = !closeMenu"
                    />
                    <i class="ri-eye-2-line ri-2x hidden sm:block" cursor-pointer text-green />
                    <i class="ri-earth-line ri-2x hidden sm:block" cursor-pointer text-green />
                    <i class="ri-github-fill ri-2x hidden sm:block" cursor-pointer text-green />
                    <i class="ri-instagram-line ri-2x hidden sm:block" cursor-pointer text-green />
                </div>
            </div>
            <TheMenu v-if="closeMenu" />
        </nav>
        <div w-full overflow-hidden>
            <!-- hero -->
            <div relative z="10" mt="4.688rem sm:4.688rem" pt="1rem sm:2.063rem" px="2.063rem" items-center>
                <div h="sm:12.5rem" items-center sm:justify-center font="poppins" text="center" gap="0.625rem">
                    <h1 font="700" text="3.042rem dark @dark:light" leading="3.75rem">Inovando o futuro</h1>
                    <p text="1.563rem gray @dark:darkGray" leading="2.813rem" w="sm:2/3 md:2/4">FrogDevs transforma ideias em realidade com talento e dedicação.</p>
                </div>
            </div>
            <HeaderEffect absolute z="0" w="full" h="44.125rem" />
        </div>
    </header>
</template>