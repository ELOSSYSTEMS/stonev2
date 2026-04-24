(() => {
  const root = document.documentElement;
  const body = document.body;

  if (!root || !body || body.dataset.stoneDrawerInitialized === "true") {
    return;
  }

  const drawerSelector = "[data-stone-drawer], [data-stone-mobile-drawer]";
  const triggerSelector = "[data-stone-drawer-trigger], [data-stone-mobile-drawer-trigger]";
  const closeSelector = "[data-stone-drawer-close], [data-stone-mobile-drawer-close]";
  const panelSelector = "[data-stone-drawer-panel], [data-stone-mobile-drawer-panel]";

  const focusableSelector = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
  ].join(",");

  const motionQuery =
    typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;

  const getFocusable = (drawer) =>
    Array.from(drawer.querySelectorAll(focusableSelector)).filter((element) => {
      if (element.closest("[hidden]")) {
        return false;
      }

      return element.offsetParent !== null || element === document.activeElement;
    });

  const getDrawerState = (drawer) =>
    drawer.getAttribute("data-stone-drawer-state") ||
    drawer.getAttribute("data-stone-mobile-drawer-state") ||
    "closed";

  const triggerSelectorForDrawer = (drawerId) =>
    [
      `[data-stone-drawer-trigger][aria-controls="${drawerId}"]`,
      `[data-stone-mobile-drawer-trigger][aria-controls="${drawerId}"]`,
    ].join(",");

  const setDrawerState = (drawer, state) => {
    drawer.setAttribute("data-stone-drawer-state", state);

    if (drawer.hasAttribute("data-stone-mobile-drawer")) {
      drawer.setAttribute("data-stone-mobile-drawer-state", state);
    }
  };

  const getDrawerControls = (drawer) =>
    drawer.id ? document.querySelectorAll(triggerSelectorForDrawer(drawer.id)) : [];

  const setBodyLock = (locked) => {
    if (locked) {
      body.dataset.stoneDrawerLock = "true";
      body.dataset.stoneMobileDrawerLock = "true";
      return;
    }

    body.removeAttribute("data-stone-drawer-lock");
    body.removeAttribute("data-stone-mobile-drawer-lock");
  };

  const closeDrawer = (drawer, trigger, options = {}) => {
    if (!drawer || getDrawerState(drawer) !== "open") {
      return;
    }

    const controls = getDrawerControls(drawer);
    const reducedMotion = motionQuery && motionQuery.matches;
    const delay = reducedMotion ? 0 : 180;

    setDrawerState(drawer, "closed");
    controls.forEach((control) => control.setAttribute("aria-expanded", "false"));
    setBodyLock(false);

    window.setTimeout(() => {
      drawer.hidden = true;

      if (options.returnFocus !== false && trigger && typeof trigger.focus === "function") {
        trigger.focus();
      }
    }, delay);
  };

  const openDrawer = (drawer, trigger) => {
    if (!drawer || getDrawerState(drawer) === "open") {
      return;
    }

    drawer.hidden = false;
    setDrawerState(drawer, "open");
    drawer.dataset.stoneDrawerReturn = trigger ? "true" : "false";

    if (drawer.hasAttribute("data-stone-mobile-drawer")) {
      drawer.dataset.stoneMobileDrawerReturn = trigger ? "true" : "false";
    }

    setBodyLock(true);

    if (trigger) {
      trigger.setAttribute("aria-expanded", "true");
    }

    const panel = drawer.querySelector(panelSelector);
    const focusable = getFocusable(drawer);
    const firstTarget = focusable[0] || panel;

    window.requestAnimationFrame(() => {
      if (firstTarget && typeof firstTarget.focus === "function") {
        firstTarget.focus({ preventScroll: true });
      }
    });
  };

  const initializeTrigger = (trigger) => {
    const drawerId = trigger.getAttribute("aria-controls");
    const drawer = drawerId ? document.getElementById(drawerId) : null;

    if (!drawer) {
      return;
    }

    trigger.addEventListener("click", () => {
      if (getDrawerState(drawer) === "open") {
        closeDrawer(drawer, trigger);
      } else {
        drawer.dataset.stoneDrawerTriggerId = trigger.id || "";

        if (drawer.hasAttribute("data-stone-mobile-drawer")) {
          drawer.dataset.stoneMobileDrawerTriggerId = trigger.id || "";
        }

        openDrawer(drawer, trigger);
      }
    });
  };

  const initializeDrawer = (drawer) => {
    if (drawer.dataset.stoneDrawerReady === "true") {
      return;
    }

    const trigger = drawer.id ? document.querySelector(triggerSelectorForDrawer(drawer.id)) : null;

    drawer.querySelectorAll(closeSelector).forEach((control) => {
      control.addEventListener("click", () => closeDrawer(drawer, trigger));
    });

    drawer.querySelectorAll("a[href]").forEach((link) => {
      link.addEventListener("click", () => closeDrawer(drawer, trigger, { returnFocus: false }));
    });

    drawer.addEventListener("keydown", (event) => {
      if (getDrawerState(drawer) !== "open") {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeDrawer(drawer, trigger);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = getFocusable(drawer);

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    drawer.dataset.stoneDrawerReady = "true";

    if (drawer.hasAttribute("data-stone-mobile-drawer")) {
      drawer.dataset.stoneMobileDrawerReady = "true";
    }
  };

  root.classList.remove("no-js");
  root.classList.add("js");
  body.dataset.stoneDrawerInitialized = "true";
  body.dataset.stoneMobileDrawerInitialized = "true";

  document.querySelectorAll(drawerSelector).forEach(initializeDrawer);
  document.querySelectorAll(triggerSelector).forEach(initializeTrigger);
})();
