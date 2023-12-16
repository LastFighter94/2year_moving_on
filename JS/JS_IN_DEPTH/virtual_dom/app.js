const state = { count: 0 };
// const app = document.getElementById("app");

// let renderTemplate = mount(createDOMNode(createVApp(state)), app);

// setInterval(() => {
//     state.count++;

//     renderTemplate = mount(createDOMNode(createVApp(state)), renderTemplate);
// }, 1000);

// 2 ДАЛЕЕ
// 2 ДАЛЕЕ
// 2 ДАЛЕЕ
  
let vApp = createVApp(state);
let app = mount(createDOMNode(vApp), document.getElementById("app"));

setInterval(() => {
    state.count++;

    const nextVApp = createVApp(state);

    app = patchNode(app, vApp, nextVApp);
    vApp = nextVApp;
}, 1000);