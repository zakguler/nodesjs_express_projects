console.log('index.js is loaded');
console.log('z_location.pathname_0: ' + location.pathname);

console.log('z_1.. first line');

// listen to the DOMContentLoaded, then load the z_routerr() function
document.addEventListener("DOMContentLoaded", () => {
    console.log('z_2..INSIDE addEventListener');
    z_router();
})

console.log('z_3..AFTER addEventListener');

// the client will set/get settings before rendering the page
// loading the contents inside here
const z_router = async () => {

    console.log('z_4_a..INSIDE async');

    const z_routers = [
      {path: '/', view: () => console.log("Viewing Dashboard")},
      {path: '/posts', view: () => console.log("Viewing Posts")},
      {path: '/settings', view: () => console.log("Viewing Settings")}
    ];

    // Test each z_router for potential match
    const potentialMatches = z_routers.map( z_router => {
      console.log('z_z_router.map...location.pathname_1: ' + location.pathname);
      return {
          z_route: z_router,
          isMatch: location.pathname === z_router.path
      };
    });

    console.log('z_5_b..INSIDE async');

    let match = potentialMatches.find(potentialMatche => potentialMatche.isMatch);
    // let match = potentialMatches.filter(potentialMatche => ! potentialMatche.isMatch);
    // let indexes = Object.keys(match);
    // console.log('z_indexes.length: ' + indexes.length);
    // console.log(match);

    // fix an 'undefined' error if the path 'localhost:3000/xyz' was other than
    // the following '/', '/posts', '/settings',
    // then default it to the first z_routers object:  {path: '/', view: () => console.log("Viewing Dashboard")}
    if (!match){
        match = {
            z_route: z_routers[0],
            isMatch: true
        };
    }

    console.log('potentialMatches:');
    console.log(potentialMatches);

    // next
    console.log(match.z_route.view());

};

console.log('z_6..LAST line');


