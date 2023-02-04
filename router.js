class Router {
    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoute();
    }

    _matchUrlToRoute(urlSegs) {
        const matchedRouteee = 4
    }

    _loadInitialRoute() {
        const pathNameSplit = window.location.pathname.split("/");
        const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : "";
        this.loadRoute(...pathSegs)
    }
}
