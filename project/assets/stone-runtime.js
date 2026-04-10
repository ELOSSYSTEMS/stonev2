(() => {
  const root = document.documentElement;
  const body = document.body;

  if (!root || !body || body.dataset.stoneInitialized === "true") {
    return;
  }

  const motionQuery =
    typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;

  const applyMotionPreference = () => {
    body.dataset.stoneMotionPreference =
      motionQuery && motionQuery.matches ? "reduced" : "standard";
  };

  root.classList.remove("no-js");
  root.classList.add("js");
  body.dataset.stoneInitialized = "true";
  body.dataset.stoneRuntime = "ready";
  applyMotionPreference();

  if (motionQuery) {
    if (typeof motionQuery.addEventListener === "function") {
      motionQuery.addEventListener("change", applyMotionPreference);
    } else if (typeof motionQuery.addListener === "function") {
      motionQuery.addListener(applyMotionPreference);
    }
  }

  document.dispatchEvent(
    new CustomEvent("stone:ready", {
      detail: {
        direction: root.getAttribute("dir") || "rtl",
      },
    })
  );
})();
