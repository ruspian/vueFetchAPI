<template>
    <div>
        <span class="loader">LOADING.....</span>
    </div>
</template>

<style scoped>
.loader {
    font-size: 20px;
    font-weight: bold;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    animation: blink 1s infinite;    
}

@keyframes blink {
    0% { opacity: 0.2; }
    20% { opacity: 1; }
    100% { opacity: 0.2; }
}


</style>