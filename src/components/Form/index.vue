<script setup lang="ts">
import { ref } from "vue";
import store from '@store/index';

const emits = defineEmits(["handleAddFormVisible"])

// Initialize the initial value for form data
const formData = ref({
  todo: '',
  completed: false,
  userId: 5
});

// Handled when submitting the form
const handleSubmitForm = () => {
  if (formData.value.todo !== "") {
    const { todo, completed, userId } = formData.value;
    formData.value.todo = '';
    const newItem = {
      todo: todo,
      completed: completed,
      userId: userId
    }
    store.dispatch("addItem", newItem);
  }
  else {
    alert("Please enter item todo");
  }
}

// Operation to delete data on the form
const handleClearForm = () => {
  formData.value.todo = '';
  emits("handleAddFormVisible")
}

</script>

<template>
  <div>
    <form class="form-inline" @submit.prevent="handleSubmitForm">
      <div class="form-group marginR5 ">
        <input type="text" class="form-control" placeholder="Item todo" v-model="formData.todo" />
      </div>
      <div class="form-group">
        <select class="form-control marginR5" v-model="formData.completed">
          <option :value=true>Done</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary marginR5 ">Submit</button>
      <button type="button" class="btn btn-default" @click="handleClearForm">Cancel</button>
    </form>
  </div>
</template>

<style scoped></style>