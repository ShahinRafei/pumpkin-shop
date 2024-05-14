<template>
    <div class="w-full grid lg:grid-cols-2 gap-3">
        <div v-for="question in props.questions" :key="question"
            class="w-full rounded shadow-md ring-1 ring-slate-200 grid grid-cols-1 divide-y-2 divide-dashed divide-slate-300">
            <div class="p-3">
                <p class="font-semibold mb-2">
                    {{ question.title }}
                </p>
                <p class="text-sm">
                    {{ question.body }}
                </p>
            </div>
            <div v-if="question.answer" class="flex items-start p-3">
                <p class="w-12 flex-shrink-0 aspect-square rounded-full bg-slate-200 flex justify-center items-center">
                    <font-awesome-icon icon="fa-solid fa-user" class="text-slate-400"></font-awesome-icon>
                </p>
                <div class="pl-2">
                    <p class="font-semibold">
                        {{ question.answer.user }}
                    </p>
                    <p class="text-sm">
                        {{ question.answer.body }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//import
import { defineProps } from 'vue';

//data
const props = defineProps(['questions']);

</script>