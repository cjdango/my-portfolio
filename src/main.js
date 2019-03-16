// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'typeface-fjalla-one'
import '~/assets/css/app.css'

import DefaultLayout from '~/layouts/Default/Layout.vue'

import AppLink from '~/components/AppLink.vue'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('DefaultLayout', DefaultLayout)
  Vue.component('AppLink', AppLink)
}
