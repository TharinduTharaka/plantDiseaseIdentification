<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Add Disease</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
          <ion-item>
            <ion-label position="floating">Title</ion-label>
            <ion-input v-model="enteredTitle" required type="text"/>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <ion-img :src="previewImage"/>
            </ion-thumbnail>
            <ion-button fill="clear" type="button" @click="takePhoto">
              <ion-icon slot="start" :icon="camera"/>
              Take Photo
            </ion-button>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Description</ion-label>
            <ion-textarea v-model="enteredDescription"/>
          </ion-item>
        </ion-list>
        <ion-button expand="block" type="submit">save</ion-button>
      </form>

    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

import {Camera, CameraResultType} from '@capacitor/camera';
import {camera} from 'ionicons/icons';

export default {
  emits: ['save-memory'],
  components: {
    IonButtons, IonInput, IonTextarea, IonItem, IonList, IonLabel,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  },
  data() {
    return {
      id:'',
      enteredTitle: '',
      enteredDescription: '',
      previewImage: ''
    }
  },
  setup() {
    return {
      camera,
    }
  },
  computed:{
    memories(){
      return this.$store.getters.memories;
    }
  },
  methods: {
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        quality: 60,
        allowEditing: true,
      });

      this.previewImage = photo.webPath;
      console.log(this.previewImage);
    },
    async submitForm() {
      const memoryData = {
        id:new Date().toISOString(),
        title: this.enteredTitle,
        image: this.previewImage,
        description: this.enteredDescription
      };
      console.log(memoryData);
      this.$store.dispatch('addMemory',memoryData);
      await this.$router.push(`/add_disease_details/${memoryData.id}`);
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