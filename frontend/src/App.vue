<script setup>
import { ref } from 'vue'
import EnterTask from './components/EnterTask.vue'
import DeleteTask from './components/DeleteTask.vue'

const tasks = ref([])



const addTask = (newTask) => {
  if (!newTask.trim()) return
  tasks.value.push({
    id: Date.now(),
    title: newTask,
  })

}

const handleDel = (id) => {
  tasks.value = tasks.value.filter(task => task.id !== id)
}

</script>

<template>
  <div class="app-wrapper">
    <!-- Header -->
    <header class="app-header">
      <div class="header-icon">📋</div>
      <div>
        <h1 class="app-title">Planora</h1>
        <p class="app-subtitle">Stay organized, stay ahead</p>
      </div>
    </header>

    <!-- Input -->
    <EnterTask @add-task="addTask" />

    <!-- Stats -->
    <div class="stats-bar" v-if="tasks.length > 0">
      <span>{{ tasks.filter(t => t.done).length }} of {{ tasks.length }} completed</span>
      <div class="progress-track">
        <div
          class="progress-fill"
          :style="{ width: (tasks.filter(t => t.done).length / tasks.length * 100) + '%' }"
        />
      </div>
    </div>

    <!-- Task List -->
    <div class="task-list-wrapper">
      <transition-group name="task" tag="ul" class="task-list">
        <li
          v-for="task in tasks"
          :key="task.id"
          class="task-item"
          :class="{ 'task-done': task.done }"
        >
          <label class="checkbox-wrapper">
            <input type="checkbox" v-model="task.done" class="checkbox-input" />
            <span class="checkbox-custom"></span>
          </label>
          <span class="task-title">{{ task.title }}</span>
          <DeleteTask @delete-task="handleDel(task.id)" />
        </li>
      </transition-group>

     <div v-if="tasks.length === 0" class="empty-state">
        <span class="empty-icon">🎯</span>
        <p>No tasks yet — add one above!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}


.app-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1.75rem;
  background: var(--color-background-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
}

.header-icon {
  font-size: 2.4rem;
  line-height: 1;
}

.app-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: -0.5px;
}

.app-subtitle {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  margin-top: 1px;
}


.stats-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  font-weight: 500;
  padding: 0 0.25rem;
}

.progress-track {
  flex: 1;
  height: 6px;
  background: var(--color-background-mute);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), #A855F7);
  border-radius: var(--radius-full);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}


.task-list-wrapper {
  background: var(--color-background-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
  min-height: 60px;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
  transition: background 0.2s;
}

.task-item:last-child {
  border-bottom: none;
}

.task-item:hover {
  background: var(--primary-light);
}


.checkbox-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
}

.checkbox-input {
  display: none;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-border-hover);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  background: transparent;
  position: relative;
}

.checkbox-wrapper:hover .checkbox-custom {
  border-color: var(--primary);
  background: var(--primary-light);
}

.checkbox-input:checked ~ .checkbox-custom {
  background: var(--primary);
  border-color: var(--primary);
}

.checkbox-input:checked ~ .checkbox-custom::after {
  content: '';
  display: block;
  width: 5px;
  height: 9px;
  border: 2px solid #fff;
  border-top: none;
  border-left: none;
  transform: rotate(45deg) translate(-1px, -1px);
}


.task-title {
  flex: 1;
  font-size: 0.95rem;
  color: var(--color-heading);
  transition: all 0.25s;
  word-break: break-word;
}

.task-done .task-title {
  text-decoration: line-through;
  color: var(--color-text-muted);
}


.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2.5rem 1rem;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.empty-icon {
  font-size: 2rem;
}

.task-enter-active,
.task-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.task-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.task-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
