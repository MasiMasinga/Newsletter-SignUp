<template>
    <div class="bg-white w-screen h-screen">
        <div v-if="!isSubscribed" class="xs:flex xs:flex-col-reverse md:p-4 md:grid md:grid-cols-2 md:gap-2 md:h-full">
            <div class="flex flex-col self-center py-8 xs:px-12 md:px-20">
                <Typography text="Stay Updated!" fontSize="text-5xl" marginBottom="mb-2" textAlign="text-left" />
                <Typography text="Join 60,000+ product managers receiving monthly updates on:" fontWeight="font-normal"
                    fontSize="text-base" marginTop="mt-4" marginBottom="mb-4" textAlign="text-left" />

                <div class="flex flex-row">
                    <img src="./assets/icon-success.svg" alt="bullet-icon" class="h-4" />
                    <Typography text="Product discovery and building what matters" fontWeight="font-normal"
                        fontSize="text-xs" marginLeft="ml-2" />
                </div>

                <div class="flex flex-row mt-2">
                    <img src="./assets/icon-success.svg" alt="bullet-icon" class="h-4" />
                    <Typography text="Measuring to ensure updates are a success" fontWeight="font-normal" fontSize="text-xs"
                        marginLeft="ml-2" />
                </div>

                <div class="flex flex-row mt-2 mb-2">
                    <img src="./assets/icon-success.svg" alt="bullet-icon" class="h-4" />
                    <Typography text="And much more!" fontWeight="font-normal" fontSize="text-xs" marginLeft="ml-2" />
                </div>

                <form @submit="submitForm" novalidate class="mt-8">
                    <div class="flex items-center justify-between">
                        <InputLabel v-model="email" type="email" required label="Email address" />
                        <p v-if="errorMessage" class="text-red-500 font-bold text-xs">{{ errorMessage }}</p>
                    </div>
                    <input class="rounded-md border-secondary border-2 p-6 w-full h-8 mt-1 mb-4" v-model="email"
                        label="email-address" placeholder="Your email address..." type="email" required />
                    <Button title="Subscribe to monthly newsletter" type="submit" />
                </form>
            </div>
            <div class="flex justify-center p-2">
                <img src="./assets/illustration-sign-up-desktop.svg" alt="illustration" />
            </div>
        </div>
        <SuccessPage v-else-if="isSubscribed" :resetIsSubscribed="resetIsSubscribed" />
    </div>
</template>


<script>
import SuccessPage from './components/SuccessPage.vue';
export default {
    components: {
        SuccessPage,
    },
    data() {
        return {
            email: '',
            errorMessage: '',
            isSubscribed: false,
        };
    },
    methods: {
        submitForm(event) {
            event.preventDefault();
            const email = this.email.trim();
            if (!email) {
                this.errorMessage = 'Valid email is required';
            } else if (!this.emailIsValid(email)) {
                this.errorMessage = 'Please enter a valid email address';
            } else {
                this.errorMessage = '';
                this.isSubscribed = true;
            }
        },
        emailIsValid() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(this.email);
        },
        resetIsSubscribed() {
            this.isSubscribed = false;
        },
    },
};
</script>