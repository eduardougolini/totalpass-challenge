<template>
  <div class="footer">
    <div
      class="dot"
      v-for="step in totalSteps"
      :key="step"
      :class="{ active: step === actualStep }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'FooterSteps',
  props: {
    totalSteps: {
      type: Number,
      required: false,
      default: () => 3,
    },
    actualStep: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
  .footer {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 100%;
  }

  .dot {
    height: 5px;
    width: 5px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }

  .dot.active {
    background-color: #00BA9F;
  }
</style>
