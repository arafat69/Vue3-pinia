<template>
  <header class="bg-gray-300 py-5">
    <div class="flex justify-center items-center gap-4">
      <img src="/logo.svg" alt="" class="w-14 -rotate-12">
      <div class="text-4xl rotate-2">Pinia Task</div>
    </div>
      <form @submit.prevent="handleSubmitForm" class="flex justify-center gap-1 mt-3">
        <input v-model="newTask" placeholder="..." class="w-72 outline-none h-9 focus:ring rounded-sm p-2">
        <button class="text-white bg-yellow-600 rounded-sm h-9 w-16">Add</button>
      </form>
  </header>
</template>

<script>
import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore';
export default {
  setup(){
    const taskStore = useTaskStore()
    const newTask = ref('')

    const handleSubmitForm = () => {
      if (newTask.value.length > 0) {
        taskStore.addTask({
          title: newTask.value,
          isFav: false,
          id: Math.floor(Math.random() * 1000)
        })
        newTask.value = ''
      }
    }
    return {handleSubmitForm, newTask}
  }
}
</script>