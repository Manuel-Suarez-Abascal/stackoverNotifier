# StackoverNotifier

Check out the **[project demo](https://manuel-suarez-abascal.github.io/stackoverNotifier/)**.

# Project Setup

======================

# Dependencies

Make sure to have all these dependencies installed in your local machine:

- [Node.js](https://nodejs.org/en/) - v12.18.4
- [NPM](https://www.npmjs.com/) - v6.10 (comes installed with `Node.js`)

## Install Modules

- Go to the project's root folder & run the following command:
```
npm install
```

### Run The Project For Local Development

- After all modules are installed, run the command:
```
npm run dev
```
It'll open a local development environment server at ```http://localhost:8080/```

### Chrome Notification Settings

- Make sure to add [this Chrome's extension](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc) & have it `on` to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) issues.
- Make sure to have your **[Chrome's notification enabled](https://support.google.com/chrome/answer/3220216?co=GENIE.Platform%3DDesktop&hl=en)**.

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Preview production build
```
npm run serve
```

### Lints and fixes files
```
npm run lint
```

### Run `e2e` assertion with Cypress.io

```
npm run cypress:open
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
