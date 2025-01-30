<template>
	<div class="code-block">
		<div v-if="title" class="code-header">
			<span>{{ title }}</span>
		</div>
		<pre><code :class="`language-${language}`" ref="codeBlock"><slot></slot></code></pre>
	</div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';

const props = defineProps({
	title: {
		type: String,
		default: '',
	},
	language: {
		type: String,
		default: 'bash',
	},
});

const codeBlock = ref(null);

const highlightCode = () => {
	if (codeBlock.value) {
		Prism.highlightElement(codeBlock.value);
	}
};

onMounted(() => {
	highlightCode();
});

// Оновлюємо підсвічування при зміні контенту
watch(() => props.language, highlightCode);
</script>

<style>
/* Перевизначаємо стилі Prism для темної теми */
.v-theme--dark code[class*='language-'],
.v-theme--dark pre[class*='language-'] {
	color: rgb(var(--v-theme-on-surface));
	background: none;
	text-shadow: none;
}

.v-theme--dark .token.comment,
.v-theme--dark .token.prolog,
.v-theme--dark .token.doctype,
.v-theme--dark .token.cdata {
	color: #8b949e;
}

.v-theme--dark .token.punctuation {
	color: #c9d1d9;
}

.v-theme--dark .token.property,
.v-theme--dark .token.tag,
.v-theme--dark .token.boolean,
.v-theme--dark .token.number,
.v-theme--dark .token.constant,
.v-theme--dark .token.symbol,
.v-theme--dark .token.deleted {
	color: #79c0ff;
}

.v-theme--dark .token.selector,
.v-theme--dark .token.attr-name,
.v-theme--dark .token.string,
.v-theme--dark .token.char,
.v-theme--dark .token.builtin,
.v-theme--dark .token.inserted {
	color: #a5d6ff;
}

.v-theme--dark .token.operator,
.v-theme--dark .token.entity,
.v-theme--dark .token.url,
.v-theme--dark .language-css .token.string,
.v-theme--dark .style .token.string {
	color: #ff7b72;
}

.v-theme--dark .token.atrule,
.v-theme--dark .token.attr-value,
.v-theme--dark .token.keyword {
	color: #ff7b72;
}

.v-theme--dark .token.function,
.v-theme--dark .token.class-name {
	color: #d2a8ff;
}

.v-theme--dark .token.regex,
.v-theme--dark .token.important,
.v-theme--dark .token.variable {
	color: #c9d1d9;
}
</style>

<style scoped>
.code-block {
	margin: 20px 0;
	border-radius: 8px;
	overflow: hidden;
	background-color: rgb(var(--v-theme-surface));
	border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}

.code-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px 16px;
	background-color: rgb(var(--v-theme-surface-variant));
	font-family: system-ui, -apple-system, sans-serif;
	font-size: 13px;
	color: rgb(var(--v-theme-on-surface-variant));
	border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}

pre {
	margin: 0;
	padding: 16px;
	background-color: rgb(var(--v-theme-surface));
	overflow-x: auto;
	font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
	font-size: 14px;
	line-height: 1.5;
}

code {
	background: transparent !important;
	padding: 0 !important;
	font-family: inherit;
}

:deep(pre[class*='language-']) {
	margin: 0;
	padding: 16px;
	background: transparent;
}

:deep(code[class*='language-']) {
	background: transparent;
	padding: 0;
	text-shadow: none;
}
</style>
