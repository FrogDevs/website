<script setup lang="ts">
import TheCard from './TheCard.vue'
import MemberCard from './MemberCard.vue'
</script>
<template>
    <main flex justify-center relative z="10" overflow-hidden>
        <img class="hidden lg:block" absolute z="0" top="-15rem" h="50rem" src="src/assets/wave.svg" alt="">
        <div relative z="10" px="2.063rem lg:11.25rem" pt="2.063rem sm:0">
            <!-- cards -->
            <div items-center justify-center lg:flex-row gap="2.063rem">
                <TheCard />
                <TheCard />
            </div>
            <!-- cliente -->
            <div my="2.5rem md:3.125rem" gap="0.781rem" text-center>
                <p font="poppins" text="1.563rem #404545" leading="2.813rem">Serviços prestados a empresa</p>
                <h2 font="ptserif 700" text="3.125rem black" leading="3.75rem">Equilíbrio Natural</h2>
                <!-- background gradient -->
                <hr class="bg-radial" mt="1.563rem" h="0.313rem" b-none>
            </div>
            <!-- Integrantes -->
            <div font="poppins" text="center" gap="2.063rem md:3.125rem">
                <p text="1.563rem #404545">Integrantes</p>
                <!-- cards-membros -->
                <div class="2xl:flex 2xl:flex-row 2xl:gap-[3.038rem]" sm:grid grid-cols-2 lg:grid-cols-3 gap="0.938rem" justify-center>
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                </div>
            </div>
            <div my="3.125rem" gap="1rem" text="1.563rem #404545 center">
                <p>“Você deve ter paixão por uma ideia ou problema que quer resolver. Se você não tem paixão suficiente desde o começo, não vai aguentar a pressão.”</p>
                <p>Steve Jobs</p>
            </div>
        </div>
        <div class="steveJobs" absolute z="0" bottom="0" h="5rem" w-full></div>
    </main>
</template>
<style scoped>
    .steveJobs {
        background: linear-gradient(89.8deg, rgba(0, 255, 135, 0.5) 0.3%, rgba(96, 239, 255, 0.5) 99.96%);
        filter: blur(140.21px);
    }

    .bg-radial {
        background: rgb(255,247,248);
        background: radial-gradient(50% 50% at 50% 50%, #00FF87 0%, rgba(217, 217, 217, 0) 100%);
    }
</style>