<script setup lang="ts">
  import DarkModeBtn from "@/components/DarkModeBtn";
  import Resume from "@/components/Resume";
  import jump from "jump.js";

  function jumpTo(element: string) {
    jump(element);
  }

  const { locale } = useI18n();
</script>

<template>
  <NuxtLayout>
    <section>
      <nav
          class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
      >
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">Resume Oleg Nazarov</span>
          <span class="d-none d-lg-block">
          <img
              class="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="/profile.jpg"
              alt=""
          />
        </span>
        </a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                  class="nav-link js-scroll-trigger"
                  @click="jumpTo('#about')"
                  href="#"
              >{{ $t('links.about') }}</a
              >
            </li>
            <li class="nav-item">
              <a
                  class="nav-link js-scroll-trigger"
                  @click="jumpTo('#education')"
                  href="#"
              >{{ $t('links.education') }}</a
              >
            </li>
            <li class="nav-item">
              <a
                  class="nav-link js-scroll-trigger"
                  @click="jumpTo('#experience')"
                  href="#"
              >{{ $t('links.experience') }}</a
              >
            </li>
            <li class="nav-item">
              <a
                  class="nav-link js-scroll-trigger"
                  @click="jumpTo('#skills')"
                  href="#"
              >{{ $t('links.skills') }}</a
              >
            </li>
            <li class="nav-item">
              <a
                  class="nav-link js-scroll-trigger"
                  @click="jumpTo('#interests')"
                  href="#"
              >{{ $t('links.interests') }}</a
              >
            </li>
            <li class="nav-item">
              <a
                  class="nav-link js-scroll-trigger"
                  @click="jumpTo('#projects')"
                  href="#"
              >{{ $t('links.projects') }}</a
              >
            </li>
            <li class="nav-item">
              <div style="position:fixed; bottom:10px; left:10px; z-index:1000;">
                <DarkModeBtn />
              </div>
            </li>
            <li class="nav-item">
              <div style="position:fixed; bottom:10px; right: 10px;z-index:1000;">
                <form>
                  <select v-model="locale" class="btn btn-light">
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                  </select>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div class="resume">
        <Resume />
      </div>
    </section>
  </NuxtLayout>
</template>
