(() => {
  const root = document.documentElement;
  const body = document.body;

  if (!root || !body || body.dataset.stoneMobileDrawerInitialized === "true") {
    return;
  }

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

  const closeDrawer = (drawer, trigger, options = {}) => {
    if (!drawer || drawer.dataset.stoneMobileDrawerState !== "open") {
      return;
    }

    const controls = drawer.id
      ? document.querySelectorAll(`[data-stone-mobile-drawer-trigger][aria-controls="${drawer.id}"]`)
      : [];
    const reducedMotion = motionQuery && motionQuery.matches;
    const delay = reducedMotion ? 0 : 180;

    drawer.dataset.stoneMobileDrawerState = "closed";
    controls.forEach((control) => control.setAttribute("aria-expanded", "false"));
    body.removeAttribute("data-stone-mobile-drawer-lock");

    window.setTimeout(() => {
      drawer.hidden = true;

      if (options.returnFocus !== false && trigger && typeof trigger.focus === "function") {
        trigger.focus();
      }
    }, delay);
  };

  const openDrawer = (drawer, trigger) => {
    if (!drawer || drawer.dataset.stoneMobileDrawerState === "open") {
      return;
    }

    drawer.hidden = false;
    drawer.dataset.stoneMobileDrawerState = "open";
    drawer.dataset.stoneMobileDrawerReturn = trigger ? "true" : "false";
    body.dataset.stoneMobileDrawerLock = "true";

    if (trigger) {
      trigger.setAttribute("aria-expanded", "true");
    }

    const panel = drawer.querySelector("[data-stone-mobile-drawer-panel]");
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
      if (drawer.dataset.stoneMobileDrawerState === "open") {
        closeDrawer(drawer, trigger);
      } else {
        drawer.dataset.stoneMobileDrawerTriggerId = trigger.id || "";
        openDrawer(drawer, trigger);
      }
    });
  };

  const initializeDrawer = (drawer) => {
    if (drawer.dataset.stoneMobileDrawerReady === "true") {
      return;
    }

    const trigger = drawer.id
      ? document.querySelector(`[data-stone-mobile-drawer-trigger][aria-controls="${drawer.id}"]`)
      : null;

    drawer.querySelectorAll("[data-stone-mobile-drawer-close]").forEach((control) => {
      control.addEventListener("click", () => closeDrawer(drawer, trigger));
    });

    drawer.querySelectorAll("a[href]").forEach((link) => {
      link.addEventListener("click", () => closeDrawer(drawer, trigger, { returnFocus: false }));
    });

    drawer.addEventListener("keydown", (event) => {
      if (drawer.dataset.stoneMobileDrawerState !== "open") {
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

    drawer.dataset.stoneMobileDrawerReady = "true";
  };

  root.classList.remove("no-js");
  root.classList.add("js");
  body.dataset.stoneMobileDrawerInitialized = "true";

  document.querySelectorAll("[data-stone-mobile-drawer]").forEach(initializeDrawer);
  document.querySelectorAll("[data-stone-mobile-drawer-trigger]").forEach(initializeTrigger);
})();
