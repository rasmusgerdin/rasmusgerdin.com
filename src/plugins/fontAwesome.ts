import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faSquare, faEnvelope, faExternalLink, faSunglasses, faGlasses
} from '@fortawesome/pro-solid-svg-icons'
import {
  faTwitter, faGithub, faUnsplash, faLinkedinIn, faDiscord,
  faInstagram, faTelegramPlane, faSpotify, faTwitch, faYoutube
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faSquare, faEnvelope, faExternalLink, faGlasses, faSunglasses,
  faTwitter, faGithub, faUnsplash, faLinkedinIn, faDiscord,
  faInstagram, faTelegramPlane, faSpotify, faTwitch, faYoutube
)

export { FontAwesomeIcon }
