const dashboard = document.getElementById("dashboard-holder");
const main = document.getElementById("main");

export function showDashboard(ctx){
    ctx.renderer(dashboard);
}