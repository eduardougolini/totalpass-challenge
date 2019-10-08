<template>
  <div class="registration-completed">
    <RegisterHeader />
    <RegistrationCompletedInfo />
    <FooterSteps :actualStep="3" />
  </div>
</template>

<script>
import RegisterHeader from '@/containers/RegisterHeader';
import FooterSteps from '@/components/FooterSteps';
import RegistrationCompletedInfo from '@/components/RegistrationCompletedInfo';

export default {
  name: 'RegistrationCompleted',
  components: {
    RegisterHeader,
    FooterSteps,
    RegistrationCompletedInfo,
  },
};
</script>
