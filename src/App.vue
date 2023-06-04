<template>
  <div class="bg-white w-screen h-screen">
    <div class="p-4 grid grid-cols-2 gap-2">
      <div class="flex flex-col self-center pt-8 px-20">
        <Typography text="Stay Updated!" fontSize="text-5xl" marginBottom="mb-2" textAlign="text-left" />
        <Typography text="Join 60,000+ product managers receiving monthly updates on:" fontWeight="font-normal"
          fontSize="text-base" marginTop="mt-4" marginBottom="mb-4" textAlign="text-left" />

        <div class="flex flex-row">
          <img src="./assets/icon-success.svg" alt="bullet-icon" class="h-4" />
          <Typography text="Product discovery and building what matters" fontWeight="font-normal" fontSize="text-xs"
            marginLeft="ml-2" />
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

        <form class="mt-8">
          <InputFieldLabel label="Email address" fontWeight="font-bold" />
          <InputField placeholder="email@company.com" marginTop="mt-2" marginBottom="mb-4" marginLeft="ml-2" />
          <Button title="Subscribe to monthly newsletter" />
        </form>
      </div>
      <div class="flex justify-center p-2">
        <img src="./assets/illustration-sign-up-desktop.svg" alt="illustration" />
      </div>
    </div>
  </div>
</template>
