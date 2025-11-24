<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Cryptocurrency List</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Cryptocurrency List</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="ion-padding ion-text-center">
        <ion-button color="primary" @click="fetchCryptoData" :disabled="loading">
          Refresh
        </ion-button>
      </div>

      <div v-if="loading" class="ion-padding ion-text-center">
        <ion-spinner name="crescent"></ion-spinner>
        <p>Memuat data...</p>
      </div>

      <div v-if="error" class="ion-padding ion-text-center">
        <ion-card color="danger">
          <ion-card-header>
            <ion-card-title>Error</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            {{ error }}
          </ion-card-content>
        </ion-card>
      </div>

      <div v-if="cryptos.length > 0" class="crypto-list-container">
        <div v-for="crypto in cryptos" :key="crypto.id" class="crypto-row">
          <div class="crypto-cell rank">Rank<br><span>{{ crypto.rank }}</span></div>
          <div class="crypto-cell name">{{ crypto.name }}<br><span>{{ crypto.symbol }}</span></div>
          <div class="crypto-cell price">USD<br><span>{{ formatPrice(crypto.price_usd) }}</span></div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSpinner, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';

interface Crypto {
  id: string;
  rank: string;
  name: string;
  symbol: string;
  price_usd: string;
}

const cryptos = ref<Crypto[]>([]);
const loading = ref(false);
const error = ref('');

const fetchCryptoData = async () => {
  loading.value = true;
  error.value = '';
  try {
    const response = await fetch('https://api.coinlore.net/api/tickers/');
    if (!response.ok) throw new Error('Gagal mengambil data');
    const data = await response.json();
    if (data && data.data) {
      cryptos.value = data.data.map((item: any) => ({
        id: item.id,
        rank: item.rank,
        name: item.name,
        symbol: item.symbol,
        price_usd: item.price_usd
      }));
    } else {
      throw new Error('Format data tidak sesuai');
    }
  } catch (err: any) {
    error.value = err.message || 'Terjadi kesalahan';
  } finally {
    loading.value = false;
  }
};

const formatPrice = (price: string) => {
  return Number(price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 });
};

onMounted(() => {
  fetchCryptoData();
});
</script>

<style scoped>
.crypto-list-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 8px 16px 8px;
}
.crypto-row {
  display: flex;
  background: #fff7e6;
  border: 1px solid #e0c97f;
  color: black;
  border-radius: 8px;
  padding: 8px 0;
  margin-bottom: 2px;
  font-size: 1.1em;
  align-items: center;
  justify-content: space-between;
}
.crypto-cell {
  flex: 1;
  text-align: center;
  font-weight: 500;
}
.crypto-cell span {
  display: block;
  font-size: 1.3em;
  font-weight: bold;
  margin-top: 2px;
}
.rank {
  max-width: 60px;
}
.name {
  max-width: 120px;
}
.price {
  max-width: 120px;
}
</style>
