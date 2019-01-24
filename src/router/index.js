import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import GameRandom from '@/pages/GameRandom'
import Game24 from '@/pages/Game24'
import Games from '@/pages/Games'
import LearningCenter from '@/pages/LearningCenter'
import Analytics from '@/pages/Analytics'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: Analytics
    },
    {
      path: '/learning-center',
      name: 'Learning Center',
      component: LearningCenter
    },
    {
      path: '/games',
      name: 'Games',
      component: Games,
      children: [
        {
          path: '/random',
          name: 'GameRandom',
          component: GameRandom
        },
        {
          path: '/24',
          name: 'Game24',
          component: Game24
        }
      ]
    }
  ]
})
