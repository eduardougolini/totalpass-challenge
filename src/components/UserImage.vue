<template>
  <div class="content">
    <img v-if="userData.image" class="user-image" :src="userData.image">
    <img v-else class="user-image" src="@/assets/user-default-image.svg">
    <button @click="chooseFiles">ENVIAR FOTO</button>
    <input
      id="send-user-image"
      type="file"
      @change="sendUserImage"
      accept="image/*"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { TOTAL_PASS } from '@/store/modules';

export default {
  name: 'UserImage',
  computed: {
    ...mapState(TOTAL_PASS, [
      'userData',
    ]),
  },
  methods: {
    ...mapActions(TOTAL_PASS, [
      'setUserImage',
    ]),
    chooseFiles() {
      document.getElementById('send-user-image').click();
    },
    sendUserImage(e) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (ev) => {
        this.setUserImage(ev.target.result);
      };
    },
  },
};
</script>

<style scoped>
  .content {
    display: flex;
    justify-content: start;
    align-items: center;
    padding-top: 30px;
    width: 80%;
    margin: auto;
  }

  .user-image {
    margin-right: 13px;
    width: 73px;
    height: 73px;
    object-fit: scale-down;
    image-orientation: from-image;
  }

  #send-user-image {
    display: none;
  }

  button {
    border: 1px solid #00BA9F;
    background-color: #F7FAFA;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: #00BA9F;
    border-radius: 50px;
    height: 40px;
    padding: 10px 32px;
  }
</style>
