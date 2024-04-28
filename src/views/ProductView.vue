<template>
    <div class="w-full">
        <HeaderComponent>
            <NavBarComponent />
        </HeaderComponent>

        <div class="container mx-auto py-5">
            <div class="grid grid-cols-4 gap-3">
                <div
                    class="w-full aspect-[2/3] p-5 bg-white rounded-lg ring-2 ring-amber-500/20 shadow-inner flex justify-center items-center">
                    <img :src="productDetails.image" :alt="productDetails.title" class="w-full h-full object-contain">
                </div>
                <div class="col-start-2 col-end-4 p-5 flex flex-col items-start gap-3">
                    <h1 class="font-bold text-xl text-slate-700">{{ productDetails.title }}</h1>
                    <div class="w-full flex items-center justify-between">
                        <div class="text-white font-bold bg-orange-600/80 px-5 py-2 rounded-full">
                            {{ productDetails.category }}
                        </div>

                        <div v-if="productDetails.rating" class="flex items-center gap-1">
                            <span class="text-red-700 text-2xl">♥</span>
                            <p class="opacity-80 text-sm">{{ productDetails.rating.rate }}</p>
                            <span class="opacity-70 text-xs mt-1">(from {{ productDetails.rating.count }} rate)</span>
                        </div>
                    </div>
                    <div class="text-justify opacity-90">{{ productDetails.description }}</div>
                </div>

                <div class="w-full aspect-[2/3] bg-white rounded-lg p-5 flex flex-col justify-between shadow-md">
                    <div class="flex flex-col gap-5">
                        <div class="flex items-center gap-2">
                            <font-awesome-icon icon="fa-solid fa-shop" class="text-2xl text-green-700 opacity-80" />
                            <p>Ships from <span class="font-bold">Pumpkin</span></p>
                        </div>
                        <div class="flex items-center gap-2">
                            <font-awesome-icon icon="fa-solid fa-truck" class="text-2xl text-orange-700 opacity-80" />
                            <p>Usually ships within <span class="font-bold">4</span> to <span class="font-bold">5</span>
                                days.
                            </p>
                        </div>
                    </div>
                    <p v-if="productDetails.price" class="text-center text-2xl font-semibold">$<span class="text-4xl">{{
                        productDetails.price.toString().split('.')[0] }}
                        </span>
                        .
                        {{ parseFloat(productDetails.price).toFixed(2).toString().split('.')[1] }}
                    </p>
                    <div class="flex gap-3 mx-auto">
                        <button @click="reduceCount"
                            class="w-7 aspect-square bg-orange-300 hover:bg-orange-400 text-white rounded">
                            <font-awesome-icon icon="fa-solid fa-minus" />
                        </button>
                        <div class="w-20 text-center bg-slate-100 rounded ring-1 px-2">{{ count }}</div>
                        <button @click="addCount"
                            class="w-7 aspect-square bg-orange-300 hover:bg-orange-400 text-white rounded">
                            <font-awesome-icon icon="fa-solid fa-plus" />
                        </button>
                    </div>
                    <p class="text-center text-xs opacity-70 -mt-2">total price:
                        ${{ parseFloat(count * productDetails.price).toFixed(2) }}
                    </p>
                    <button
                        class="w-2/3 py-2 bg-orange-400 hover:bg-orange-500 mx-auto text-sm text-white font-bold rounded-md focus:bg-green-700">add
                        to card</button>
                    <div class="opacity-70 flex items-center gap-2 mx-auto">
                        <font-awesome-icon icon="fa-solid fa-shield" />
                        <span class="text-xs">7 days return policy</span>
                    </div>
                </div>
            </div>
            <div class="w-full px-5 flex gap-5 border-b-2 border-orange-200 mt-5">
                <div @click="tab = 'review'" class="cursor-pointer py-2 font-bold text-slate-700"
                    :class="{ 'border-b-4 border-orange-400': tab == 'review' }">Reviews</div>
                <div @click="tab = 'q&a'" class="cursor-pointer py-2 font-bold text-slate-700"
                    :class="{ 'border-b-4 border-orange-400': tab == 'q&a' }">Q&A</div>
            </div>
            <div class="w-full overflow-hidden flex ring-1 ring-slate-200 rounded-b-lg">
                <div class="w-full flex gap-5 flex-shrink-0 max-h-screen overflow-y-auto bg-white transition-transform duration-500 shadow-inner shadow-slate-200 p-5"
                    :class="{ '-translate-x-full': tab == 'q&a' }" style="scrollbar-width: thin;">
                    <div class="w-2/3">
                        <ReviewComment :comments="comments"></ReviewComment>
                    </div>
                    <div class="w-1/3">
                        <GalleryComponent :images="userImages" />
                    </div>
                </div>
                <div class="w-full flex-shrink-0 min-h-96 bg-white transition-transform duration-500 shadow-inner shadow-slate-200 p-5"
                    :class="{ '-translate-x-full': tab == 'q&a' }">
                    <QuestionAndAnswerComponent :questions="questions" />
                </div>
            </div>
            <SimilarProduct v-if="productDetails.category" :category="productDetails.category" />
        </div>


        <FooterComponent />
    </div>
</template>

<script setup>
//imports
import store from '@/store';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

//components
import HeaderComponent from '@/components/HeaderComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ReviewComment from '@/components/ReviewComment.vue'
import GalleryComponent from '@/components/GalleryComponent.vue';
import QuestionAndAnswerComponent from '@/components/QuestionAndAnswerComponent.vue';
import SimilarProduct from '@/components/SimilarProduct.vue';

//data
const route = useRoute();
const count = ref(1);
const tab = ref('review');
const comments = ref([{
    user: "user name",
    date: "2024-04-24",
    rating: "4.6",
    title: "Lorem ipsum",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi tempora cum fugit, mollitia sed corporis dicta expedita unde, distinctio omnis earum ratione itaque saepe dolor minus voluptatem fuga excepturi incidunt!",
    positive_points: [{
        text: "a positive point"
    }],
    negative_points: [{
        text: "a negative point"
    }],
},
{
    user: "user name 2",
    date: "2024-04-26",
    rating: "3.4",
    title: "Lorem ipsum",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi tempora cum fugit, mollitia sed corporis dicta expedita unde, distinctio omnis earum ratione itaque saepe dolor minus voluptatem fuga excepturi incidunt!",
    positive_points: [{
        text: "a positive point"
    },
    {
        text: "another positive point"
    }],
    negative_points: [{
        text: "a negative point"
    }],
},]);

const questions = ref([{
    title: "Lorem ipsum dolor sit",
    body: "Lorem ipsum dolor sit, amet consectetur adipis adip?",
    answer: {
        user: "admin",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi tempora cum fugit, mollitia sed corporis dicta expedita unde, distinctio omnis earum ratione itaque saepe dolor minus voluptatem fuga excepturi incidunt!"
    }

},
{
    user: "user name",
    title: "Lorem ipsum dolor sit",
    body: "Lorem ipsum dolor sit, amet consectetur adipis adip?",
},
{
    title: "Lorem ipsum",
    body: "Lorem ipsum dolor sit, amet consectetur adipis adipisicing elit?",
    answer: {
        user: "admin 2",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi tempora cum fugit, mollitia sed corporis dicta expedita unde, distinctio omnis earum ratione itaque saepe dolor minus voluptatem fuga excepturi incidunt!"
    }
},]);

const userImages = ref([]);

//methods
function addCount() {
    if (count.value < 15)
        count.value++;
}

function reduceCount() {
    if (count.value > 1)
        count.value--;
}

//watchers
watch(()=> route.params.id, async()=>{
    await getProductDetails();
    userImages.value = [];
    for (let i = 0; i < 15; i++) {
        userImages.value.push({
            src: productDetails.value.image,
            alt: productDetails.value.title
        })
    }
})

//api
function getProductDetails() {
    return store.dispatch('getProductDetailsFromApi', route.params.id)
}
const productDetails = computed(() => {
    return store.getters.getProductDetails;
})

//hooks
onMounted(async () => {
    await getProductDetails();
    for (let i = 0; i < 15; i++) {
        userImages.value.push({
            src: productDetails.value.image,
            alt: productDetails.value.title
        })
    }
});
</script>