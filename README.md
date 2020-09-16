# StackoverNotifier

Check out the **[project demo](https://manuel-suarez-abascal.github.io/stackoverNotifier/)**.

# Project Setup

======================

# Dependencies

Make sure to have all these dependencies installed in your local machine:

- [Node.js](https://nodejs.org/en/) - v12.18.4
- [NPM](https://www.npmjs.com/) - v6.10 (comes installed with `Node.js`)
- [Vue CLI](https://cli.vuejs.org/guide/installation.html) - v4.5.6


# API key

- You need to [get an API key](https://stackapps.com/apps/oauth/register) & add to the `getQuestion()` method's url like so:

```
getQuestion(){
      axios.get(`https://api.stackexchange.com//2.2/questions?order=desc&sort=creation&tagged=${this.tag}&site=stackoverflow&key=<APIKeyGoesHere>`).then(response => {
        this.details = response.data.items[0]
        if(this.lastQuestion !== this.details.title){
          this.sendNotification()
          this.lastQuestion = this.details.title
        }
        // console.log an error if get() method is unsuccessful
      }).catch(err => {
        console.log(err)
      })
    },
```

## Install Modules

- Go to the project's root folder & run the following command:
```
npm install
```

### Run The Project For Local Development

- After all modules are installed, run the command:
```
npm run serve
```
It'll open a local development environment server at ```http://localhost:8080/```

### Chrome Notification Settings

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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
