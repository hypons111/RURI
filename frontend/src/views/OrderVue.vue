<template>
  <div class="order">
    <h1>ORDER</h1>
    <div></div>
  </div>
</template>

<script setup>
// 導入 API 函數
import { onMounted } from 'vue'
import axios from 'axios'
import API from '../router/api.js'

function getAllOrder () {
  axios
    .get(API('https://ruri-7e39a394056b.herokuapp.com/getAllIngredients'))
    .then(response => {
      console.log(response)
    })
}

onMounted(() => {
  getAllOrder()
})

</script>

<style></style>
