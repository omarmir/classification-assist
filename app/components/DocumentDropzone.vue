<script setup lang="ts">
const emit = defineEmits<{
  upload: [file: File]
}>()

const fileInput = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)

const selectFile = () => fileInput.value?.click()

const handleFiles = (files: FileList | null) => {
  const file = files?.[0]
  if (file) {
    emit('upload', file)
  }
}
</script>

<template>
  <section
    class="panel-shell p-6 md:p-7"
    :class="isDragging ? 'border-blue-800 bg-blue-50' : ''"
    @dragenter.prevent="isDragging = true"
    @dragover.prevent="isDragging = true"
    @dragleave.prevent="isDragging = false"
    @drop.prevent="
      isDragging = false;
      handleFiles($event.dataTransfer?.files ?? null)
    "
  >
    <div class="flex flex-wrap items-start justify-between gap-4">
      <div class="max-w-xl">
        <p class="data-kicker text-slate-500">Input</p>
        <h2 class="mt-2 text-2xl font-semibold text-slate-950">Upload a Word document</h2>
        <p class="mt-3 max-w-lg text-sm leading-6 text-slate-700">
          Client-side `.docx` parsing only. The workspace extracts text locally, checks for explicit markings,
          and prepares a short evidence window for the offline model.
        </p>
      </div>

      <UButton color="primary" size="lg" @click="selectFile">
        Choose `.docx`
      </UButton>
    </div>

    <div class="mt-8 border border-dashed border-slate-400 bg-slate-50 px-5 py-10 text-center">
      <p class="text-base font-medium text-slate-950">Drop a file here or use the button above.</p>
      <p class="mt-2 text-sm text-slate-600">Legacy `.doc` files, encrypted files, and scanned image-only documents are not supported in v1.</p>
    </div>

    <input
      ref="fileInput"
      type="file"
      accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      class="hidden"
      @change="handleFiles(($event.target as HTMLInputElement).files)"
    >
  </section>
</template>
