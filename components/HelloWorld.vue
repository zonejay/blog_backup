<template>
    <div @click="count++" class="count">
        count is <span>{{ count }}</span>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const count = ref(0)
</script>
<style lang="postcss" scoped>
.count {
    border: 1px solid rebeccapurple;

    &>span {
        color: red;
    }
}
</style>