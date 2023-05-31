<template>
    <div class="bg-white border border-stone-200 rounded p-3 flex justify-between items-center gap-2">
        {{ task.title }}
        <div class="gap-2 flex">
            <span @click="deleteTask(task.id)" class="cursor-pointer hover:text-red-800">
                <i class="bi bi-trash"></i>
            </span>
            <div @click="toggleFav(task.id)" class="cursor-pointer hover:scale-125 transition-all">
                <span v-if="task.isFav" class="text-red-500"><i class="bi bi-heart-fill"></i></span>
                <span v-else><i class="bi bi-heart"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
import { useTaskStore } from '../stores/TaskStore';
import { useToast } from 'vue-toastification';
export default {
    props: ['task'],
    setup(){
        const taskStore = useTaskStore()
        const toast = useToast()

        function deleteTask(id){
            taskStore.deleteTask(id)
            toast.success('Task Deleted Successfully')
        }

        function toggleFav(id){
            taskStore.toggleFav(id)
            toast.success('Favorite Updated Successfully')
        }

        return {taskStore, deleteTask, toggleFav}
    }
}
</script>