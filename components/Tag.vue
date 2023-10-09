<template>
    <div class="tag">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>
.tag {
    cursor: pointer;
    display: inline-flex;
    border-radius: 3px;
    background: var(--vp-c-green-2);
    justify-content: center;
    align-items: center;
    padding: 1px 8px;
    color: var(--vp-button-brand-text);

    &.is-active {
        background: var(--vp-button-alt-bg);
        color: var(--vp-c-text-1);
    }
}
</style>