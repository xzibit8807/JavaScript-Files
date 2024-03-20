import * as authService from "./auth.js"

export function authMiddleware(ctx, next) {
    ctx.authData = authService.getAuthData();
    next();
  }