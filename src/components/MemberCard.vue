<script setup lang="ts">
    interface Props {
        name: string,
        role: string,
        pic?: string
    }

    const props = withDefaults(defineProps<Props>(), {
        pic: ''
    })
</script>
<template>
    <div items-center gap="0.625rem md:1rem">
        <div w="12.25rem" h="12.25rem" b un-border="gray dark:darkGray" rounded="1.563rem"></div>
        <div font="poppins" text="1.25rem">
            <p text="dark @dark:light">{{ props.name }}</p>
            <p text-blue>{{ props.role }}</p>
        </div>
    </div>
</template>