<script setup>

const emit = defineEmits(['delete-task'])

const handleDel = () => {
    emit('delete-task')
}


</script>

<template>

    <button @click="handleDel">
        delete
    </button>

</template>


<style scoped></style>