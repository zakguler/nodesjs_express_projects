console.log('index.js is loaded');
console.log('z_location.pathname_0: ' + location.pathname);

console.log('z_1.. first line');

//=============================================================================

//
// this function will be called when the user clicks on the link
// that contains the [data-link] mark
// overriding the default behaviour of reloading the page
// ... see: document.addEventListener("DOMContentLoaded",....
const navigateTo = url => {
    console.log('z_3_b..navigateTo');
    history.pushState(null, null, url);
    z_router();
}


// the client will set/get settings before rendering the page
// loading the contents inside here
//NOTE: the z_router [async returns a promise]
const z_router = async () => {

    console.log('\t\tz_4_a..INSIDE async');

    const z_routes = [
        {path: '/', view: () => console.log("Viewing Dashboard")},
        {path: '/posts', view: () => console.log("Viewing Posts")},
        {path: '/settings', view: () => console.log("Viewing Settings")}
    ];

    // Test each z_router for potential match
    const potentialMatches = z_routes.map( route => {
        console.log('\t\t\t\tz_4_b..router.map...location.pathname_1: ' + location.pathname);
        return {
            z_route: route,
            isMatch: location.pathname === route.path
        };
    });

    console.log('\t\tz_5..INSIDE async');

    let match = potentialMatches.find(potentialMatche => potentialMatche.isMatch);
    // let match = potentialMatches.filter(potentialMatche => ! potentialMatche.isMatch);
    // let indexes = Object.keys(match);
    // console.log('z_indexes.length: ' + indexes.length);
    // console.log(match);

    // fix an 'undefined' error if the path 'localhost:3000/xyz' was other than
    // the following '/', '/posts', '/settings',
    // then default it to the first z_routes object:  {path: '/', view: () => console.log("Viewing Dashboard")}
    if (!match){
        match = {
            z_route: z_routes[0],
            isMatch: true
        };
    }

    console.log('potentialMatches:');
    console.log(potentialMatches);

    // next
    console.log("\t\tz_6..match.z_route.view()): " + match.z_route.view());

};

//=============================================================================

//*** top-down processing
//*** this is really the starting point
//

//
// when clicking on the back/forward arrow [history][<-, ->][backward, forward history]
//
window.addEventListener("popstate", z_router);


// listen to the DOMContentLoaded,
// check if clicked on a link with "[data-link]" then
// call navigateTo()
// else, call the z_router() function
//
document.addEventListener("DOMContentLoaded", () => {
    console.log('z_2_a..INSIDE addEventListener');
    document.body.addEventListener("click", e => {
        console.log("z_e.target.matches('.nav__link'): " + e.target.matches('.nav__link'));
        console.log("z_e.target.nodeName: " + e.target.nodeName);
        console.log("z_e.target.tagName: " + e.target.tagName);
        console.log("z_e.target.nodeName: " + e.target.nodeName);
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            console.log('\t\tz_XYZ__..INSIDE addEventListener__e.target.href: ' + e.target.href);
            navigateTo(e.target.href);
        }
    })

    z_router();
})

console.log('z_3_a..AFTER addEventListener');

console.log('z_9..LAST line');

