<template>
  <div
    class="flex w-full relative flex-col-reverse md:flex-row pr-5 md:pr-0"
    :class="{ 'md:flex-row-reverse': reverse }"
  >
    <div
      class="bg-gray-200 py-5 pl-20 pr-10 md:my-16 mb-16 ml-16 md:ml-0 side-card"
      :style="{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50px',
      }"
    >
      <h3
        class="text-xl md:text-2xl border-b border-gray-300 pb-3 mb-5 font-medium"
      >
        {{ cardTitle }}
      </h3>
      <div v-html="cardDescription"></div>
    </div>
    <div class="mid-card absolute left-2 md:relative">
      <div
        class="circle"
        :class="{ 'is-active': isActive, 'is-current': stage === currentStage }"
      ></div>
      <div class="line" :style="{ width: '2px' }"></div>
      <div
        class="active-line"
        :class="{ 'is-full': fullyActive }"
        v-if="isActive"
      ></div>
    </div>
    <div
      class="side-card md:my-16 ml-16 mb-5 md:mb-0 md:ml-0"
      :class="{ 'md:text-right': reverse }"
    >
      <h3 class="text-xl md:text-3xl font-medium md:mb-2">{{font}} {{ stage }}</h3>
      <div class="text-lg md:text-2xl text-gray-600">{{ title }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    cardTitle: {
      type: String,
      required: true,
    },
    cardDescription: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    stage: {
      type: Number,
      required: true,
    },
    currentStage: {
      type: Number,
      required: true,
    },
    reverse: {
      type: Boolean,
    },
	font:{
		type:String
	}
  },

  setup({ stage, currentStage }) {
    const isActive = computed(() => {
      return currentStage >= stage
    })
    const fullyActive = computed(() => {
      return currentStage > stage
    })
    return {
      isActive,
      fullyActive,
    }
  },
})
</script>

<style scoped>
@screen md {
  .side-card {
    width: calc((100% - 70px) / 2);
  }
}

.mid-card {
  width: 70px;
  top: 0;
  bottom: 0;
}

.line {
  background-color: #ccc;
  width: 2px;
  position: absolute;
  height: 100%;
  z-index: 1;
  transform: translateX(-50%);
  @apply inset-x-1/2;
}

.active-line {
  background-image: linear-gradient(
    180deg,
    rgba(247, 234, 252, 1) 0%,
    rgba(247, 234, 252, 1) 10%,
    rgba(216, 140, 247, 1) 41%,
    rgba(210, 106, 253, 1) 100%
  );
  width: 2px;
  height: 50%;
  position: absolute;
  z-index: 2;
  transform: translateX(-50%);
  @apply inset-x-1/2;
}

.active-line.is-full {
  height: 100%;
}

.circle {
  transform: translateX(-50%);
  z-index: 3;
  @apply bg-white;
  @apply w-4 h-4;
  @apply rounded-full;
  @apply border-2;
  @apply border-gray-300;
  @apply absolute;
  @apply inset-1/2;
}

.circle.is-active {
  background-color: #d26afd;
  @apply border-2;
  @apply border-white;
}

.circle.is-current {
  box-shadow: rgb(234 234 234 / 50%) 0px 0px 0px 8px;
}
</style>
