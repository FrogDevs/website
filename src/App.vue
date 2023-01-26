<script setup lang="ts">
import { onMounted } from "vue";
import MyHeader from "./layout/MyHeader.vue";
import MyMain from "./layout/MyMain.vue";
import MyFooter from "./layout/MyFooter.vue";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation--enabled");
    } else {
      entry.target.classList.remove("animation--enabled");
    }
  });
});

onMounted(() => {
  const hiddenElements = document.querySelectorAll(".animation--disabled");
  hiddenElements.forEach((el) => {
    observer.observe(el);
  });
});
</script>
<template>
  <div class="dark:bg-dark" bg="light">
    <MyHeader />
    <MyMain />
    <MyFooter />
  </div>
</template>
<style>
.animation--disabled {
  opacity: 0;
  transition: all 1s;
}
.animation--enabled {
  opacity: 1;
  transition: all 1s;
}

.member:nth-child(2) {
  transition-delay: 100ms;
}
.member:nth-child(3) {
  transition-delay: 300ms;
}
.member:nth-child(4) {
  transition-delay: 500ms;
}
.member:nth-child(5) {
  transition-delay: 700ms;
}

@media (prefers-reduced-motion) {
  .animation--disabled {
    transition: none;
  }
  .animation--enabled {
    transition: none;
  }
}
</style>
