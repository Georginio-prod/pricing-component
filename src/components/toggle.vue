<template>
    <div
        class="min-h-screen max-w-sm h-full w-full flex flex-col items-center justify-center bg-background bg-[url('/public/bg-top.svg')] px-6">

        <div class="text-center px-16 pt-16 pb-20">
            <p>
                Our Pricing
            </p>

            <div class=" flex items-center pt-10">
                <div class="flex items-center gap-6">
                    <span :class="{ 'opacity-50 ': isYearly }">
                        Annually
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
                    <span :class="{ 'opacity-50': !isYearly }">
                        Monthly
                    </span>

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
        }
    }
};
</script>

<style scoped></style>
