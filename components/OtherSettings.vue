<template>
  <section class="settings-sectoin">
    <div class="settings-sectoin__title">Прочие настройки</div>
    <div class="other-settings">
      <div class="other-settings__time-zone">
        <label class="other-settings__tz-label" for="zone-select"
          >Часавой пояс</label
        >
        <select
          class="other-settings__tz-select"
          name="zone-select"
          id="zone-select"
        >
          <option value="Калининград">Калининград</option>
          <option value="Самара">Самара</option>
          <option value="Омск">Омск</option>
          <option value="Якутск">Якутск</option>
        </select>
      </div>
      <div class="other-settings__update-chek">
        <input class="hidden-input" type="checkbox" id="auto-update-checked" />
        <label class="other-settings__update-label" for="auto-update-checked">
          Автоматически переходить к новым объявлениям
        </label>

        <span class="other-settings__hint question">
          <i class="question__ico fas fa-question-circle"></i>
          <div class="question__content">
            Лента будет автоматически обновляться 1 раз в 3 секунды
          </div>
        </span>
      </div>
      <div class="other-settings__bottom">
        <button class="other-settings__btn" @click="$emit('sendForm')">
          Сохранить
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
input[type="checkbox"]:checked + label:after {
  content: "✔";
  color: aliceblue;
  display: inline-block;
  background: #13c58a;
  position: absolute;
  align-self: center;
  left: 4px;
  top: 4px;
}

input[type="checkbox"]:checked + label:before {
  background-color: #13c58a;
}

.other-settings__update-label {
  display: flex;
  padding-left: 10px;
  &::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid #13c58a;
    margin-right: 0.5em;
    position: absolute;
    align-self: center;
    left: 0px;
    top: 0px;
    border-radius: 3px;
  }
}
</style>
