<script setup>
import { ref } from 'vue'

const newTask = ref('')

const emit = defineEmits(['add-task'])

const addTask = () => {
  emit('add-task', newTask.value)
  newTask.value = ''
}

</script>

<template>
    <div class="enter-task">
        <div class="input-wrapper">
            <span class="input-icon">✏️</span>
            <input
                v-model="newTask"
                class="task-input"
                placeholder="Add a new task..."
                @keyup.enter="addTask"
            />
        </div>
        <button class="add-btn" @click="addTask" :disabled="!newTask.trim()">
            <span class="btn-icon">+</span>
            Add
        </button>
    </div>
</template>

<style scoped>
.enter-task {
    display: flex;
    gap: 0.625rem;
    align-items: center;
}

.input-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background: var(--color-background-soft);
    border: 1.5px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 0.7rem 1rem;
    box-shadow: var(--shadow-sm);
    transition: border-color 0.2s, box-shadow 0.2s;
}

.input-wrapper:focus-within {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.12);
}

.input-icon {
    font-size: 1rem;
    flex-shrink: 0;
}

.task-input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 0.95rem;
    color: var(--color-heading);
    font-family: inherit;
}

.task-input::placeholder {
    color: var(--color-text-muted);
}

.add-btn {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.7rem 1.25rem;
    background: var(--primary);
    color: #fff;
    border: none;
    border-radius: var(--radius-md);
    font-size: 0.9rem;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(124, 58, 237, 0.35);
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    white-space: nowrap;
    flex-shrink: 0;
}

.add-btn:hover:not(:disabled) {
    background: var(--primary-hover);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.45);
}

.add-btn:active:not(:disabled) {
    transform: translateY(0);
}

.add-btn:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    box-shadow: none;
}

.btn-icon {
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1;
}
</style>