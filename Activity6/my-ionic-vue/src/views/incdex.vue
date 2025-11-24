<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Data Cuaca Jakarta</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Data Cuaca Jakarta</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- Loading State -->
      <div v-if="loading" class="ion-padding ion-text-center">
        <ion-spinner name="crescent"></ion-spinner>
        <p>Memuat data cuaca...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="ion-padding">
        <ion-card color="danger">
          <ion-card-header>
            <ion-card-title>Error</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            {{ error }}
          </ion-card-content>
        </ion-card>
        <ion-button expand="block" @click="fetchWeatherData">
          Coba Lagi
        </ion-button>
      </div>

      <!-- Weather Data -->
      <div v-else-if="weatherData.length > 0" class="ion-padding">
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>Prakiraan Cuaca Per Jam</ion-card-subtitle>
            <ion-card-title>Jakarta, Indonesia</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>Latitude: {{ latLong?.lat }}°, Longitude: {{ latLong?.long }}°</p>
            <p>Total Data: {{ weatherData.length }} jam</p>
          </ion-card-content>
        </ion-card>

        <ion-list>
          <ion-list-header>
            <ion-label>Waktu & Temperatur</ion-label>
          </ion-list-header>
          
          <ion-item v-for="(item, index) in weatherData" :key="index">
            <ion-icon :icon="thermometerOutline" slot="start" color="primary"></ion-icon>
            <ion-label>
              <h2>{{ formatDateTime(item.time) }}</h2>
              <p>{{ formatDate(item.time) }}</p>
            </ion-label>
            <ion-badge slot="end" :color="getTemperatureColor(item.temperature)">
              {{ item.temperature }}°C
            </ion-badge>
          </ion-item>
        </ion-list>

        <div class="ion-padding">
          <ion-button expand="block" @click="fetchWeatherData" fill="outline">
            <ion-icon :icon="refreshOutline" slot="start"></ion-icon>
            Refresh Data
          </ion-button>
        </div>
      </div>

      <!-- No Data -->
      <div v-else class="ion-padding ion-text-center">
        <p>Tidak ada data cuaca tersedia.</p>
        <ion-button @click="fetchWeatherData">Muat Data</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonBadge,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonSpinner,
  IonIcon
} from '@ionic/vue';
import { thermometerOutline, refreshOutline } from 'ionicons/icons';

// Interface untuk tipe data cuaca
interface WeatherDataItem {
  time: string;
  temperature: number;
}

// State management
const weatherData = ref<WeatherDataItem[]>([]);
const loading = ref(false);
const error = ref('');
const latLong = ref({ lat: null, long: null });

// API URL
const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m';

// Fetch weather data from API
const fetchWeatherData = async () => {
  loading.value = true;
  error.value = '';
  
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error('Gagal mengambil data cuaca');
    }
    
    const data = await response.json();
    console.log("data respon", data)
    
    // Mapping data API ke format yang lebih mudah digunakan
    if (data.hourly && data.hourly.time && data.hourly.temperature_2m) {
      latLong.value = {
        lat: data.latitude,
        long: data.longitude
      };
      weatherData.value = data.hourly.time.map((time: string, index: number) => ({
        time: time,
        temperature: data.hourly.temperature_2m[index]
      }));
    } else {
      throw new Error('Format data tidak sesuai');
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Terjadi kesalahan yang tidak diketahui';
    console.error('Error fetching weather data:', err);
  } finally {
    loading.value = false;
  }
};

// Format tanggal dan waktu
const formatDateTime = (dateTimeString: string): string => {
  const date = new Date(dateTimeString);
  return date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};

const formatDate = (dateTimeString: string): string => {
  const date = new Date(dateTimeString);
  return date.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Menentukan warna badge berdasarkan suhu
const getTemperatureColor = (temp: number): string => {
  if (temp < 20) return 'primary';
  if (temp < 25) return 'success';
  if (temp < 30) return 'warning';
  return 'danger';
};

// Load data saat komponen dimount
onMounted(() => {
  fetchWeatherData();
});
</script>

<style scoped>
ion-card {
  margin-bottom: 16px;
}

ion-list {
  background: transparent;
}

ion-item {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
  margin-bottom: 4px;
}

.ion-text-center {
  text-align: center;
}
</style>
