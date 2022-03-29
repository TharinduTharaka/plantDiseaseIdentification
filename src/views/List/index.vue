<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Disease</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div style="margin-bottom: 1vh;">
        <ion-item v-for="data in memories "
                  button
                  class="ion-padding "
                  @click="() => $router.push(`/add_disease_details/${data.id}`)">
          <ion-thumbnail slot="start">
            <ion-img :src="data.image"/>
          </ion-thumbnail>
          <ion-label> {{ data.title }}</ion-label>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

export default {
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar, IonItem, IonThumbnail, IonImg, IonLabel
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    }
  }
}
</script>

<style scoped>

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>