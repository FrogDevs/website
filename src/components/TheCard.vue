<script setup lang="ts">
    interface Props {
        title: string,
        content: string,
        link: string,
        bgColor?: boolean
    }

    const props = withDefaults(defineProps<Props>(), {
        bgColor: true
    })
</script>
<template>
    <a 
        w="18.375rem xl:25rem" h="18.375rem" b 
        un-border="gray @dark:darkGraySm hover:green" rounded="0.781rem" 
        font="poppins" bg="light @dark:dark" cursor-pointer
        :href="props.link" 
        target="_blank" 
        rel="noopener noreferrer" 
    >
        <div :class="bgColor ? 'card' : 'card2'" h-full w-full py="2.188rem" px="1.375rem" 
            items-center justify-center text-center gap="0.625rem" 
            rounded="0.781rem"
        >
            <h2 text="2.604rem black @dark:light">{{ props.title }}</h2>
            <p text="1.25rem gray @dark:darkGraySd">{{ props.content }}</p>
        </div>
    </a>
</template>
<style scoped>
    .card {
        background: rgb(255,247,248);
        background: linear-gradient(143.15deg, #00FF87 8.37%, rgba(255, 247, 248, 1) 91.49%);
    }
    .card2 {
        background: rgb(255,247,248);
        background: linear-gradient(300deg, #60EFFF 0%, rgba(255, 247, 248, 1) 100%);
    }
    
    @media (prefers-color-scheme: dark) {
        .card {
            background: rgb(0,8,7);
            background: linear-gradient(143.15deg, #00FF87 8.37%, rgba(96, 239, 255, 0) 91.49%);
        }
        .card2 {
            background: rgb(0,8,7);
            background: linear-gradient(300deg, #60EFFF 0%, rgba(0, 163, 255, 0) 100%);
        }
    }
</style>