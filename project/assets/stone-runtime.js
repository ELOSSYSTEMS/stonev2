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

  const initializeShoppableMediaFocus = () => {
    const sections = document.querySelectorAll("[data-stone-shoppable-focus]");

    sections.forEach((section) => {
      const controls = Array.from(
        section.querySelectorAll("[data-stone-focus-control]")
      );
      const panels = Array.from(
        section.querySelectorAll("[data-stone-focus-panel]")
      );

      if (controls.length !== 2 || panels.length !== 2) {
        return;
      }

      const setActive = (key) => {
        controls.forEach((control) => {
          const isActive = control.dataset.stoneFocusControl === key;
          control.setAttribute("aria-pressed", isActive ? "true" : "false");
        });

        panels.forEach((panel) => {
          const isActive = panel.dataset.stoneFocusPanel === key;
          panel.dataset.stoneFocusActive = isActive ? "true" : "false";
          panel.hidden = !isActive;
        });
      };

      controls.forEach((control) => {
        control.addEventListener("click", () => {
          setActive(control.dataset.stoneFocusControl || "one");
        });
      });

      setActive("one");
      section.dataset.stoneFocusReady = "true";
    });
  };

  root.classList.remove("no-js");
  root.classList.add("js");
  body.dataset.stoneInitialized = "true";
  body.dataset.stoneRuntime = "ready";
  applyMotionPreference();
  initializeShoppableMediaFocus();

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
