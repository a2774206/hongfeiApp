import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
import aboutus from '@/views/aboutus.vue'
import medias from '@/views/media.vue'
import investment from '@/views/investment.vue'
import marketing from '@/views/marketing.vue'
import talent from '@/views/talent.vue'
import contactus from '@/views/contactus.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/media',
      name: 'media',
      component: medias
    },
    {
      path: '/investment',
      name: 'investment',
      component: investment
    },
		{
			path: '/marketing',
			name: 'marketing',
			component: marketing
		},
		{
			path: '/talent',
			name: 'talent',
			component: talent
		},
		{
			path: '/contactus',
			name: 'contactus',
			component: contactus
		}
		
		
  ]
})
