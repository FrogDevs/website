<script setup lang="ts">
import TheCard from './TheCard.vue'
import MemberCard from './MemberCard.vue'
</script>
<template>
    <main flex flex-col justify-center relative z="10" overflow-hidden>
        <div pt="2.063rem sm:0" items-center w-full>
            <!-- cards -->
            <div relative z="10" items-center justify-center md:flex-row gap="2.063rem">
                <TheCard 
                    title="Aplicação"
                    content="Aplicação multiplataforma para gerenciamento de estoque em 2 unidades"
                />
                <TheCard
                    title="Website"
                    content="Website com formas de contato e disponibilidade de produtos em loja."
                    :bg-color="true"
                />
            </div>
            <img class="hidden lg:block" absolute z="0" top="-10rem xl:-5rem" h="50rem" w-full src="src/assets/wave.svg" alt="waves">
        </div>
        <div mt="lg:10rem xl:20rem" px="2.063rem lg:11.25rem">
            <!-- cliente -->
            <div my="2.5rem md:3.125rem" gap="0.781rem" text-center>
                <p font="poppins" text="1.563rem gray @dark:darkGray" leading="2.813rem">
                    Serviços prestados a empresa
                </p>
                <h2 font="ptserif 700" text="3.125rem black @dark:darkGraySd" leading="3.75rem">Equilíbrio Natural</h2>
                <hr class="bg-radial" mt="1.563rem" h="0.313rem" b-none>
            </div>
            <!-- Integrantes -->
            <div font="poppins" text="center" gap="2.063rem md:3.125rem">
                <p text="1.563rem gray @dark:darkGray">Integrantes</p>
                <!-- cards-membros -->
                <div class="2xl:flex 2xl:flex-row 2xl:gap-[3.038rem]" sm:grid grid-cols-2 lg:grid-cols-3 gap="0.938rem md:1.563rem" justify-center>
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                </div>
            </div>
            <div my="3.125rem" gap="1rem" text="1.563rem gray @dark:darkGraySd center">
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