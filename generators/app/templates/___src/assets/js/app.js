/**
 * Bundle Scripts
 */

// Polyfills
import 'babel-polyfill'
import 'svgxuse'
import 'objectFitPolyfill/src/objectFitPolyfill'

// Import Libs
import './lib/bling'

// CSS Import
import '../css/app.scss'

// Import Partials
import scripts from './partials/scripts'
import templates from './partials/templates'
import modules from './partials/modules'
<% if (projectVue) { %>
// Vue Exampleimport
const vueElement = document.querySelector('#js-vue')

// Beispiel für Lazy Loading von Chunks
if (vueElement) {
    import('./vue/vueExample')
}
<% } %>
const app = {
    toggleGrid() {
        const gridOverlay = document.querySelector('.o-gridOverlay')
        gridOverlay.classList.toggle('is-visible')
    },

    init() {
        scripts.init()
        templates.init()
        modules.init()

        const gridToggle = document.querySelector('.js-toggleGrid')
        if (gridToggle) {
            gridToggle.addEventListener('click', this.toggleGrid, false)
        }
    }
}

// Init App!
app.init()
