import router from "./router";
import { getToken } from "./utils/auth";

router.beforeEach((to, from, next) => {
  const hastoken = getToken();
  if (hastoken) {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next({ path: "/login" });
    }
  }
});
