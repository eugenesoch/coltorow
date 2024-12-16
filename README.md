# Coltorow
  This JavaScript script dynamically manages the layout of a masonry grid by rearranging its items based on the current viewport size and the grid's column count. It includes the following features:

*Dynamic Grid Reordering:*

The reorderAndReplaceMasonryItems function calculates the appropriate column distribution for the grid items and rearranges them to fit into the specified number of columns dynamically.

*Fade-In Effect for Grid Updates:*

The updateGridOrder function ensures the grid remains visually seamless during updates by fading in the grid after reordering.

*Responsive Design Adjustments:*

The onViewportResize function detects viewport size changes (e.g., switching between tablet and desktop) and adjusts the grid layout accordingly.

*Debounced Resize Event:*

A debounced resize event listener prevents excessive layout recalculations during continuous resizing.

*Initial Setup:*

On page load, the script hides the grid, sets up a smooth opacity transition, and performs the initial reordering of grid items.
Fallback Handling:

It handles edge cases where the grid or its column count is unavailable, logging appropriate errors to the console.
This script is particularly useful for creating responsive and visually appealing masonry-style layouts that adapt to different screen sizes seamlessly.

Coded by Eugene Soch & Matt Tullet
