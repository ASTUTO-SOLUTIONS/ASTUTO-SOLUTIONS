document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("share-btn");

  // ✅ Prevent crash if element doesn't exist
  if (!btn) {
    console.warn("share-btn not found, skipping share-modal.js");
    return;
  }

  btn.addEventListener("click", () => {
    console.log("Share button clicked");
    // your existing logic
  });
});
