<template>
  <section class="settings-sectoin">
    <div class="settings-sectoin__title">Оповещения о новых подборках</div>
    <div class="settings-sectoin__content">
      <p class="settings-sectoin__desc">
        Выберите, куда будут приходить уведомления при появлении автомобилей,
        которые подходят под критерии вашей подборки.
      </p>
      <div class="notfication-settings">
        <p class="notfication-settings__subcaption">Уведомления</p>
        <form class="notfication-settings__form">
          <div
            class="notfication-settings__radio-label notfication-settings__radio-label--bottom"
          >
            <input
              class="hidden-input"
              type="radio"
              id="is-notification-none"
              value="None"
              v-model="notifytype"
            />
            <label for="is-notification-none" class="radio-label__item">
              Выкл
            </label>
          </div>
          <div
            class="notfication-settings__radio-label notfication-settings__radio-label--bottom"
          >
            <input
              class="hidden-input"
              type="radio"
              id="is-notification-email"
              value="Email"
              v-model="notifytype"
            />
            <label for="is-notification-email" class="radio-label__item">
              Email
            </label>
            <span
              class="notfication-settings__contact"
              v-show="!emailInputActive"
              >{{ email }}</span
            >
            <input
              type="text"
              :class="`settings-sectoin__input`"
              v-model="userEmailInput"
              v-show="emailInputActive"
            />
            <span
              class="radio-label__ico"
              @click="changeEmailInput()"
              v-show="!emailInputActive"
              ><i class="fas fa-pen"></i
            ></span>
          </div>
          <div class="notfication-settings__radio-label">
            <input
              class="hidden-input"
              type="radio"
              id="is-notification-telegram"
              value="Telegram"
              v-model="notifytype"
            />
            <label for="is-notification-telegram" class="radio-label__item">
              Telegram ID
            </label>

            <input
              type="text"
              :class="`settings-sectoin__input`"
              v-show="telegramInputActive"
            />
            <span
              class="radio-label__ico"
              @click="changeTelegramlInput()"
              v-show="!telegramInputActive"
              ><i class="fas fa-pen"></i
            ></span>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "nofi-settings",

  data() {
    return {
      emailInputActive: false,
      telegramInputActive: false,
    };
  },
  props: {
    notifytype: {
      type: String,
    },
    email: {
      type: String,
    },
  },

  computed: {
    userEmailInput: {
      get: function () {
        return this.email;
      },
      set: function (newValue) {
        this.$emit("update:email", newValue);
      },
    },
  },
  methods: {
    changeEmailInput() {
      this.emailInputActive = true;
    },
    changeTelegramlInput() {
      this.telegramInputActive = true;
    },
  },
};
</script>

<style lang="scss">
input[type="radio"]:checked + label:after {
  content: "";
  width: 10px;
  height: 10px;
  display: inline-block;
  background: #13c58a;
  border-radius: 50%;
  position: absolute;
  align-self: center;
  left: 4px;
  top: 4px;
}

input[type="radio"]:checked + label:before {
  border: 2px solid #13c58a;
}
.radio-label__item {
  font-size: 17px;
  position: relative;
  padding: 0 0 0 2.5rem;

  &::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid #13c58a;
    border-radius: 50%;
    margin-right: 0.5em;
    position: absolute;
    align-self: center;
    left: 0px;
    top: 0px;
  }
}
</style>
