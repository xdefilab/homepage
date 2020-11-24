<template>
  <div class="bg-white text-gray-900 flex md:flex-col h-56 md:h-auto">
    <img :src="image" class="w-56 h-auto md:w-auto" />
    <div class="px-5 py-8 md:text-center w-full">
      <h3 class="text-3xl font-medium mb-3">{{ title }}</h3>
      <div v-html="subtitle"></div>
      <div class="mt-5">
        <a :href="link || '#'" class="button uppercase">{{
          ready ? `launch ${title}` : 'release soon'
        }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    ready: {
      type: Boolean,
    },
    link: {
      type: String,
    },
  },
})
</script>
