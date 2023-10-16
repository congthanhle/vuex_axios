<script setup lang="ts">
import { ref } from 'vue';
import type { Item } from '@/store/todoItems/state';
import store from "@store/index"

const props = defineProps<{
	item: Item,
	index: number
}>()

const emits = defineEmits(["cancelEditedItem"])

// Assign the item's value to the form for editing
const formData = ref({
	todo: props.item.todo,
	completed: props.item.completed
});

const handleSaveClick = () => {
	const { todo, completed } = formData.value;
	const editedItem = {
		id: props.item.id,
		todo,
		completed,
	}
	store.dispatch("editItem", editedItem);
	handleCancelClick();
}

const handleCancelClick = () => {
	emits('cancelEditedItem');
}

</script>
<template>
	<tr>
		<td class="text-center">{{ index }}</td>
		<td>
			<input type="text" class="form-control" v-model="formData.todo" />
		</td>
		<td class="text-center">
			<select class="form-control" v-model="formData.completed">
				<option :value=true>Done</option>
				<option :value=false>Need to commplete</option>
			</select>
		</td>
		<td>
			<button type="button" class="btn btn-default btn-sm marginR5" @click="handleCancelClick">Cancel</button>
			<button type="button" class="btn btn-success btn-sm" @click="handleSaveClick">Save</button>
		</td>
	</tr>
</template>

<style scoped></style>