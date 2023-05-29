<template>
    <div class="bg-white border border-stone-200 rounded p-3 flex justify-between items-center gap-2">
        {{ task.title }}
        <div class="gap-2 flex">
            <span><i class="bi bi-trash"></i></span>
            <span><i class="bi bi-heart"></i></span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['task']
}
</script>