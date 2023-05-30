<template>
    <div class="bg-white border border-stone-200 rounded p-3 flex justify-between items-center gap-2">
        {{ task.title }}
        <div class="gap-2 flex">
            <span @click="taskStore.deleteTask(task.id)" class="cursor-pointer hover:text-red-800">
                <i class="bi bi-trash"></i>
            </span>
            <div @click="taskStore.toggleFav(task.id)" class="cursor-pointer hover:scale-125 transition-all">
                <span v-if="task.isFav" class="text-red-500"><i class="bi bi-heart-fill"></i></span>
                <span v-else><i class="bi bi-heart"></i></span>
            </div>
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