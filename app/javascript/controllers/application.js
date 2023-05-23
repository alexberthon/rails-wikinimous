import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require ace/ace
//= require ace/worker-html
//= require ace/theme-solarized_light
//= require ace/mode-markdown
//= require_tree .

export { application }
