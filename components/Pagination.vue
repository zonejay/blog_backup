<template>
    <div class="pagination" v-show="pageCount > 1">
        <div class="count" :class="{ active: page === modelValue }" v-for="page of pageCount"
            @click="handleClick(page)">{{
                    page
            }}</div>
    </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
const props = defineProps({
    total: {
        type: Number,
        required: true
    },
    pageSize: {
        type: Number,
        default: 10
    },
    modelValue: {
        type: Number,
        default: 1
    }
})
const { total, pageSize, modelValue } = toRefs(props)
const pageCount = computed<number>(() => {
    return Math.ceil(total.value / pageSize.value)
})

const emit = defineEmits(['update:modelValue', 'page-change'])
function handleClick(page) {
    if (page !== modelValue.value) {
        emit('update:modelValue', page)
        emit('page-change', page)
    }
}

</script>

<style lang="postcss" scoped>
.pagination {
    --pagenation-bg: var(--vp-c-green);
    --pagenation-active: var(--vp-c-red);
    display: flex;

    & .count {
        margin: 0 4px;
        padding: 4px 8px;
        box-shadow: 3px 3px var(--pagenation-bg);
        cursor: pointer;
        border-radius: 2px;
        transition: all ease .3s;

        &.count:hover {
            background-color: #eee;
        }

        &.count.active {
            color: var(--pagenation-active);
        }
    }
}
</style>