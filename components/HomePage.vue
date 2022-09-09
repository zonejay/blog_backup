<template>
    <div class="home-page">
        <div class="tags-wrapper">
            <tag @click="changeTag('all')" :class="{ 'is-active': curTag === 'all' }">all</tag>
            <tag v-for="tag of tags" @click="changeTag(tag)" :class="{ 'is-active': curTag === tag }">{{ tag }}</tag>
        </div>
        <div class="all-list">
            <article-item v-for="li of curPageList" :article="li" />
        </div>
        <pagination :page-size="pageSize" :total="curTagTotal" v-model="curPage" />
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useTags } from '../composition/index';
import Tag from './Tag.vue';
import ArticleItem from './ArticleItem.vue';
import Pagination from './Pagination.vue';

const { tags, curTag, changeTag, curTagList, curTagTotal } = useTags()
const curPage = ref(1)
const pageSize = ref(10)
const curPageList = computed(() => {
    const start = (curPage.value - 1) * pageSize.value
    const end = curPage.value * pageSize.value
    return curTagList.value.slice(start, end)
})

</script>

<style lang="postcss" scoped>
.home-page {
    margin: 0 auto;
    max-width: calc(var(--vp-layout-max-width) - 64px);
}

.tags-wrapper {
    & .tag {
        margin-right: 8px;
    }
}

.all-list {}
</style>