<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const isDark = useDark();

const t = useI18n();

function changeLang(lang: string) {
  t.locale.value = lang;
}
</script>
<template>
  <div
    class="bg-light dark:bg-dark"
    h="31.688rem"
    w-full
    py="1.5rem"
    px="2.063rem"
    font="poppins"
    text="1.875rem"
    overflow-y-scroll
  >
    <div gap="0.625rem">
      <h2 class="dark:text-light" font="bold" text="dark">{{ $t("modal.lang.title") }}</h2>
      <div class="dark:text-darkGraySd" text="gray" gap="0.625rem">
        <p hover:text-green cursor-pointer w-fit @click="changeLang('pt')">
          {{ $t("modal.lang.firstLang") }}
        </p>
        <p hover:text-green cursor-pointer w-fit @click="changeLang('en')">
          {{ $t("modal.lang.secondLang") }}
        </p>
      </div>
      <hr
        class="dark:bg-darkGray"
        h="0.125rem"
        my="1.563rem"
        w-full
        b-none
        bg="gray"
      />
    </div>
    <div gap="0.625rem">
      <h2 class="dark:text-light" font="bold" text="dark">{{ $t("modal.theme.title") }}</h2>
      <div class="dark:text-darkGraySd" text="gray" gap="0.625rem">
        <p hover:text-green cursor-pointer w-fit @click="isDark = false">
          {{ $t("modal.theme.firstTheme") }}
        </p>
        <p hover:text-green cursor-pointer w-fit @click="isDark = true">
          {{ $t("modal.theme.secondTheme") }}
        </p>
      </div>
      <hr
        class="dark:bg-darkGray"
        h="0.125rem"
        my="1.563rem"
        w-full
        b-none
        bg="gray"
      />
    </div>
    <div gap="0.625rem">
      <h2 class="dark:text-light" font="bold" text="dark">{{ $t("socialTitle") }}</h2>
      <div class="dark:text-darkGraySd" text="gray" gap="0.625rem">
        <a
          hover:text-green
          w-fit
          href="https://github.com/FrogDevs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          hover:text-green
          w-fit
          href="https://www.instagram.com/frogdevs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <hr
        class="dark:bg-darkGray"
        h="0.125rem"
        my="1.563rem"
        w-full
        b-none
        bg="gray"
      />
    </div>
  </div>
</template>
