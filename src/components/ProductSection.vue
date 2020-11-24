<template>
  <div
    class="bg-white text-gray-900 py-16 md:py-32 product-section"
    :style="{
      'background-image': wave
        ? `url('${wave === 'up' ? waveUpBg : waveDownBg}')`
        : 'none',
      backgroundSize: '100% 570px',
      backgroundPosition: wave === 'up' ? 'top' : 'bottom',
      backgroundRepeat: 'repeat-x',
    }"
  >
    <div class="max-w-6xl mx-auto px-5">
      <div
        class="flex flex-col-reverse text-center md:text-left md:flex-row"
        :class="{ 'md:flex-row-reverse': reverse }"
      >
        <div class="md:w-6/12 flex items-center">
          <div>
            <div class="text-xl md:text-4xl font-medium">{{ title }}</div>
            <div class="mt-3 md:text-xl text-gray-600" v-html="subtitle"></div>
            <div
              class="mt-8 flex justify-center"
              :class="{
                'md:justify-end': !reverse,
                'md:justify-start': reverse,
              }"
            >
              <a :href="link" class="button">
                <span class="mr-1">Launch</span>
                <svg
                  class="w-6 h-6"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  /></svg
              ></a>
            </div>
          </div>
        </div>
        <div
          class="text-center md:w-6/12"
          :class="{ 'md:text-right': !reverse }"
        >
          <img
            :src="image"
            :alt="title"
            class="mb-10 w-32 md:w-9/12 md:mb-0 inline-block"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import waveUpBg from '../images/wave_up_bg.png'
import waveDownBg from '../images/wave_down_bg.png'

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
    reverse: {
      type: Boolean,
    },
    wave: {
      type: String,
    },
    link: {
      type: String,
      required: true,
    },
  },

  setup() {
    return {
      waveUpBg,
      waveDownBg,
    }
  },
})
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .product-section {
    background-image: none !important;
  }
}
</style>
