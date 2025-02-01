<template>
	<v-container class="py-8">
		<v-row>
			<v-col cols="12">
				<slot name="title"></slot>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12">
				<v-card class="pa-6">
					<slot name="content"></slot>
				</v-card>
			</v-col>
		</v-row>

		<v-row v-if="$slots.actions">
			<v-col cols="12" class="d-flex justify-end gap-4">
				<slot name="actions"></slot>
			</v-col>
		</v-row>
	</v-container>
</template>
