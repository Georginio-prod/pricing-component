<template>
    <div
        class="max-w-md h-full w-full flex flex-col items-center justify-center bg-background bg-[url('/public/bg-top.svg')] bg-left-top bg-no-repeat  px-6">

        <div class="text-center px-16 pt-16 pb-20 text-grisclair font-bold">
            <p class=" text-4xl">
                Our Pricing
            </p>

            <div class=" flex items-center pt-10">
                <div class="flex items-center gap-6 ">
                    <span :class="{ isYearly }">
                        <h1 class="opacity-50">Annually</h1>
                    </span>
                    <label class="relative flex items-center cursor-pointer ">
                        <input type="checkbox" class="sr-only peer" v-model="isYearly" />
                        <span
                            class="w-14 h-8 rounded-full flex flex-shrink-0 items-center p-1 transition-colors duration-300"
                            :class="isYearly ? 'bg-gradient-to-r from-linear to-linear1' : 'bg-gradient-to-r from-linear to-linear1'">

                            <span class="w-6 h-6 rounded-full block transform transition-transform duration-300"
                                :class="{ 'translate-x-6': isYearly, 'translate-x-0': !isYearly, 'bg-white': true }"></span>
                        </span>

                    </label>
                    <span :class="{ '': !isYearly }">
                        <h1 class="opacity-50">Monthly</h1>
                    </span>

                </div>
            </div>
        </div>

        <div class="flex flex-col items-center justify-center w-full gap-8 mb-20">
            <div
                class="text-center w-full flex flex-col items-center justify-center px-7 font-bold bg-white py-8 rounded-lg shadow-2xl">
                <p class="w-full pb-6 text-lg text-grisclair">
                    Basic
                </p>

                <div class="flex flex-col w-full ">
                    <h1 class="w-full pb-8 text-4xl text-number">
                        <p v-if="!isYearly" class="tracking-normal items-center flex justify-center "> &dollar;<span
                                class="font-bold text-7xl pl-2">199.99</span></p>
                        <p v-else class="tracking-normal items-center flex justify-center"> &dollar;<span
                                class="font-bold text-7xl pl-2">19.99</span></p>
                    </h1>

                    <table class="">
                        <thead class="">
                            <tr class="border-b">

                            </tr>
                        </thead>
                        <tbody class="text-grisclair text-base">
                            <tr class="border-b">
                                <th class="p-4">500 GB Storage</th>
                            </tr>
                            <tr class="border-b">
                                <th class="p-4">2 Users Allowed</th>
                            </tr>
                            <tr class="border-b">
                                <th class="p-4">Send up to 3 GB</th>
                            </tr>
                        </tbody>
                    </table>

                    <button @click="togglePrice"
                        class="text-sm font-bold text-white bg-gradient-to-b from-linear to-linear1 py-3 mt-10 w-full rounded-lg">
                        LEARN MORE
                    </button>
                </div>
            </div>

            <div
                class="text-center w-full flex flex-col items-center justify-center px-7 font-bold bg-gradient-to-br from-linear to-linear1 py-8 rounded-lg text-white shadow-2xl">
                <p class="w-full pb-6 text-lg ">
                    Professional
                </p>

                <div class="flex flex-col w-full ">
                    <h1 class="w-full pb-8 text-4xl">
                        <p v-if="!isYearly" class="tracking-normal items-center flex justify-center "> &dollar;<span
                                class="font-bold text-7xl pl-2">249.99</span></p>
                        <p v-else class="tracking-normal items-center flex justify-center"> &dollar;<span
                                class="font-bold text-7xl pl-2">24.99</span></p>
                    </h1>

                    <table class="">
                        <thead class="">
                            <tr class="border-b">

                            </tr>
                        </thead>
                        <tbody class=" text-base">
                            <tr class="border-b">
                                <th class="p-4"> 1 TB Storage</th>
                            </tr>
                            <tr class="border-b">
                                <th class="p-4">5 Users Allowed</th>
                            </tr>
                            <tr class="border-b">
                                <th class="p-4">Send up to 10 GB</th>
                            </tr>
                        </tbody>
                    </table>

                    <button @click="togglePrice" class="text-sm font-bold text-btn bg-white py-3 rounded-lg mt-10 w-full">
                        LEARN MORE
                    </button>
                </div>
            </div>

            <div
                class="text-center w-full flex flex-col items-center justify-center px-7 font-bold bg-white py-8 rounded-lg shadow-2xl">
                <p class="w-full pb-6 text-lg text-grisclair">
                    Master
                </p>

                <div class="flex flex-col w-full ">
                    <h1 class="w-full pb-8 text-4xl text-number">
                        <p v-if="!isYearly" class="tracking-normal items-center flex justify-center "> &dollar;<span
                                class="font-bold text-7xl pl-2">399.99</span></p>
                        <p v-else class="tracking-normal items-center flex justify-center"> &dollar;<span
                                class="font-bold text-7xl pl-2">39.99</span></p>
                    </h1>

                    <table class="">
                        <thead class="">
                            <tr class="border-b">

                            </tr>
                        </thead>
                        <tbody class="text-grisclair text-base">
                            <tr class="border-b">
                                <th class="p-4">2 TB Storage</th>
                            </tr>
                            <tr class="border-b">
                                <th class="p-4">10 Users Allowed</th>
                            </tr>
                            <tr class="border-b">
                                <th class="p-4">Send up to 20 GB</th>
                            </tr>
                        </tbody>
                    </table>

                    <button @click="togglePrice2"
                        class="text-sm font-bold text-white bg-gradient-to-b from-linear to-linear1 py-3 rounded-lg mt-10 w-full ">
                        LEARN MORE
                    </button>
                </div>
            </div>

        </div>





    </div>
</template>

<script>

export default {
    data() {
        return {
            isYearly: false
        };
    },
    methods: {
        togglePrice() {
            this.isYearly = !this.isYearly
        },
        togglePrice2() {
            this.isYearly = !this.isYearly
        }
    }
};
</script>

<style scoped></style>
