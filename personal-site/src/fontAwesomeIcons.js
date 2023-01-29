import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faSun,
  faMoon,
  faArrowRight,
  faCopyright
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub as fabGithub,
  faLinkedin as fabLinkedin
} from '@fortawesome/free-brands-svg-icons'

library.add(faSun, faMoon, faArrowRight, faCopyright, fabGithub, fabLinkedin)

export default FontAwesomeIcon
