// Register global components
export default {
    install: (app, options) => {
      app.component('ButtonAction', require('@/components/global/Button').default)
      app.component('AlertErrors', require('@/components/global/AlertErrors').default)
      app.component('Empty', require('@/components/global/Empty').default)
      app.component('Loading', require('@/components/global/Loading').default)
      app.component('Copy', require('@/components/global/Copy').default)
      app.component('Logo', require('@/components/global/Logo').default)
    }
  }
  