import _ from 'lodash'
import {onBeforeMount} from 'vue'
import {MIN_SCREEN_WIDTH, REM_RATIO} from '@/utils/constant'

function computeRootFontSize() {

  const html = document.getElementsByTagName('html')[0]
  const width = document.body.clientWidth < MIN_SCREEN_WIDTH ? MIN_SCREEN_WIDTH : document.body.clientWidth
  const rootFontSize = width / REM_RATIO
  html.style.fontSize = `${rootFontSize}px`

}

export const useRem = () => {
  onBeforeMount(() => {
    computeRootFontSize()
    window.addEventListener('resize', _.throttle(computeRootFontSize, 500))
  })
}