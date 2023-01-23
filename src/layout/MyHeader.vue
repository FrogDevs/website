<script setup lang="ts">
import HeaderEffect from '../components/HeaderEffect.vue';
import TheMenu from '../components/TheMenu.vue';
import TheModal from '../components/TheModal.vue';

let enableMenu: boolean = $ref(false);
let enableModal: boolean = $ref(false);
let modalContent: string = $ref('');

function enableMyModal(content: string) {
    enableModal = true
    modalContent = content
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        enableModal = false;
    };
})
</script>
<template>
    <header flex flex-col w-full min-h="27.5rem" items-center>
        <nav 
            :class="enableMenu ? 'bg-light dark:bg-dark' : 'backdrop-blur-md'" 
            fixed z="20" flex flex-col w-full
        >
            <div
                class="dark:border-darkGray"
                flex-row h="4.688rem" p="1.375rem" 
                items-center justify-between un-border="gray" 
                b-b="0.1rem"
            >
                <div flex="row" items-center gap="0.781rem">
                    <img src="../assets/logo.svg" alt="logo">
                    <p
                        class="dark:text-light"
                        font="poppins 700" text="1.563rem dark" 
                        uppercase
                    >
                        frogdevs
                    </p>
                </div>
                <div flex-row gap="1.563rem">
                    <i
                        :class="enableMenu ? 'ri-close-line' : 'ri-menu-line'"
                        class="ri-2x" 
                        sm:hidden 
                        cursor-pointer 
                        text-green 
                        @click="enableMenu = !enableMenu"
                    />
                    <i 
                        class="ri-eye-2-line ri-2x hidden sm:block" 
                        cursor-pointer text-green 
                        @click="enableMyModal('theme')"
                    />
                    <i 
                        class="ri-earth-line ri-2x hidden sm:block" 
                        cursor-pointer text-green
                        @click="enableMyModal('lang')"
                    />
                    <a 
                        class="ri-github-fill ri-2x hidden sm:block"
                        href="https://github.com/FrogDevs" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        cursor-pointer text-green
                    />
                    <a 
                        class="ri-instagram-line ri-2x hidden sm:block" 
                        href="https://www.instagram.com/frogdevs" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        cursor-pointer text-green
                    />
                </div>
            </div>
            <TheMenu v-if="enableMenu" />
        </nav>
        <div w-full overflow-hidden>
            <!-- hero -->
            <div 
                relative z="10" mt="4.688rem sm:4.688rem" 
                pt="1rem sm:2.063rem" px="2.063rem" 
                items-center
            >
                <div 
                    h="sm:12.5rem" items-center sm:justify-center 
                    font="poppins" text="center" gap="0.625rem"
                >
                    <h1 
                        class="animation--disabled dark:text-light" 
                        font="700" text="3.042rem dark" 
                        leading="3.75rem"
                    >
                        Inovando o futuro
                    </h1>
                    <p 
                        class="animation--disabled dark:text-darkGray"
                        text="1.563rem gray" 
                        leading="2.813rem" w="sm:2/3 md:2/4"
                    >
                        FrogDevs transforma ideias em realidade com talento e dedicação.</p>
                </div>
            </div>
            <HeaderEffect absolute z="0" w="full" h="44.125rem" />
        </div>
    </header>
    <TheModal 
        v-if="enableModal" 
        :content="modalContent" 
        @disableModal="enableModal = false" 
    />
</template>