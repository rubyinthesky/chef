// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery3
//= require jquery_ujs
//= require activestorage
//= require foundation
//= require_tree .
$(function(){ 
	$(document).foundation({
		orbit: {
		    animation: 'slide', // Sets the type of animation used for transitioning between slides, can also be 'fade'
		    timer_speed: 200, // Sets the amount of time in milliseconds before transitioning a slide
		    pause_on_hover: true, // Pauses on the current slide while hovering
		    resume_on_mouseout: true, // If pause on hover is set to true, this setting resumes playback after mousing out of slide
		    animation_speed: 250, // Sets the amount of time in milliseconds the transition between slides will last
		    stack_on_small: false,
		    navigation_arrows: true,
		    slide_number: false,
		    slide_number_text: 'of',
		    container_class: 'orbit-container',
		    stack_on_small_class: 'orbit-stack-on-small',
		    next_class: 'orbit-next', // Class name given to the next button
		    prev_class: 'orbit-prev', // Class name given to the previous button
		    timer_container_class: 'orbit-timer', // Class name given to the timer
		    timer_paused_class: 'paused', // Class name given to the paused button
		    timer_progress_class: 'orbit-progress', // Class name given to the progress bar
		    slides_container_class: 'orbit-slides-container', // Class name given to the slides container
		    bullets_container_class: 'orbit-bullets',
		    bullets_active_class: 'active', // Class name given to the active bullet
		    slide_number_class: 'orbit-slide-number', // Class name given to the slide number
		    caption_class: 'orbit-caption', // Class name given to the caption
		    active_slide_class: 'active', // Class name given to the active slide
		    orbit_transition_class: 'orbit-transitioning',
		    bullets: false, // Does the slider have bullets visible?
		    timer: false, // Does the slider have a timer visible?
		    variable_height: false, // Does the slider have variable height content?
		    swipe: true,
		    before_slide_change: noop, // Execute a function before the slide changes
		    after_slide_change: noop // Execute a function after the slide changes
		}
});