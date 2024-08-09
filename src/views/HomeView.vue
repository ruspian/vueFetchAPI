<script setup>
import PageButton from "@/components/PageButton.vue";
import Product from "@/components/Product.vue";
import { ref, watchEffect } from "vue";
import axios from "axios";
import Loading from "@/components/Loading.vue";
import ProductForm from "@/components/ProductForm.vue";

const page = ref(1);
const limit = ref(9);
const products = ref([]);
const isLoading = ref(true);


// fungsi ambil data API
async function ambilData() {
  const baseUrl = `http://localhost:3000/products?_page=${page.value}&_per_page=${limit.value}`;
  try {
    isLoading.value = true;
    const response = await axios.get(baseUrl);
    products.value = response.data;
  } catch (error) {
    alert(error);
  } finally {
    isLoading.value = false;
  }
}

// memanggil API dengan fungsi watchEffect untuk menggantikan watch dan onMounted
watchEffect(() => {
  ambilData();
});

// memanggil API dengan onMounted
// onMounted(async () => {
//   try {
//     // memanggil API dengan komponen async langsung
//     products.value = await axios.get(`http://localhost:3000/products?_page=${page.value}&_per_page=${limit.value}`).then((response) => {
//       return response.data;
//     });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     isLoading.value = false;
//   }
// });

// // memanggil API dengan watch untuk pindah page
// watch(page, async () => {
//   try {
//     // memanggil API dengan komponen async langsung
//     isLoading.value = true;
//     products.value = await axios.get(`http://localhost:3000/products?_page=${page.value}&_per_page=${limit.value}`).then((response) => {
//       return response.data;
//     });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     isLoading.value = false;
//   }
// });

// fungsi pindah page
function pindahPage(pageBaru) {
  if (pageBaru < 1) return;
  if (pageBaru > products.value.pages) return;
  page.value = pageBaru;
};

// memanggil API dengan fungsi async
// async function ambilProduct() {
//   const response = await axios.get(`https://localhost:3000/products`);
//   products.value = response.data;
//   return products;
// }

// ambilProduct();


// fungsi buat/tambah product baru
async function tambahProduct(product) {
  try {
    const response = await axios.post(`http://localhost:3000/products`, product);
    if (response.status === 201) {
      ambilData();
      alert("Product Berhasil Ditambah");
    }
  } catch (error) {
    alert(error);
  }
}
</script>

<template>
  <!-- Loading Component -->
  <div class="loading" v-if="isLoading">
    <Loading />
  </div>
  <main v-else>
    <ProductForm @tambahProduct="tambahProduct" />
    <div class="product-grid">
      <!-- Product Cards -->
      <Product v-for="(product, index) in products.data" :key="index" :product="product" />
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <PageButton :page="page" :total_pages="products.pages" @pindahPage="pindahPage" />
    </div>
  </main>
</template>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 80%;
  margin: 0 auto;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
</style>
