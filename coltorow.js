function updateGridOrder(grid, items) {
    const fragment = document.createDocumentFragment();
    items.forEach((item) => fragment.appendChild(item));
    grid.appendChild(fragment);
  
    requestAnimationFrame(() => {
      grid.style.opacity = "1";
    });
  }
  
  let originalOrder = [];
  
  function reorderAndReplaceMasonryItems() {
    let masonryGrid = document.querySelector("[coltorow='grid']");
    if (!masonryGrid) {
      console.error("Masonry grid not found");
      return;
    }
  
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
      let columns = Array.from({ length: columnCount }, () => []);
      for (let i = 0; i < masonryItem.length; i++) {
        columns[i % columnCount].push(masonryItem[i]);
      }
  
      let updatedOrder = columns.flat();
      updateGridOrder(masonryGrid, updatedOrder);
    } else {
      console.error("Unexpected column count or no columns:", columnCount);
    }
  }
  
  let lastColumnCount = null;
  
  function observeColumnChanges() {
    let masonryGrid = document.querySelector("[coltorow='grid']");
    if (!masonryGrid) {
      console.error("Masonry grid not found");
      return;
    }
  
    const columnCount = parseInt(
      window.getComputedStyle(masonryGrid).getPropertyValue("column-count"),
      10
    );
  
    if (columnCount !== lastColumnCount) {
      reorderAndReplaceMasonryItems();
      lastColumnCount = columnCount;
    }
  }
  
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(observeColumnChanges, 100);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    let masonryGrid = document.querySelector("[coltorow='grid']");
    if (masonryGrid) {
      masonryGrid.style.opacity = "0";
      masonryGrid.style.transition = "opacity 300ms ease-in-out";
      reorderAndReplaceMasonryItems();
    }
  });
  