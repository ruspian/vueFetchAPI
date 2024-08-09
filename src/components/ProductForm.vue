<script setup>
import { ref, defineEmits, defineProps, watchEffect, computed } from "vue";

const judul = ref("");
const deskripsi = ref("");
const harga = ref("");
const gambar = ref("");
const id = ref("");

const tampilkanForm = ref(false);
const isUpdate = computed(() => !!edit.product);

const emit = defineEmits(["tambahProduct", "updateProduct"]);
const edit = defineProps({
    product: Object
});

// fungsi simpan product
function simpanProduct() {
    const formData = {
        title: judul.value,
        description: deskripsi.value,
        price: harga.value,
        image: gambar.value
    };
    if (isUpdate.value) {
        emit("updateProduct", formData);
    } else {
        emit("tambahProduct", formData);
    }
};

// fungsi edit product
watchEffect(() => {
    judul.value = edit.product?.title;
    deskripsi.value = edit.product?.description;
    harga.value = edit.product?.price;
    gambar.value = edit.product?.image;
    id.value = edit.product?.id;
})
</script>

<template>

    <!-- Product Form -->
     <div class="form-container">
        <button @click="tampilkanForm = !tampilkanForm">{{ isUpdate ? "Edit" : "Tambah" }}</button>
        <div v-if="tampilkanForm" class="product-form">
            <form @submit.prevent="simpanProduct">
                <label for="title">Judul</label>
                <input type="text" id="title" v-model="judul" required>
                <label for="description">Deskripsi</label>
                <input type="text" id="description" v-model="deskripsi" required>
                <label for="price">Harga</label>
                <input type="number" id="price" v-model="harga" required>
                <label for="image">Gambar</label>
                <input type="text" id="image" v-model="gambar" required>
                    <button type="submit">Simpan</button>
                    <button @click="tampilkanForm = false">Batal</button>
            </form>
        </div>
     </div>
</template>


<style scoped>

.form-container {
	text-align: center;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	margin-bottom: 20px;
}

.form-container button {
	padding: 10px 20px;
	margin-top: 10px;
	background-color: #28a745;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s, transform 0.2s;
}

.form-container button:hover {
	background-color: #218838;
	transform: translateY(-2px);
}

.form-container button:focus {
	outline: none;
}

.form-container button:active {
	transform: translateY(1px);
	background-color: #1e7e34;
}

.product-form {
	margin-top: 20px;
	background-color: #f9f9f9;
	border-radius: 8px;
	padding: 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	max-width: 400px;
	margin: 0 auto;
	text-align: left;
}

.product-form label {
	display: block;
	margin-bottom: 5px;
}

.product-form input[type='text'],
.product-form input[type='number'] {
	width: calc(100% - 20px);
	padding: 8px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
}


.product-form button {
	padding: 10px 20px;
	margin-top: 10px;
    margin-right: 10px;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s;
}

.product-form button:hover {
	background-color: #0056b3;
}

.product-form button[type='submit'] {
	background-color: #28a745;
}

.product-form button[type='submit']:hover {
	background-color: #218838;
}

.product-form button[type='button'] {
	background-color: #dc3545;
}

.product-form button[type='button']:hover {
	background-color: #c82333;
}

</style>