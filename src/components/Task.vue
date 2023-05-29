<template>
    <div class="max-w-xl mx-auto py-2">
        <div class="flex justify-end gap-2">
            <button class="border-gray-400 border rounded px-2 py-1 text-sm focus:ring">All Tasks</button>
            <button class="border-gray-400 border rounded px-2 py-1 text-sm focus:ring">Favorite Tasks</button>
        </div>
        <div class="pt-2 pb-3">
            <h3 class="m-0 text-gray-500">You have 4 tasks left to do</h3>
        </div>
        <div>
            <div class="flex flex-col gap-3">
                <div v-for="task in taskStore.task" :key="task.id">
                    <TaskDetails :task="task"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useTaskStore } from '../stores/TaskStore';
    import TaskDetails from './TaskDetails.vue';

    const taskStore = useTaskStore()
</script>