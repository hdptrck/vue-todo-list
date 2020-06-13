<template>
  <transition v-if="show" name="fade">
    <v-list-item class="h-69">
      <v-list-item-action>
        <v-checkbox
          ref="checkboxComplete"
          color="primary"
          v-model="tempIsCompleted"
          v-on:change="updateIsCompleted"
        ></v-checkbox>
      </v-list-item-action>
      <v-list-item-content>
        <v-tooltip v-if="!isEditable" bottom open-delay="500">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item-title
              class="item-title"
              v-bind:class="{ lineTrough: isCompleted }"
              v-on:dblclick="enableEdit"
              v-on="on"
              v-bind="attrs"
              >{{ description }}</v-list-item-title
            >
          </template>
          <span>{{ description }}</span>
        </v-tooltip>
        <input
          class="input"
          type="text"
          v-if="isEditable"
          ref="desc"
          v-bind:class="{ lineTrough: isCompleted }"
          v-model="tempDescription"
          v-on:keyup.enter="updateDescription"
          v-on:keydown.esc="disableEdit"
          maxlength="128"
        />
      </v-list-item-content>
      <!--Edit-->
      <v-list-item-action v-if="!isEditable">
        <v-btn icon v-on:mouseup="enableEdit()">
          <v-icon>$vuetify.icons.edit</v-icon>
        </v-btn>
      </v-list-item-action>
      <!--Confirm editing-->
      <v-list-item-action v-if="isEditable">
        <v-btn icon v-on:mouseup="updateDescription()">
          <v-icon color="success">$vuetify.icons.complete</v-icon>
        </v-btn>
      </v-list-item-action>
      <!--Remove-->
      <v-list-item-action v-if="!isEditable">
        <v-btn icon v-on:click="remove()">
          <v-icon color="error">mdi-delete</v-icon>
        </v-btn>
      </v-list-item-action>
      <!--Cancel editing-->
      <v-list-item-action v-if="isEditable">
        <v-btn icon v-on:click="disableEdit()">
          <v-icon color="error">$vuetify.icons.close</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </transition>
</template>

<script>
import Vue from "vue";

export default {
  data: () => ({
    isEditable: false,
    tempDescription: "",
    tempIsCompleted: Boolean,
    show: false
  }),
  props: {
    description: String,
    isCompleted: Boolean
  },
  mounted() {
    this.tempIsCompleted = this.isCompleted;
    this.show = true;
  },
  methods: {
    updateIsCompleted() {
      this.$emit("on-complete", this.tempIsCompleted);
    },
    updateDescription() {
      this.$emit("on-edit", this.tempDescription);
      this.disableEdit();
    },
    remove() {
      this.show = !this.show;
      Vue.nextTick(() => {
        window.setTimeout(() => {
          this.$emit("on-remove");
        }, 500);
      });
    },
    enableEdit() {
      this.tempDescription = this.description;
      this.isEditable = true;
      Vue.nextTick(() => {
        this.focusInput();
      });
    },
    disableEdit() {
      this.isEditable = false;
    },
    focusInput() {
      this.$refs.desc.focus();
    }
  }
};
</script>

<style scoped lang="sass">
$input-padding: 12px
$input-radius: 4px

.h-69
    height: 69px !important

.lineTrough
    text-decoration: line-through

.input
    padding: $input-padding
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)
    border-radius: $input-radius
    line-height: 1.2em


.input:focus
    outline: none

.item-title
    padding: $input-padding

.fade-enter-active, .fade-leave-active
    transition: opacity .5s

.fade-enter, .fade-leave-to
    opacity: 0
</style>
