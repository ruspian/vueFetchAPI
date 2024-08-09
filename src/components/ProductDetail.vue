<script setup>
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';
import ProductForm from './ProductForm.vue';

const route = useRoute();
const router = useRouter();

// mencari id dari url
const id = route.params.id;
const product = ref({});
const baseUrl = `http://localhost:3000/products/${id}`;


// fungsi ambil data API
async function ambilData() {
    baseUrl;
    try {
        const response = await axios.get(baseUrl);
        product.value = response.data;
    } catch (error) {
        alert(error);
    }
}

async function hapusProduct() {
    baseUrl;
    try {
        const response = await axios.delete(baseUrl);
        if (response.status === 200) {
            alert('Product Berhasil Dihapus');
            router.push('/');
        }

    } catch (error) {
        alert(error);
    }
};

async function updateProduct(product) {
    baseUrl;
    try {
        const response = await axios.put(baseUrl, product);
        if (response.status === 200) {
            alert('Product Berhasil Diupdate');
            router.push('/');
        }
    } catch (error) {
        alert(error);
    }
}

onMounted(() => {
    ambilData();
});

</script>

<template>

    <!-- Product Detail -->
    <div class="product-detail">
        <h2>{{ product.title }}</h2>
        <img :src="product.image" :alt="product.title">
        <p>{{ product.description }}</p>
        <p>${{ product.price }}</p>
        <ProductForm :product="product" @updateProduct="updateProduct"/>
        <div class="tombol">
            <RouterLink to="/" class="tombol-kembali">Kembali</RouterLink>
            <button @click="hapusProduct" class="tombol-hapus">Hapus</button>
        </div>
    </div>
</template>


<style scoped>
.product-detail {
    text-align: center;
    padding:20px 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

.product-detail img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    object-fit: cover;
}

.product-detail p {
    margin-bottom: 20px;
}

.tombol {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.tombol-hapus,
.tombol-kembali {
    padding: 10px 20px;
    margin-top: 50px;
    border: none;
    border-radius: 4px;
    border: #333 solid 1px;
    color: #333;
    font-weight: bold;
    font-size: 16px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    text-decoration: none;
}

.tombol-hapus:hover {
    background-color: red;
    color: #fff;
}


.tombol-kembali:hover {
    background-color: #333;
    color: #fff;
}
</style>