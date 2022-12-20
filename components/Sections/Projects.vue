<script setup lang="ts">
import CardProject from "@/components/Sections/CardProject";
</script>
<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ $t('projects.title') }}</h2>
    <CardProject :projectInfo="$t('projects.plutonium')" class="mb-5"/>
    <CardProject :projectInfo="$t('projects.timeseries')" class="mb-5"/>
    <CardProject :projectInfo="$t('projects.other')" class="mb-5"/>
  </div>
</template>