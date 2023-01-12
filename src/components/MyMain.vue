<script setup lang="ts">
import TheCard from './TheCard.vue'
import MemberCard from './MemberCard.vue'
</script>
<template>
    <main flex="col" px="2.063rem" pt="1.875rem">
        <!-- cards -->
        <div gap="2.063rem">
            <TheCard />
            <TheCard />
        </div>
        <!-- cliente -->
        <div my="3.125rem" gap="0.781rem" text-center>
            <p font="poppins" text="1.563rem #404545" leading="2.813rem">Serviços prestados a empresa</p>
            <h2 font="ptserif 700" text="3.125rem black" leading="3.75rem">Equilíbrio Natural</h2>
            <!-- background gradient -->
            <hr mt="1.563rem" h="0.313rem" b-none bg-green>
        </div>
    </main>
</template>