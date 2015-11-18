# You can learn more about framer's modules here – http://framerjs.com/docs/#modules.modules
exports.menuOverlay = (screen, fade, hamburger, close, menuItems) ->

		# Base variables
		delayItem = 0
		delayItemDecrement = .05

		# Set the states for each item in the menuItems
		for item in menuItems
			item.states.add
				one:
					opacity: 0
					scale: .6
					y: item.y - 100
			item.states.switchInstant("one")

		# Screen state
		screen.states.add
			one:
				scale: .9
				blur: 20

		# Fade state
		fade.states.add
			one:
				opacity: 0

		# Hamburger state
		hamburger.states.add
			one:
				scale: 0
				opacity: 0

		# Close button state
		close.states.add
			one:
				scale: 0
				opacity: 0

		# Disappear the close button and the fade
		close.states.switchInstant("one")
		fade.states.switchInstant("one")

		# Event for hamburger click
		hamburger.on Events.Click, ->
			(@).states.switch("one")
			close.states.switch("default")
			screen.states.switch("one")
			fade.states.switch("default")
			for item in menuItems
				item.states.animationOptions =
					delay: delayItem += delayItemDecrement
				item.states.switch("default")

		# Event for close button click
		close.on Events.Click, ->
			delayItem = 0
			(@).states.switch("one")
			hamburger.states.switch("default")
			screen.states.switch("default")
			fade.states.switch("one")
			for item in menuItems
				item.states.animationOptions =
					delay: 0
				item.states.switch("one")
