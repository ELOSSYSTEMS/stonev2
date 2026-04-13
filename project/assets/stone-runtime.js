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

  const initializeShoppableMediaDrawer = () => {
    const sections = document.querySelectorAll("[data-stone-shoppable-drawer]");

    sections.forEach((section) => {
      const controls = Array.from(
        section.querySelectorAll("[data-stone-drawer-control]")
      );
      const panels = Array.from(
        section.querySelectorAll("[data-stone-drawer-panel]")
      );
      const closeControl = section.querySelector("[data-stone-drawer-close]");
      const drawerShell = section.querySelector("[data-stone-drawer-shell]");

      if (controls.length !== 2 || panels.length !== 2 || !closeControl || !drawerShell) {
        return;
      }

      const setOpenState = (key) => {
        const isOpen = Boolean(key);
        section.dataset.stoneDrawerOpen = isOpen ? "true" : "false";
        drawerShell.hidden = !isOpen;

        controls.forEach((control) => {
          const isActive = isOpen && control.dataset.stoneDrawerControl === key;
          control.setAttribute("aria-expanded", isActive ? "true" : "false");
        });

        panels.forEach((panel) => {
          const isActive = isOpen && panel.dataset.stoneDrawerPanel === key;
          panel.dataset.stoneDrawerPanelActive = isActive ? "true" : "false";
          panel.hidden = !isActive;
        });
      };

      controls.forEach((control) => {
        control.addEventListener("click", () => {
          setOpenState(control.dataset.stoneDrawerControl || "one");
        });
      });

      closeControl.addEventListener("click", () => {
        setOpenState(null);
      });

      setOpenState(null);
      section.dataset.stoneDrawerReady = "true";
    });
  };



  const initializeShoppableMediaOverlay = () => {
    const sections = document.querySelectorAll("[data-stone-shoppable-overlay]");

    sections.forEach((section) => {
      const controls = Array.from(
        section.querySelectorAll("[data-stone-overlay-control]")
      );
      const panels = Array.from(
        section.querySelectorAll("[data-stone-overlay-panel]")
      );
      const closeControl = section.querySelector("[data-stone-overlay-close]");
      const overlayLayer = section.querySelector("[data-stone-overlay-layer]");

      if (controls.length !== 2 || panels.length !== 2 || !closeControl || !overlayLayer) {
        return;
      }

      const setOpenState = (key) => {
        const isOpen = Boolean(key);
        section.dataset.stoneOverlayOpen = isOpen ? "true" : "false";
        overlayLayer.hidden = !isOpen;

        controls.forEach((control) => {
          const isActive = isOpen && control.dataset.stoneOverlayControl === key;
          control.setAttribute("aria-expanded", isActive ? "true" : "false");
        });

        panels.forEach((panel) => {
          const isActive = isOpen && panel.dataset.stoneOverlayPanel === key;
          panel.dataset.stoneOverlayPanelActive = isActive ? "true" : "false";
          panel.hidden = !isActive;
        });
      };

      controls.forEach((control) => {
        control.addEventListener("click", () => {
          setOpenState(control.dataset.stoneOverlayControl || "one");
        });
      });

      closeControl.addEventListener("click", () => {
        setOpenState(null);
      });

      setOpenState(null);
      section.dataset.stoneOverlayReady = "true";
    });
  };

  root.classList.remove("no-js");
  root.classList.add("js");
  body.dataset.stoneInitialized = "true";
  body.dataset.stoneRuntime = "ready";
  applyMotionPreference();
  initializeShoppableMediaFocus();
  initializeShoppableMediaDrawer();
  initializeShoppableMediaOverlay();

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
