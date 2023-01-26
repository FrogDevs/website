<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const isDark = useDark();

const t = useI18n();

function changeLang(lang: string) {
  t.locale.value = lang;
}

const props = defineProps<{
  content: string;
}>();

const emit = defineEmits(["disableModal"]);

function closeIfOutside(): void {
  const myModal: HTMLDivElement | null = document.querySelector("#myModal");
  const rect = myModal!.getBoundingClientRect();

  // modal size
  const modalWidth: number = rect.x + 400;
  const modalHeight: number = rect.y + 287.55;

  document.addEventListener("click", (e) => {
    const cursorX = e.pageX;
    const cursorY = e.pageY;

    // emit if click outside the modal
    if (
      cursorX < rect.x ||
      cursorX > modalWidth ||
      cursorY < rect.y ||
      cursorY > modalHeight
    ) {
      emit("disableModal");
    }
  });
}
</script>
<template>
  <div
    fixed
    z="30"
    h-screen
    w-screen
    items-center
    justify-center
    @click="closeIfOutside()"
  >
    <div
      id="myModal"
      class="dark:text-light dark:bg-dark dark:shadow-lg dark:shadow-graySd"
      relative
      h="fit"
      w="25rem"
      p="2.188rem"
      rounded="1.563rem"
      gap="1.563rem"
      font="poppins"
      text="dark"
      bg="light"
      shadow-xl
    >
      <div v-if="props.content === 'lang'" flex-auto gap="1.563rem">
        <h1 text="1.875rem bold">{{ $t("modal.lang.title") }}</h1>
        <div text="1.563rem" gap="0.625rem">
          <p w-fit text="hover:green" cursor-pointer @click="changeLang('pt')">
            {{ $t("modal.lang.firstLang") }}
          </p>
          <p w-fit text="hover:green" cursor-pointer @click="changeLang('en')">
            {{ $t("modal.lang.secondLang") }}
          </p>
        </div>
      </div>
      <div v-else flex-auto gap="1.563rem">
        <h1 text="1.875rem bold">{{ $t("modal.theme.title") }}</h1>
        <div text="1.563rem" gap="0.625rem">
          <p w-fit text="hover:green" cursor-pointer @click="isDark = false">
            {{ $t("modal.theme.firstTheme") }}
          </p>
          <p w-fit text="hover:green" cursor-pointer @click="isDark = true">
            {{ $t("modal.theme.secondTheme") }}
          </p>
        </div>
      </div>
      <div h-fit>
        <p
          text="1.563rem green hover:blue"
          cursor-pointer
          @click="$emit('disableModal')"
        >
          {{ $t("modal.cancel") }} [Esc]
        </p>
      </div>
    </div>
  </div>
</template>
