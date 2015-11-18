# Connect our module
module = require "menuOverlay"

# If you create your design in @1x like me then you have to set contentScale = 2 for right view on the iPhone 6
Framer.Device.contentScale = 2

# This imports all the layers for "screens" into screensLayers
screenLayers = Framer.Importer.load "imported/screen"

screenLayers.center()

# Set default animation for all. Of course you can change it for you taste
Framer.Defaults.Animation = 
	curve: "spring(200,20,0)"

# Declare elements of the interaction
hamburger = screenLayers.hamburger
close = screenLayers.close
one = screenLayers.one
two = screenLayers.two
three = screenLayers.three
four = screenLayers.four
fade = screenLayers.fade
screen = screenLayers.screen

#Menu items
menuItems = [
	one
	two
	three
	four
]

# Call our function from the module with arguments
module.menuOverlay(screen, fade, hamburger, close, menuItems)



