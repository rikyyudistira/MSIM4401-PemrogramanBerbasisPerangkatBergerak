// Backend - Node.js dengan Express
// Jalankan: node server.js
// Install dependencies: npm install express cors body-parser

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database simulasi (gunakan MongoDB/PostgreSQL untuk production)
let pegawai = [
  { id: 1, nama: 'Ahmad Fauzi', nip: '123456', password: 'pass123', divisi: 'IT' },
  { id: 2, nama: 'Siti Nurhaliza', nip: '123457', password: 'pass123', divisi: 'HR' },
  { id: 3, nama: 'Budi Santoso', nip: '123458', password: 'pass123', divisi: 'Finance' }
];

let absensi = [];
let nextAbsensiId = 1;

// Lokasi kantor (contoh: koordinat kantor)
const lokasiKantor = {
  lat: -0.3055,
  lng: 100.3692,
  radius: 100 // radius dalam meter
};

// Helper: Hitung jarak antara dua koordinat (Haversine formula)
function hitungJarak(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // radius bumi dalam meter
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

// API Routes

// Login
app.post('/api/login', (req, res) => {
  const { nip, password } = req.body;
  const user = pegawai.find(p => p.nip === nip && p.password === password);
  
  if (user) {
    res.json({
      success: true,
      data: { id: user.id, nama: user.nama, nip: user.nip, divisi: user.divisi }
    });
  } else {
    res.status(401).json({ success: false, message: 'NIP atau password salah' });
  }
});

// Absen masuk
app.post('/api/absen/masuk', (req, res) => {
  const { pegawaiId, lat, lng, foto } = req.body;
  
  // Validasi lokasi
  const jarak = hitungJarak(lat, lng, lokasiKantor.lat, lokasiKantor.lng);
  if (jarak > lokasiKantor.radius) {
    return res.status(400).json({
      success: false,
      message: `Anda berada ${Math.round(jarak)}m dari kantor. Harap absen di lokasi kantor.`
    });
  }

  // Cek apakah sudah absen hari ini
  const today = new Date().toISOString().split('T')[0];
  const sudahAbsen = absensi.find(a => 
    a.pegawaiId === pegawaiId && 
    a.tanggal === today && 
    a.jamMasuk
  );

  if (sudahAbsen) {
    return res.status(400).json({
      success: false,
      message: 'Anda sudah absen masuk hari ini'
    });
  }

  const pegawaiData = pegawai.find(p => p.id === pegawaiId);
  const waktu = new Date();
  const jam = waktu.toTimeString().split(' ')[0];

  const record = {
    id: nextAbsensiId++,
    pegawaiId,
    nama: pegawaiData.nama,
    divisi: pegawaiData.divisi,
    tanggal: today,
    jamMasuk: jam,
    jamKeluar: null,
    lokasiMasuk: { lat, lng },
    lokasiKeluar: null,
    fotoMasuk: foto,
    fotoKeluar: null,
    status: jam > '09:00:00' ? 'Terlambat' : 'Tepat Waktu'
  };

  absensi.push(record);
  res.json({ success: true, message: 'Absen masuk berhasil', data: record });
});

// Absen keluar
app.post('/api/absen/keluar', (req, res) => {
  const { pegawaiId, lat, lng, foto } = req.body;
  
  const jarak = hitungJarak(lat, lng, lokasiKantor.lat, lokasiKantor.lng);
  if (jarak > lokasiKantor.radius) {
    return res.status(400).json({
      success: false,
      message: `Anda berada ${Math.round(jarak)}m dari kantor. Harap absen di lokasi kantor.`
    });
  }

  const today = new Date().toISOString().split('T')[0];
  const record = absensi.find(a => 
    a.pegawaiId === pegawaiId && 
    a.tanggal === today && 
    !a.jamKeluar
  );

  if (!record) {
    return res.status(400).json({
      success: false,
      message: 'Anda belum absen masuk atau sudah absen keluar'
    });
  }

  const waktu = new Date();
  const jam = waktu.toTimeString().split(' ')[0];

  record.jamKeluar = jam;
  record.lokasiKeluar = { lat, lng };
  record.fotoKeluar = foto;

  res.json({ success: true, message: 'Absen keluar berhasil', data: record });
});

// Get status absen hari ini
app.get('/api/absen/status/:pegawaiId', (req, res) => {
  const pegawaiId = parseInt(req.params.pegawaiId);
  const today = new Date().toISOString().split('T')[0];
  const record = absensi.find(a => 
    a.pegawaiId === pegawaiId && 
    a.tanggal === today
  );

  res.json({ success: true, data: record || null });
});

// Dashboard - Get semua absensi
app.get('/api/dashboard/absensi', (req, res) => {
  const { tanggal } = req.query;
  let data = absensi;

  if (tanggal) {
    data = data.filter(a => a.tanggal === tanggal);
  }

  res.json({ success: true, data: data.reverse() });
});

// Dashboard - Statistik
app.get('/api/dashboard/statistik', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  const absensiHariIni = absensi.filter(a => a.tanggal === today);

  const stats = {
    totalPegawai: pegawai.length,
    hadirHariIni: absensiHariIni.length,
    tepatWaktu: absensiHariIni.filter(a => a.status === 'Tepat Waktu').length,
    terlambat: absensiHariIni.filter(a => a.status === 'Terlambat').length,
    belumAbsen: pegawai.length - absensiHariIni.length
  };

  res.json({ success: true, data: stats });
});

// Get lokasi kantor
app.get('/api/lokasi-kantor', (req, res) => {
  res.json({ success: true, data: lokasiKantor });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  console.log('Login credentials:');
  console.log('NIP: 123456, Password: pass123');
});