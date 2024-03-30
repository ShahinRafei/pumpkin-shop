<template>
    <div class="w-full bg-slate-700 p-5 mt-5">
        <h2 class="hidden md:block text-center text-2xl font-semibold text-slate-200 mb-5">Steps to receive goods</h2>
        <div class="w-full hidden md:flex justify-evenly items-center">

            <div class="flex flex-col items-center">
                <div
                    class="aspect-square rounded-full border-2 border-dashed border-slate-100 d-flex justify-center items-center p-7 animate-spin-slow">
                    <font-awesome-icon icon="fa-solid fa-shopping-cart"
                        class="text-white text-4xl animate-spin-slow-reverse" />
                </div>
                <p class="text-slate-100 font-semibold mt-2">Buy what you need</p>
            </div>

            <div class="flex flex-col items-center">
                <div
                    class="aspect-square rounded-full border-2 border-dashed border-slate-100 d-flex justify-center items-center p-7 animate-spin-slow">
                    <font-awesome-icon icon="fa-solid fa-credit-card"
                        class="text-white text-4xl animate-spin-slow-reverse" />
                </div>
                <p class="text-slate-100 font-semibold mt-2">Pay online</p>
            </div>

            <div class="flex flex-col items-center">
                <div
                    class="aspect-square rounded-full border-2 border-dashed border-slate-100 d-flex justify-center items-center p-7 animate-spin-slow">
                    <font-awesome-icon icon="fa-solid fa-truck" class="text-white text-4xl animate-spin-slow-reverse" />
                </div>
                <p class="text-slate-100 font-semibold mt-2">Wait few days</p>
            </div>

            <div class="flex flex-col items-center">
                <div
                    class="aspect-square rounded-full border-2 border-dashed border-slate-100 d-flex justify-center items-center p-7 animate-spin-slow">
                    <font-awesome-icon icon="fa-solid fa-box-open" class="text-white text-4xl animate-spin-slow-reverse" />
                </div>
                <p class="text-slate-100 font-semibold mt-2">Receive your goods</p>
            </div>

        </div>

        

        <div
            class="w-full md:border-t-2 border-slate-600/70 md:mt-10 flex justify-center items-center gap-5 text-2xl text-slate-100 md:pt-5">
            <font-awesome-icon icon="fa-brands fa-telegram" />
            <font-awesome-icon icon="fa-brands fa-instagram" />
            <font-awesome-icon icon="fa-brands fa-whatsapp" />
            <font-awesome-icon icon="fa-brands fa-linkedin" />
            <font-awesome-icon icon="fa-brands fa-x-twitter" />
        </div>
    </div>
</template>