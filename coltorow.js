function updateGridOrder(grid, items) {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => fragment.appendChild(item));
  grid.appendChild(fragment);

  // Wait for layout repaint before fading in the grid
  requestAnimationFrame(() => {
    grid.style.opacity = "1"; // Fade-in effect
  });
}

let originalOrder = [];

function reorderAndReplaceMasonryItems() {
  let masonryGrid = document.querySelector("[coltorow='grid']");
  if (!masonryGrid) {
    console.error("Masonry grid not found");
    return;
  }

  // Hide the grid before reordering to prevent FOUC
  masonryGrid.style.opacity = "0";

  if (originalOrder.length === 0) {
    originalOrder = Array.from(
      masonryGrid.querySelectorAll("[coltorow='item']")
    );
  }

  let masonryItem = [...originalOrder];
  let columnCount = parseInt(
    window.getComputedStyle(masonryGrid).getPropertyValue("column-count"),
    10
  );

  if (columnCount >= 1) {
    // Create an array of columns
    let columns = Array.from({ length: columnCount }, () => []);

    // Distribute items into the respective columns
    for (let i = 0; i < masonryItem.length; i++) {
      columns[i % columnCount].push(masonryItem[i]);
    }

    // Concatenate the columns back into a single array
    let updatedOrder = columns.flat();

    // Update the grid order
    updateGridOrder(masonryGrid, updatedOrder);
  } else {
    console.error("Unexpected column count or no columns:", columnCount);
  }
}

let lastViewportCategory = null;
function onViewportResize() {
  const width = window.innerWidth;
  const currentViewportCategory = width > 991 ? "desktop" : "tablet";

  if (currentViewportCategory !== lastViewportCategory) {
    reorderAndReplaceMasonryItems();
    lastViewportCategory = currentViewportCategory;
  }
}

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(onViewportResize, 100);
});

// Initial execution
document.addEventListener("DOMContentLoaded", () => {
  let masonryGrid = document.querySelector("[coltorow='grid']");
  if (masonryGrid) {
    // Hide the grid initially and set up the transition
    masonryGrid.style.opacity = "0";
    masonryGrid.style.transition = "opacity 300ms ease-in-out";
    reorderAndReplaceMasonryItems(); // Perform initial reordering
  }
});
