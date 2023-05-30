<template>
    <div class="max-w-xl mx-auto py-2">
        <div class="flex justify-end gap-2">
            <button @click="filter = 'all'" class="border-gray-400 border rounded px-2 py-1 text-sm focus:ring">All
                Tasks</button>
            <button @click="filter = 'favs'" class="border-gray-400 border rounded px-2 py-1 text-sm focus:ring">Favorite
                Tasks</button>
        </div>
        <!-- all task -->
        <div v-if="filter == 'all'">
            <div class="pt-2 pb-3">
                <h3 class="m-0 text-gray-500">You have {{ taskStore.totalCount }} tasks left to do</h3>
            </div>
            <div class="flex flex-col gap-3">
                <div v-for="task in taskStore.task" :key="task.id">
                    <TaskDetails :task="task" />
                </div>
            </div>
        </div>
        <!-- favorite task -->
        <div v-if="filter == 'favs'">
            <div class="pt-2 pb-3">
                <h3 class="m-0 text-gray-500">You have {{ taskStore.favCount }} favs left to do</h3>
            </div>
            <div class="flex flex-col gap-3">
                <div v-for="task in taskStore.favs" :key="task.id">
                    <TaskDetails :task="task" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore';
import TaskDetails from './TaskDetails.vue';

const filter = ref('all')
const taskStore = useTaskStore()
</script>