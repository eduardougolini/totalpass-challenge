<template>
  <div>
    <VueAgile
      class="slider"
      ref="carousel"
      v-bind="slideOptions"
    >
      <div
        v-for="plan of plans"
        :key="plan.title"
        class="slide-box"
      >
        <img
          class="left-arrow"
          src="@/assets/slider-arrow.svg"
          @click="$refs.carousel.goToPrev()"
        />
        <PlanCard
          :class="'slide'"
          :title="plan.title"
          :subtitle="plan.subtitle"
          :description="plan.description"
          :planValue="plan.planValue"
        />
        <img
          class="right-arrow"
          src="@/assets/slider-arrow.svg"
          @click="$refs.carousel.goToNext()"
        />
      </div>
    </VueAgile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile';

import PlanCard from '@/components/PlanCard';

export default {
  name: 'PlanSlider',
  components: {
    VueAgile,
    PlanCard,
  },
  data() {
    return {
      slideOptions: {
        dots: false,
        navButtons: false,
      },
      plans: [
        {
          title: 'MEGA',
          subtitle: 'PLANO FIT +',
          description: '<b>Bio ritmo:</b> Belém, Limeira, Piracicaba, Shopping Metropolitano, Centro, Chácara Santo Antônio, Continental, Santana, Santo André, São Caetano, Tamboré e West Plaza.',
          planValue: '100',
        },
        {
          title: 'FIT',
          subtitle: 'PLANO FIT ++',
          description: '<b>Bio ritmo:</b> Santo André, Shopping Metropolitano, Tamboré, Santana, Limeira, Piracicaba, Belém, West Plaza, Chácara Santo Antônio, Centro, São Caetano e Continental.',
          planValue: '200',
        },
        {
          title: 'OMEGA',
          subtitle: 'PLANO FIT +++',
          description: '<b>Bio ritmo:</b> West Plaza, Piracicaba, Santo André, Santana, Limeira, Tamboré, Chácara Santo Antônio, São Caetano, Centro, Belém, Continental e Shopping Metropolitano.',
          planValue: '300',
        },
        {
          title: 'BETA',
          subtitle: 'PLANO FIT ++++',
          description: '<b>Bio ritmo:</b> West Plaza, São Caetano, Belém, Chácara Santo Antônio, Santana, Shopping Metropolitano, Tamboré, Limeira, Continental, Santo André, Piracicaba, Centro.',
          planValue: '400',
        },
        {
          title: 'ULTRA',
          subtitle: 'PLANO FIT +++++',
          description: '<b>Bio ritmo:</b> Tamboré, Chácara Santo Antônio, Santana, São Caetano, Limeira, Santo André, Shopping Metropolitano, Centro, West Plaza, Piracicaba, Continental e Belém.',
          planValue: '500',
        },
      ],
    };
  },
};
</script>

<style scoped>
  .slider {
    max-width: 415px;
  }

  .slide-box {
    display: flex;
    justify-content: center;
  }

  .left-arrow,
  .right-arrow {
    margin: 15px;
  }

  .right-arrow {
    transform: rotate(180deg);
  }
</style>
