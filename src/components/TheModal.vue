<script setup lang="ts">
const props = defineProps<{
    content: string
}>();

const emit = defineEmits(['disableModal']);

function closeIfOutside() {
    const myModal: HTMLDivElement | null = document.querySelector('#myModal');
    const rect = myModal!.getBoundingClientRect();

    // modal size
    const modalWidth: number = rect.x + 400
    const modalHeight: number = rect.y + 400

    document.addEventListener('click', (e) => {
        const cursorX = e.pageX;
        const cursorY = e.pageY;

        // emit if click outside the modal
        if (cursorX < rect.x || cursorX > modalWidth || cursorY < rect.y || cursorY > modalHeight) {
            emit('disableModal');
        }
    })
}
</script>
<template>
    <div 
        fixed z="30" h-screen w-screen 
        items-center justify-center
        @click="closeIfOutside()"
    >
        <div
            id="myModal"
            relative h="25rem" w="25rem" p="2.188rem" rounded="1.563rem"
            font="poppins" text="dark @dark:light" bg="light @dark:dark"
        >
            <div v-if="props.content === 'lang'" flex-auto gap="1.563rem">
                <h1 text="1.875rem bold">Mude o idioma</h1>
                <div text="1.563rem" gap="0.625rem">
                    <p w-fit text="hover:green" cursor-pointer>Português</p>
                    <p w-fit text="hover:green" cursor-pointer>Inglês</p>
                </div>
            </div>
            <div v-else flex-auto gap="1.563rem">
                <h1 text="1.875rem bold">Mude o tema</h1>
                <div text="1.563rem" gap="0.625rem">
                    <p w-fit text="hover:green" cursor-pointer>Sistema</p>
                    <p w-fit text="hover:green" cursor-pointer>Claro</p>
                    <p w-fit text="hover:green" cursor-pointer>Escuro</p>
                </div>
            </div>
            <div h-fit>
                <p 
                    text="1.563rem green hover:blue" cursor-pointer
                    @click="$emit('disableModal')"
                >
                    Cancelar [Esc]
                </p>
            </div>
        </div>
    </div>
</template>