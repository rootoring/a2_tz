<template>
  <section class="settings-sectoin">
    <div class="settings-sectoin__title">Учётная запись</div>
    <div class="settings-sectoin__content">
      <div class="notfy-items">
        <div class="settings-sectoin__item notfy-items__item">
          <label class="settings-sectoin__label notfy-items__label"
            >Компания</label
          >
          <input
            type="text"
            class="settings-sectoin__input"
            :value="userData.companyname"
          />
        </div>
        <div class="settings-sectoin__item notfy-items__item">
          <label class="settings-sectoin__label notfy-items__label"
            >Логин</label
          >
          <input
            type="text"
            class="settings-sectoin__input"
            :value="userData.login"
          />
        </div>
        <div class="settings-sectoin__item notfy-items__item">
          <label class="settings-sectoin__label notfy-items__label"
            >Номер телефона</label
          >
          <input
            type="text"
            class="settings-sectoin__input"
            :value="userData.phone"
          />
        </div>
        <div class="settings-sectoin__item notfy-items__item">
          <label class="settings-sectoin__label notfy-items__label">Имя</label>
          <input
            type="text"
            class="settings-sectoin__input"
            :value="userData.fname"
          />
        </div>
        <div class="settings-sectoin__item notfy-items__item">
          <label class="settings-sectoin__label notfy-items__label"
            >Фамилия</label
          >
          <input
            type="text"
            class="settings-sectoin__input"
            :value="userData.lname"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
    },
  },
};
</script>
