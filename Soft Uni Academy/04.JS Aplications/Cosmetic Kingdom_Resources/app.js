import page from "./node_modules/page/page.mjs"
//import {html ,renderer} from "./node_modules/lit-html/lit-html"

import { authMiddleware } from "./src/middleware/authMiddleware.js";
import { navbarView } from "./views/navbar.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { logoutView } from "./views/logout.js";


page(authMiddleware);
page(navbarView);
page("/", homeView);
page("/login", loginView);
page("/logout", logoutView);
page("/register", registerView);


page.start();
