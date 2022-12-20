<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ $t("educationDegrees.title") }}</h2>

    <div class="resume-item d-flex flex-column flex-md-row mb-5">
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ $t('educationDegrees.univercity.collage') }}</h3>
        <div class="subheading mb-3">{{ $t('educationDegrees.univercity.name') }}</div>
        <div>{{ $t('educationDegrees.univercity.item') }}</div>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ $t('educationDegrees.univercity.startEndDate') }}</span>
      </div>
    </div>

    <div class="resume-item d-flex flex-column flex-md-row mb-5">
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ $t('educationDegrees.courses.collage') }}</h3>
        <div class="subheading mb-3">{{ $t('educationDegrees.courses.name') }}</div>
        <div>{{ $t('educationDegrees.courses.item') }}</div>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ $t('educationDegrees.courses.startEndDate') }}</span>
      </div>
    </div>

    <div class="resume-item d-flex flex-column flex-md-row mb-5">
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ $t('educationDegrees.degrees.collage') }}</h3>
        <div class="subheading mb-3">{{ $t('educationDegrees.degrees.name') }}</div>
        <div>{{ $t('educationDegrees.degrees.item') }}</div>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ $t('educationDegrees.degrees.startEndDate') }}</span>
      </div>
    </div>
  </div>
</template>
