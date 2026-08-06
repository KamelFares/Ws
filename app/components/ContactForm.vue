<script setup lang="ts">
const fields = ref({
  name: '',
  email: '',
  message: ''
})

const { isValid, cssVars } = useFormEnergy(fields)

const submitted = ref(false)

function handleSubmit() {
  if (!isValid.value) return
  submitted.value = true
  // In production, this would POST to an API
  setTimeout(() => {
    fields.value = { name: '', email: '', message: '' }
    submitted.value = false
  }, 3000)
}
</script>

<template>
  <div class="max-w-lg mx-auto" :style="cssVars">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Name -->
      <div>
        <label class="block text-xs uppercase tracking-wider mb-1" style="color: var(--text-muted); font-family: var(--font-mono);">
          Name
        </label>
        <input
          v-model="fields.name"
          type="text"
          class="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-300"
          style="
            background: var(--bg-elevated);
            border-color: var(--border);
            color: var(--text);
            font-family: var(--font-body);
            animation: energy-pulse var(--energy-duration, 3s) ease-in-out infinite;
          "
          placeholder="Enter your name"
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-xs uppercase tracking-wider mb-1" style="color: var(--text-muted); font-family: var(--font-mono);">
          Email
        </label>
        <input
          v-model="fields.email"
          type="email"
          class="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-300"
          style="
            background: var(--bg-elevated);
            border-color: var(--border);
            color: var(--text);
            font-family: var(--font-body);
            animation: energy-pulse var(--energy-duration, 3s) ease-in-out infinite;
          "
          placeholder="your@email.com"
        />
      </div>

      <!-- Message -->
      <div>
        <label class="block text-xs uppercase tracking-wider mb-1" style="color: var(--text-muted); font-family: var(--font-mono);">
          Message
        </label>
        <textarea
          v-model="fields.message"
          rows="4"
          class="w-full px-4 py-3 rounded-lg border text-sm outline-none resize-none transition-all duration-300"
          style="
            background: var(--bg-elevated);
            border-color: var(--border);
            color: var(--text);
            font-family: var(--font-body);
            animation: energy-pulse var(--energy-duration, 3s) ease-in-out infinite;
          "
          placeholder="Your message..."
        />
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="w-full py-3 rounded-lg text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 border"
        :class="isValid ? 'cursor-pointer' : 'cursor-not-allowed'"
        :style="{
          background: isValid ? 'var(--accent)' : 'var(--bg-elevated)',
          color: isValid ? 'var(--bg)' : 'var(--text-muted)',
          borderColor: isValid ? 'var(--accent-light)' : 'var(--border)',
          boxShadow: isValid ? '0 0 20px var(--accent-glow), 0 0 40px var(--accent-glow)' : 'none',
          opacity: isValid ? '1' : '0.4'
        }"
        :disabled="!isValid"
      >
        {{ submitted ? 'Transmitted' : isValid ? 'Attack Directly' : 'Set Card...' }}
      </button>
    </form>
  </div>
</template>
