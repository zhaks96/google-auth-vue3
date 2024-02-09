<script setup lang="ts">
// handle success event
const handleLoginSuccess = (response: any) => {
  const { credential } = response;
  console.log("Access Token", credential);
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>

<template>
  <GoogleSignInButton
    @success="handleLoginSuccess"
    @error="handleLoginError"
  ></GoogleSignInButton>
</template>
