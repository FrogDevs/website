<script setup lang="ts">

const date = new Date;
const year = date.getFullYear();

</script>
<template>
    <footer flex flex-col items-center py="3.75rem" px="1.375rem" gap="1.563rem" un-border="#404545" b-t>
        <div items-center gap="0.781rem">
            <div flex="row" items-center gap="0.781rem">
                <img src="src/assets/logo.svg" alt="logo">
                <p font="poppins 700" text="1.563rem" uppercase>frogdevs</p>
            </div>
            <p font="poppins" text="1.25rem center #404545">© {{ year }} Frogdevs, Inc. Todos os direitos reservados.</p>
        </div>
        <p font="poppins" text="1.25rem center #404545">TCC em Análise e Desenvolvimento de Sistemas - ETEC Jardim Ângela.</p>
    </footer>
</template>