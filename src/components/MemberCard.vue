<script setup lang="ts">
interface Props {
  name: string;
  role: string;
  link?: string;
  pic?: string;
}

const props = withDefaults(defineProps<Props>(), {
  pic: "",
});

</script>
<template>
  <div class="member animation--disabled" items-center gap="0.625rem md:1rem">
    <a
      :class="props.pic ? 'image' : ''"
      class="dark:border-darkGray hover:border-blue"
      h="12.25rem"
      w="12.25rem"
      b
      un-border="gray"
      transition-colors
      duration-200
      ease-out
      rounded="1.563rem"
      cursor-pointer
      bg-center
      bg-no-repeat
      bg-cover
      :href="props.link"
      target="_blank"
      rel="noopener noreferrer"
    ></a>
    <div font="poppins" text="1.25rem">
      <p class="dark:text-light" text="dark">{{ props.name }}</p>
      <p text-blue>{{ props.role }}</p>
    </div>
  </div>
</template>
<style scoped>
  .image {
    background-image: url("../assets/vinicius.avif");
  }
</style>
