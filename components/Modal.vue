<template>
    <teleport to="body">
        <div class="overlay" v-if="modelValue">
            <div class="modal" @click="handleClick">
                <div class="modal-container" @click.stop>
                    <div class=" modal-header">
                        <span class="title">{{ title }}</span>
                        <button @click="handleClick">
                            x
                        </button>
                    </div>
                    <div class="modal-content">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: String
})
const emits = defineEmits(['update:modelValue'])
const handleClick = () => {
    emits('update:modelValue', false)
}

</script>

<style scoped lang="postcss">
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;

    & .modal-container {
        margin: 0 auto;
        margin-top: 160px;
        max-width: calc(var(--vp-layout-max-width) - 64px);
        min-height: 200px;
        background: var(--vp-c-bg);
        border-radius: 4px;
        padding: 8px;
    }

    & .modal-header {
        display: flex;
        justify-content: space-between;

        & .title {
            font-size: 1.2em;
            font-weight: 600;
        }

        & button {
            font-size: 1.4rem;
        }
    }
}

.overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 9999;
    overflow: hidden;
    background: var(--vp-c-divider-dark-2);
}
</style>