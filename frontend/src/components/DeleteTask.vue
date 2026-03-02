<script setup>

const emit = defineEmits(['delete-task'])

const handleDel = () => {
    emit('delete-task')
}


</script>

<template>
    <button class="delete-btn" @click="handleDel" title="Delete task">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <path d="M10 11v6M14 11v6"/>
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
        </svg>
    </button>
</template>

<style scoped>
.delete-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1.5px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--color-text-muted);
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;
    margin-left: auto;
}

.delete-btn:hover {
    background: var(--danger-light);
    color: var(--danger);
    border-color: var(--danger);
    transform: scale(1.1);
}

.delete-btn:active {
    transform: scale(0.95);
}
</style>