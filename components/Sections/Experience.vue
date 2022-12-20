<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ $t('workExperiences.title') }}</h2>

    <div class="resume-item d-flex flex-column flex-md-row mb-5">
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ $t('workExperiences.works.bequant.position') }}</h3>
        <div class="subheading mb-3">{{ $t('workExperiences.works.bequant.company') }}</div>
        <p v-html="$t('workExperiences.works.bequant.responsibilities')"/>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ $t('workExperiences.works.bequant.startEndDate') }}</span>
      </div>
    </div>

    <div class="resume-item d-flex flex-column flex-md-row mb-5">
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ $t('workExperiences.works.cointelegraph.position') }}</h3>
        <div class="subheading mb-3">{{ $t('workExperiences.works.cointelegraph.company') }}</div>
        <p v-html="$t('workExperiences.works.cointelegraph.responsibilities')"/>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ $t('workExperiences.works.cointelegraph.startEndDate') }}</span>
      </div>
    </div>

    <div class="resume-item d-flex flex-column flex-md-row mb-5">
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ $t('workExperiences.works.coddan.position') }}</h3>
        <div class="subheading mb-3">{{ $t('workExperiences.works.coddan.company') }}</div>
        <p v-html="$t('workExperiences.works.coddan.responsibilities')"/>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ $t('workExperiences.works.coddan.startEndDate') }}</span>
      </div>
    </div>

    <div class="resume-item d-flex flex-column flex-md-row mb-5">
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ $t('workExperiences.works.freelance.position') }}</h3>
        <div class="subheading mb-3">{{ $t('workExperiences.works.freelance.company') }}</div>
        <p v-html="$t('workExperiences.works.freelance.responsibilities')"/>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ $t('workExperiences.works.freelance.startEndDate') }}</span>
      </div>
    </div>

    <div class="resume-item d-flex flex-column flex-md-row mb-5">
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ $t('workExperiences.works.vikingRetail.position') }}</h3>
        <div class="subheading mb-3">{{ $t('workExperiences.works.vikingRetail.company') }}</div>
        <p v-html="$t('workExperiences.works.vikingRetail.responsibilities')"/>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ $t('workExperiences.works.vikingRetail.startEndDate') }}</span>
      </div>
    </div>

    <div class="resume-item d-flex flex-column flex-md-row mb-5">
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ $t('workExperiences.works.start.position') }}</h3>
        <div class="subheading mb-3">{{ $t('workExperiences.works.start.company') }}</div>
        <p v-html="$t('workExperiences.works.start.responsibilities')"/>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ $t('workExperiences.works.start.startEndDate') }}</span>
      </div>
    </div>

    <div class="resume-item d-flex flex-column flex-md-row mb-5">
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ $t('workExperiences.works.seismoshelf.position') }}</h3>
        <div class="subheading mb-3">{{ $t('workExperiences.works.seismoshelf.company') }}</div>
        <p v-html="$t('workExperiences.works.seismoshelf.responsibilities')"/>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ $t('workExperiences.works.seismoshelf.startEndDate') }}</span>
      </div>
    </div>
  </div>

</template>
