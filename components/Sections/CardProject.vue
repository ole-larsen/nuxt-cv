<script setup>
const props = defineProps(["projectInfo"]);
const projectInfo = props.projectInfo;
</script>
<template>
  <div>
    <div
      class="card shadow mb-5 bg-white rounded"
      style="width: 100%; text-align: center"
    >
      <div class="card-body">
        <h5 class="card-title">{{ $t(`${projectInfo}.name`) }}</h5>
        <p class="card-text">
          {{ $t(`${projectInfo}.description`) }}
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.card {
  border: none;
}
</style>
