<template>
    <div class="bg-white border border-stone-200 rounded p-3 flex justify-between items-center gap-2">
        {{ task.title }}
        <div class="gap-2 flex">
            <span @click="taskStore.deleteTask(task.id)"><i class="bi bi-trash"></i></span>
            <span><i class="bi bi-heart"></i></span>
        </div>
    </div>
</template>

<script>
import { useTaskStore } from '../stores/TaskStore';
export default {
    props: ['task'],
    setup(){
        const taskStore = useTaskStore()

        return {taskStore}
    }
}
</script>