import { ref, reactive, computed } from 'vue';
import metadata from '../data.json';
interface IMeta {
    date: string,
    tags: string[],
    title: string,
    excerpt: string,
    path: string
}
export function useTags() {
    const tagsMap: { other: Array<IMeta> } = reactive({ other: [] })
    const originList = ref([...metadata])
    for (const meta of metadata) {
        if (meta.tags && Array.isArray(meta.tags)) {
            for (const tag of meta.tags) {
                if (!tagsMap[tag]) {
                    tagsMap[tag] = []
                }
                tagsMap[tag].push({
                    ...meta
                })
            }
        } else {
            // blog without tags should in other
            if (!tagsMap.other) {
                tagsMap.other = [] as any
            }
            tagsMap.other.push({
                ...meta as unknown as IMeta
            })
        }
    }
    const curTag = ref('all')
    const tags = computed(() => {
        return Object.keys(tagsMap).sort()
    })
    const curTagList = computed(() => {
        if (curTag.value === 'all') {
            return originList.value
        } else {
            return tagsMap[curTag.value]
        }
    })
    const changeTag = (tag) => {
        curTag.value = tag
    }
    const curTagTotal = computed(() => curTagList.value.length)
    return {
        tags,
        tagsMap,
        list: originList,
        curTagList,
        changeTag,
        curTagTotal,
        curTag
    }
}