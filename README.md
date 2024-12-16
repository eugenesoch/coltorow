# Masonry Grid Reorder Script

This JavaScript script dynamically rearranges items in a masonry grid layout based on the number of columns defined in the CSS. It ensures smooth transitions and a responsive design by observing changes in the `column-count` property of the grid.

## Features

- **Dynamic Reordering**: Automatically redistributes grid items to fit the defined column layout.
- **Column-Driven Updates**: Observes changes in the grid's column count instead of screen size for reordering.
- **Fade-In Transition**: Includes a smooth opacity transition for visual consistency during updates.
- **Debounced Resize Listener**: Ensures efficient layout recalculations when the browser window is resized.

## How It Works

1. The script observes the `column-count` property of a grid container with the attribute `[coltorow='grid']`.
2. On detecting a change in column count, it rearranges the items within the grid to match the new layout.
3. The script applies a fade-in effect to the grid after reordering to provide a seamless user experience.

## Usage


Free to use on any projects.

### HTML Structure
Ensure your HTML contains a grid container with the `coltorow='grid'` attribute and child items with the `coltorow='item'` attribute:
```html
<div coltorow="grid">
  <div coltorow="item">Item 1</div>
  <div coltorow="item">Item 2</div>
  <div coltorow="item">Item 3</div>
  <!-- Add more items as needed -->
</div>
```


## Made by
Eugene Soch & Matt Tullet
