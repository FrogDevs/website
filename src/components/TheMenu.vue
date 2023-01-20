<script setup lang="ts"></script>
<template>
    <div h="31.688rem" w-full py="1.5rem" px="2.063rem" font="poppins" text="1.875rem" 
        overflow-y-scroll bg-dark
    >
        <div gap="0.625rem">
            <h2 font="bold" text="dark @dark:light">Idioma</h2>
            <div text="gray @dark:darkGraySd" gap="0.625rem">
                <p hover:text-green>Inglês</p>
                <p hover:text-green>Português</p>
            </div>
            <hr h="0.125rem" my="1.563rem" w-full b-none bg="gray @dark:darkGray" />
        </div>
        <div gap="0.625rem">
            <h2 font="bold" text="dark @dark:light">Redes Sociais</h2>
            <div text="gray @dark:darkGraySd" gap="0.625rem">
                <a
                    hover:text-green
                    href="https://github.com/FrogDevs" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                >
                    Github
                </a>
                <a
                    hover:text-green
                    href="https://www.instagram.com/frogdevs" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                >
                    Instagram
                </a>
            </div>
            <hr h="0.125rem" my="1.563rem" w-full b-none bg="gray @dark:darkGray" />
        </div>
        <div gap="0.625rem">
            <h2 font="bold" text="dark @dark:light">Tema</h2>
            <div text="gray @dark:darkGraySd" gap="0.625rem">
                <p hover:text-green>Sistema</p>
                <p hover:text-green>Claro</p>
                <p hover:text-green>Escuro</p>
            </div>
            <hr h="0.125rem" my="1.563rem" w-full b-none bg="gray @dark:darkGray" />
        </div>
    </div>
</template>