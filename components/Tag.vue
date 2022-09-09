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
    background: var(--vp-c-brand-light);
    justify-content: center;
    align-items: center;
    padding: 1px 8px;
    color: var(--vp-c-text-inverse-1);

    &.is-active {
        background: var(--vp-c-brand-darker);
    }
}
</style>