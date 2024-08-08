<script setup>
import PageButton from "@/components/PageButton.vue";
import Product from "@/components/Product.vue";
import { ref, watch } from "vue";
import axios from "axios";

const page = ref(1);
const limit = ref(9);
const products = ref([]);

// memanggil API dengan komponen async langsung
products.value = await axios
  .get(
    `http://localhost:3000/products?_page=${page.value}&_per_page=${limit.value}`
  )
  .then((response) => {
    return response.data;
  });

// memanggil API dengan watch untuk pindah page
watch(page, async () => {
  products.value = await axios
    .get(
      `http://localhost:3000/products?_page=${page.value}&_per_page=${limit.value}`
    )
    .then((response) => {
      return response.data;
    });
});

// fungsi pindah page
function pindahPage(pageBaru) {
  if(pageBaru < 1) return;
  if(pageBaru > products.value.pages) return;
  page.value = pageBaru;
}

// memanggil API dengan fungsi async
// async function ambilProduct() {
//   const response = await axios.get(`https://localhost:3000/products`);
//   products.value = response.data;
//   return products;
// }

// ambilProduct();
</script>

<template>
  <main>
    <div class="product-grid">
      <!-- Product Cards -->
      <Product
        v-for="(product, index) in products.data"
        :key="index"
        :product="product"
      />
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <PageButton :page="page" :total_pages="products.pages" @pindahPage="pindahPage" />
    </div>
  </main>
</template>

<style scoped>
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
