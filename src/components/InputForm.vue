<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="number">Angka (1-100):</label>
        <input type="number" id="number" class="form-control" v-model="inputNumber" min="1" max="100" required>
      </div>

      <button type="submit" class="btn btn-primary">Kirim</button>
    </form>

    <div v-if="result !== null" class="mt-3">
      <h3>Hasil:</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Angka</th>
            <th scope="col">Hasil</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in result" :key="row.number">
            <th scope="row">{{ row.number }}</th>
            <td>{{ row.number }}</td>
            <td>{{ row.outcome }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputNumber: null,
      result: null,
    };
  },

  methods: {
    submitForm() {
          // Setelah mendapatkan input, hitung hasil
          this.calculateResults();
        },
        calculateResults() {
          // Validasi input
          if (this.inputNumber % 1 !== 0 || this.inputNumber < 1 || this.inputNumber > 100) {
            alert('Masukkan angka antara 1 hingga 100.');
            return;
          }

          // Inisialisasi hasil sebagai array kosong
          this.result = [];

          // Loop untuk setiap angka dan hitung hasilnya
          for (let i = 1; i <= this.inputNumber; i++) {
            this.result.push({
              number: i,
              outcome: this.getTableResult(i),
            });
          }
        },
        getTableResult(num) {
          const divisibleBy3 = num % 3 === 0;
          const divisibleBy5 = num % 5 === 0;
          const divisibleBy15 = num % 15 === 0;

          if (divisibleBy15) {
            return 'FINTEGRA HOMIDO INDONESIA';
          } else if (divisibleBy3) {
            return 'FINTEGRA';
          } else if (divisibleBy5) {
            return 'HOMIDO INDONESIA';
          } else {
            return '';
          }
        },
  },
};
</script>
