import DefaultTheme from "vitepress/theme";

function scrollActiveSidebarItem() {
  requestAnimationFrame(() => {
    document
      .querySelector(".VPSidebarItem.is-active")
      ?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === "undefined") return;
    router.onAfterRouteChange = () => scrollActiveSidebarItem();
    router.onAfterPageLoad = () => scrollActiveSidebarItem();
  },
};
