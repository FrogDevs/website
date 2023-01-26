<script setup lang="ts">

const date = new Date;
const year = date.getFullYear();

</script>
<template>
    <footer 
        class="dark:border-darkGray"
        flex flex-col items-center py="3.75rem" px="1.375rem" 
        gap="1.563rem" un-border="gray" b-t
    >
        <div flex="row" items-center gap="0.781rem">
            <img src="../assets/logo.png" alt="logo" h="3rem">
            <p
                class="animation--disabled dark:text-light"
                font="poppins 700" text="1.563rem dark" 
                uppercase
            >
                frogdevs
            </p>
        </div>
        <p
            class="animation--disabled dark:text-darkGraySd"
            font="poppins" text="1.25rem center gray"
        >
            © {{ year }} Frogdevs, Inc. {{ $t('footer.copy') }}
        </p>
        <p
            class="animation--disabled dark:text-darkGraySd"
            font="poppins" text="1.25rem center gray"
        >
            {{ $t('footer.course') }} - ETEC Jardim Ângela.
        </p>
    </footer>
</template>