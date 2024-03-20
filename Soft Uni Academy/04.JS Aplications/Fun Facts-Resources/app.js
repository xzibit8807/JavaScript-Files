
import page from "./node_modules/page/page.mjs"

import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { createView } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editView } from "./views/edit.js";
import { navbarView } from "./views/navigation.js";
import { authMiddleware } from "./services/authMiddleware.js";
import { dashboardView } from "./views/dashboard.js";
import { logoutView } from "./views/logout.js";


//
//
page(authMiddleware);
page(navbarView);
page(`/`, homeView);
page(`/login`, loginView);
page(`/register`, registerView);
page(`/logout`, logoutView);
page(`/create`, createView);
page(`/dashboard`, dashboardView)
//page(`/details`, detailsView);
page(`/edit`, editView);

  page("/details/:id", detailsPage);




page.start();


