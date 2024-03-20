import page from "./node_modules/page/page.mjs"


import { authMiddleware } from "./services/authMiddleware.js"
import { createView } from "./views/create.js";
import { dashboardView } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { logoutView } from "./views/logout.js";
import { navbarView } from "./views/navigation.js";
import { registerView } from "./views/register.js";
import { searchView } from "./views/search.js";

page(authMiddleware);
page(navbarView);
page(`/`,homeView);
page(`/login`,loginView);
page(`/register`,registerView);
page(`/search`, searchView);
page(`/create`, createView);
page(`/dashboard`, dashboardView);
page(`/edit`,editView);
page(`/details/:id`, detailsView);
page(`/logout`, logoutView);

page.start();


