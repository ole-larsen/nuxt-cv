<template>
  <div class="my-auto">
    <h1 class="mb-0">
      {{ $t('personalInfo.name') }}
      <span class="text-primary">{{ $t('personalInfo.lastName') }}</span>
    </h1>

    <h3 class="mb-4">
      Full Stack Web Developer
    </h3>

    <div class="subheading mb-5">
      {{ $t('personalInfo.city') }} · {{ $t('personalInfo.phoneNumber') }} ·
      <a href="mailto:name@email.com">{{ $t('personalInfo.email') }}</a>
    </div>
    <div class="mb-5" v-html="$t('personalInfo.myDescription')"></div>

    <ul class="list-inline list-social-icons">
      <li class="list-inline-item">
        <a target="blank" :href="$t('personalInfo.github')">
          <span class="fa-stack fa-lg">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </span>
        </a>
      </li>
      <li class="list-inline-item">
        <a target="blank" :href="$t('personalInfo.linkedin')">
          <span class="fa-stack fa-lg">
            <font-awesome-icon :icon="['fab', 'linkedin']"/>
          </span>
        </a>
      </li>
      <li class="list-inline-item">
        <a target="blank" :href="$t('personalInfo.telegram')">
          <span class="fa-stack fa-lg">
            <font-awesome-icon :icon="['fab', 'telegram']"/>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>
