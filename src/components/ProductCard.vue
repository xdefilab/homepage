<template>
  <div class="bg-white text-gray-900 flex md:flex-col h-32 md:h-auto">
    <img :src="image" class="w-32 h-auto md:w-auto" />
    <div class="px-5 py-2 md:py-10 md:text-center w-full">
      <h3 class="text-lg md:text-3xl font-medium mb-0 md:mb-3">{{ title }}</h3>
      <div class="text-xs md:text-base" v-html="subtitle"></div>
      <div class="mt-2 md:mt-8">
        <a
          :href="link || '#'"
          class="border bg-brand text-white border-gray-400 hover:bg-transparent  hover:border-brand hover:text-brand px-3 py-1 text-xs uppercase md:py-3 md:text-base md:px-5"
          >{{ ready ? font.split(',')[0] : font.split(',')[1] }}</a
        >
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
	font: {
	  type: String,
	},
  },
})
</script>
