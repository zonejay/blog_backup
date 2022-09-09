<template>
    <Layout>
        <template #aside-outline-before>
            <div class="tag-wrapper" v-if="showTags">
                <tag v-for="tag of tags" ::key="tag" @click="handleTagClick(tag)">{{ tag }}</tag>
            </div>
        </template>
    </Layout>
</template>
<script setup>
import { ref } from 'vue';
import DefaultTheme from 'vitepress/theme'
import { useData, useRouter } from 'vitepress'
import { computed } from 'vue';
import Tag from '../../../components/Tag.vue';
import { useTags } from '../../../composition/index';
const { Layout } = DefaultTheme

const { frontmatter } = useData()
const tags = computed(() => frontmatter.value.tags ?? [])
const curArticleTitle = computed(() => frontmatter.value.title)
const showTags = computed(() => tags.value.length > 0)
const show = ref(false)
const articles = ref([])
function handleTagClick(tag) {
    const { getListByTag } = useTags()
    const list = getListByTag(tag)
    console.log(list);
    if (list.length > 1) {
        articles.value = list.filter(li => li.title !== curArticleTitle.value)
        show.value = true
    }
}

const router = useRouter()
const goPath = (path) => {
    router.go(path)
    show.value = false
}

</script>
<style lang="css" scoped>
.tag-wrapper {
    margin-bottom: 8px;
}

.tag-wrapper .tag {
    margin-right: 4px;
    margin-bottom: 4px;
}
</style>