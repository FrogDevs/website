<script setup lang="ts">

const date = new Date;
const year = date.getFullYear();

</script>
<template>
    <footer flex flex-col items-center py="3.75rem" px="1.375rem" gap="1.563rem" un-border="gray @dark:darkGray" b-t>
        <div flex="row" items-center gap="0.781rem">
            <img src="src/assets/logo.svg" alt="logo">
            <p font="poppins 700" text="1.563rem dark @dark:light" uppercase>frogdevs</p>
        </div>
        <p font="poppins" text="1.25rem center gray @dark:darkGraySd">© {{ year }} Frogdevs, Inc. Todos os direitos reservados.</p>
        <p font="poppins" text="1.25rem center gray @dark:darkGraySd">TCC em Análise e Desenvolvimento de Sistemas - ETEC Jardim Ângela.</p>
    </footer>
</template>