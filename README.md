# ToDo
A simple todo-list, built for the purpose of practising [Vue.js](https://vuejs.org/). The user can add and delete todos, edit and mark the todos as completed.

*Demo:* [ToDo](https://lucianmurmurache.github.io/ToDo/)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deploying to gh-pages

* Create a file in the root folder called __deploy.sh__

* The content of the file should look like this:
    
    ```
    #!/usr/bin/env sh

    # abort on errors
    set -e

    # build
    npm run build

    # navigate into the build output directory
    cd dist

    git init
    git add -A
    git commit -m 'deploy'

    git push -f https://github.com/<USERNAME>/<REPO master:gh-pages

    cd -

    ```

* Create another file called __vue-config.js__
* The content of that file should look like this:

    ```
    module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? 'https://<USERNAME>.github.io/<REPO>/'
    : '/'
    }

    ```
* The last step is to run the command __./deploy.sh__
