export default defineNuxtConfig({
	modules: ['nuxt-quasar-ui', '@vueuse/nuxt', '@nuxtjs/i18n'],
	i18n: {
		vueI18n: './translations/i18n.config.ts'
	},
	quasar: {
		sassVariables: 'assets/quasar.variables.scss',
		plugins: ['Dialog', 'Notify'],
		config: {
			dark: false
		}
	},
	devtools: { enabled: true }
})
