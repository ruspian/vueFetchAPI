<script setup>
import { useRouter } from 'vue-router';


// memanggil props dari komponen induk/sebelah
const { product } = defineProps({
    product: Object
});

const router = useRouter();

// fungsi pindah ke product detail
function keProductDetail() {
    router.push(`/product/${product.id}`);
}

</script>



<template>
    <!-- Product -->
    <div class="product-card" @click="keProductDetail">
        <img :src="product.image" alt="Product 1" class="product-image">
        <h2 class="product-title">{{ product.title }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <div class="product-price-container">
            <span class="product-price">${{ product.price }}</span>
        </div>
    </div>
</template>



<style scoped>
.product-card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
}

.product-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 10px;
}

.product-title {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
}

.product-description {
    font-size: 14px;
    margin-top: 5px;
}

.product-price-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

}

.product-price {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
}
</style>