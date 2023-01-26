<script setup lang="ts">
import TheCard from '../components/TheCard.vue'
import MemberCard from '../components/MemberCard.vue'
import MainEffect from '../components/MainEffect.vue';
</script>
<template>
    <main flex flex-col justify-center relative z="10" overflow-hidden>
        <div pt="2.063rem sm:0" items-center w-full>
            <!-- cards -->
            <div relative z="10" items-center justify-center md:flex-row gap="2.063rem">
                <TheCard 
                    :title="$t('main.card.firstTitle')"
                    :content="$t('main.card.firstMessage')"
                    link="https://github.com/FrogDevs/equilibrionatural-controle_estoque"
                />
                <TheCard
                    title="Website"
                    :content="$t('main.card.secondMessage')"
                    link="https://github.com/FrogDevs/equilibrionatural-website"
                />
            </div>
            <MainEffect 
                class="lg:block" absolute z="0" 
                top="-10rem xl:-5rem" h="50rem" w-full  
            />
        </div>
        <div mt="lg:10rem xl:20rem" px="2.063rem lg:11.25rem">
            <!-- cliente -->
            <div mt="2.5rem md:3.125rem" gap="0.781rem" text-center>
                <p
                    class="animation--disabled dark:text-darkGray"
                    font="poppins" text="1.563rem gray" 
                    leading="2.813rem"
                >
                    {{ $t('main.clientTitle') }}
                </p>
                <h2
                    class="animation--disabled dark:text-darkGraySd"
                    font="ptserif 700" text="3.125rem black" 
                    leading="3.75rem"
                >
                    Equilíbrio Natural
                </h2>
                <hr class="bg-radial" mt="2.5rem" h="0.313rem" b-none>
            </div>
            <!-- Integrantes -->
            <div font="poppins" text="center" mt="2.5rem md:3rem" gap="2.063rem md:3.125rem">
                <p class="animation--disabled dark:text-darkGray" text="1.563rem gray">
                    {{ $t('main.membersTitle') }}
                </p>
                <!-- cards-membros -->
                <div 
                    class="2xl:flex 2xl:flex-row" sm:grid grid-cols-2 lg:grid-cols-3 
                    gap="1.563rem 2xl:3.038rem" justify-items-center justify-center
                >
                    <MemberCard name="Helena Costa" role="Design" />
                    <MemberCard name="Italo Santos" :role="$t('main.members.documentation')" />
                    <MemberCard name="João Oliveira" role="Design" />
                    <MemberCard name="Leandro Eduardo" :role="$t('main.members.documentation')" />
                    <MemberCard 
                        name="Vinícius Costa" 
                        :role="$t('main.members.vinicius')" 
                        link="https://vinicius-costa-links.vercel.app/" 
                    />
                </div>
            </div>
            <div
                class="dark:text-darkGraySd" 
                my="3.125rem" gap="1rem" text="1.563rem gray center"
            >
                <p class="animation--disabled">
                    {{ $t('main.stevejobs') }}
                </p>
                <p class="animation--disabled">Steve Jobs</p>
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