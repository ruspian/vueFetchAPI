<script setup>
    // memanggil props dari komponen induk
    const { page } = defineProps({
        page: Number,
        total_pages: Number
    });

    // memanggil emit dari komponen induk
    const emit = defineEmits(['pindahPage']);

    // fungsi pindah page
    function pindahPage(pageBaru) {
        emit('pindahPage', pageBaru);
    }
</script>

<template>
        <button @click="pindahPage(page - 1)" class="button" id="prev-button" v-show="page > 1">Sebelumnya</button>
        <span class="page">{{ page }}</span>
        <button @click="pindahPage(page + 1)" class="button" id="next-button" v-show="page < total_pages">Selanjutnya</button>
</template>



<style scoped>
.pagination button {
    padding: 10px 20px;
    margin: 0 5px;
    border: none;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
    font-weight: bold;
    font-size: 16px;
    transition: background-color 0.3s ease;
    cursor: pointer;
}

.pagination button:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.page {
    padding: 10px 20px;
    margin: 0 5px;
    border: none;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
    font-weight: bold;
    font-size: 16px;
}
</style>