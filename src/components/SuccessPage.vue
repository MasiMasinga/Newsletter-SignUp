<template>
    <div class="bg-white w-screen h-screen">
        <div class="flex flex-col items-center justify-center h-full">
            <img src="../assets/icon-list.svg" alt="Success Icon" class="h-24 mb-4" />
            <Typography text="Thanks for subscribing!" fontSize="text-4xl" fontWeight="font-bold" />
            <Typography
                text="A confirmation email has been sent to johndoe@gmail.com. Please open it and click the button inside to confirm your subscription"
                fontSize="text-base" marginTop="mt-4" textAlign="text-center" />
            <div class="mt-2 p-2 xs:w-full md:w-2/4">
                <Button title="Dismiss Message" type="button" @click="resetSubscription" />
            </div>
        </div>
    </div>
</template>
  
<script>
import Typography from './Typography.vue';
import Button from '../components/Button.vue';

export default {
    components: {
        Typography,
        Button
    },
    props: {
        resetIsSubscribed: {
            type: Function,
            required: true,
        },
    },
    methods: {
        resetSubscription() {
            this.resetIsSubscribed();
        },
    },
};
</script>
  
