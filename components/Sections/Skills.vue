<script setup lang="ts">
const devIcons = [
  "devicon-php-plain",
  "devicon-javascript-plain",
  "devicon-typescript-plain",
  "devicon-go-plain",
  "devicon-git-plain",
  "devicon-nodejs-plain",
  "devicon-bootstrap-plain",
  "devicon-github-original",
  "devicon-gitlab-plain",
  "devicon-web3-plain",
  "devicon-linux-plain",
  "devicon-react-original",
  "devicon-vuejs-plain",
  "devicon-visualstudio-plain",
  "devicon-phpstorm-plain",
  "devicon-mongodb-plain",
  "devicon-mysql-plain",
  "devicon-postgresql-plain"
];

</script>
<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ $t('skills.title') }}</h2>

    <div class="subheading mb-3">{{ $t('skills.iconsTitle') }}</div>
    <ul class="list-inline list-icons" style="text-align:center">
      <li v-for="icon in devIcons" :key="icon" class="list-inline-item">
        <i :class="icon"></i>
      </li>
    </ul>

    <div class="subheading mb-3">{{ $t('skills.workflow') }}</div>
    <ul class="fa-ul mb-0">
      <li>
        <div v-html="$t('skills.item')"></div>
      </li>
    </ul>
  </div>
</template>
