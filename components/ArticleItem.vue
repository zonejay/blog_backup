<template>
    <div class="article" @click="goPath(article.path)">
        <div class="article-header">
            <div class="left">{{ article.title }}{{ article.path }}</div>
            <div class="right">{{ article.date }}</div>
        </div>
        <div class="article-line">
        </div>
        <div class="article-excerpt">{{ article.excerpt }}</div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vitepress';
const router = useRouter()
const goPath = router.go
const props = defineProps({
    article: {
        type: Object,
        default() {
            return {
                title: 'test',
                date: '2020-12-12',
                excerpt: 'sdfsdfdsfdsfdfdfdf',
                path: ''
            }
        }
    }
})

</script>

<style lang="postcss" scoped>
.article {

    &:hover {
        & .article-line {
            transform: scaleX(3);
        }
    }

    cursor: pointer;
    border-bottom: 1px solid var(--vp-c-divider-light);
    color: var(--vp-c-text-2);
    padding: 2rem 0;

    & .article-header {
        color: var(--vp-c-text-1);
        margin: 6px 0;
        display: flex;
        justify-content: space-between;

        & .left {
            font-size: 1.5rem;
            font-weight: 700;
        }

        & .right {}
    }

    & .article-line {
        width: 2rem;
        border-top: 3px solid var(--vp-c-text-1);
        transition: all 0.3s;
        transform-origin: top left;
    }

    & .article-excerpt {
        margin: 1rem 0;
    }
}
</style>