# React Redux Boilerplate
This is a modern webpack full feature configuration boilerplate for __React__ v16 and __Redux__ enviroments ready to start working in development and in production.

## Table of contents
- [Next To Do](#next-to-do)
- [Vistual Studio Code Extensions](#visual-studio-code-extensions)
- [Installation](#installation)
 - [Global Packages](#global-packages)
- [Enviroments](#enviroments)
 - [Production](#production)
 - [Development](#development)
 - [Test](#tets)
- [React](#react)
- [redux](#redux)
 - [Redux Devtool](#redux-devtool)
- [Babel](#babel)
- [prettier](#prettier)
- [eslint](#eslint)
- [Babel](#babel)
- [Flow](#flow)
- [css](#css)
 - [Global Styles by default](#global-styles-by-default)
 - [css-modules](#css-modules)
 - [Styled Components](#styled-components)
- [Sass](#sass)
 - [bootstrap 4](#bootstrap-4)
- [PostCSS](#postcss)
 - [autoprefixer](#autoprefixer)
 - [stylelint](#stylelint)
- [Fonts](#fonts)
 - [FontAwesome](#fontawesome)
- [Images](#Images)
- [HTML](#html)
- [Favicon & static files](#favicon-&-static-files)
- [Proxy](#proxy)
- [Author](#author)
- [license](#license)

## Next To Do
- [ ] Redux hot module replacement
- [ ] favicon correctly
- [ ] fonts not supported yet

## Visual Studio Code Extensions
- Babel ES6 / ES7
- Beautify css/sass/scss/less
- Color Highlight
- ESLint
- expand-region
- Git History (git log)
- open in browser
- prettier - javascript formatter
- stylelint

## Installation

First step clone this repo
```
$git clone ......
```
And then dependning wheather you use npm or yarn

Case using __yarn__:
```
$cd react-redux-boilerplate && yarn
```
Case using __npm__
```
$cd react-redux-boilerplate && npm install
```

### Global Packages
In order to have all the power of this boilerplate you can donwload the following packages
- [nodemon](https://nodemon.io/) (node reload on save)
- [eslint](https://eslint.org/) (linter)
- [prettier](https://github.com/prettier/prettier) (auto formatter)
- [babel](https://babeljs.io/) (Javascript compiler)
- [stylelint](https://stylelint.io/) (linter for css)
- [webpack](https://webpack.js.org/) (Module bundler)
- (webpack-dev-server)[https://github.com/webpack/webpack-dev-server]
- [flow](https://flow.org/) (Static type checker)
- [flow-typed](https://github.com/flowtype/flow-typed) (A central repository for Flow library definitions)
- [mocha](https://mochajs.org/) (Test Runner)

## Enviroments
This enviroment supports by default 3 enviroments
- production: which simulates a production enviroment for testing
- development: used by default for develop the entire app
- test: which run our tests using mocha, chai, sinon, enzyme

Tested usin node 6+, 7+ and 8+

### Production
  in case you want to emulate a production enviroment use
```
$yarn run start
```
which runs our local express server and run webpack which build the public folder

In case you just want to build the app inproduction use
```
$yarn run build
```
visit http://localhost:3000 in any browser

### Development
the development enviroment use all the power of webpack dev server. the next script runs the dev server
```
$yarn run dev
```

to build a development package use
```
$yarn run build:dev
```

or in case to want build to compile automatically on save

```
$yarn run build:dev--watch
```

visit http://localhost:3000 in any browser

### Test
run test
```
$yarn run test
```

if you want tests automatically re run on save use

```
$yarn run test:watch
```
## React
in this boilerplate we're using the latest verison of react which is React Fiber or React V16 with also react-router-dom already configured and ready to use

## Redux
the Javascript state container we use to complement the React enviroment. also we're using the latest version of redux configured with react-redux in order to work together with react.

aditional the boilerplate comes with 2 popular redux middleware already installed
* Redux-thunk
* Redux-promise

### Redux Devtool
devtool is already configured to work activilly in development and stop working in production. all of this code is in configStore.js in the /redux folder.

## CSS
This boilerplate support various ways to styling your app

### Global Styles by default
By default this boilerplate support global styles like ald school css and also sass. you can use both extensions and syntaxes and PostCSS too if you want.

### css-modules
you can also configure webpack.config.js to use css-modules
this is a better way to style your app since you'd working with local styles instead of global

go to webpack.config.js and in css-loader options add the following
```
...
  modules: true,
  importLoader: 1,
  localIdentName: '[name][local]_[hash:base64:5'],
...
```

and at the end the code should be like this

```
{
  test: /.s?css$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: true,
          importLoader: 1,
          localIdentName: '[name][local]_[hash:base64:5'],
        },
      },
    ],
  }),
}
```

then you can import your styles .css or .scss in your components and use css-module syntax. [Read More](https://github.com/css-modules/css-modules)

### Styled Components
one big issue when use css-modules is that you now cant use global styles at all. but with styled-components you can have the best of global styles and the component local styles using styled-components syntax. install and set up is really straight-forward

```
yarn add styled-components
```

and now you can use it in your components like

```
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;
```

to learn more about styled-components go to the official [website](https://www.styled-components.com/)

## SASS
As you could noticed previously this boilerplate have a big support on sass preprocesor so you can keep working modularity with sass syntax even with styled-components and css-modules

### Boostrap 4
you can donwload and start using bootstrap framework if you like. just have to do some installations and configuration to have this done.

first lets install some packages
```
yarn add bootstrap@4.0.0-beta jquery popper.js
```

then go to webpack.config.js to add some paths to sass-loader and the webpack entry option

in sass-loader add this to options
```
...
includePaths: [
 path.resolve (__dirname, './node_modules/bootstrap/scss'),
],
...
```

and at the end the code should be like this

```
{
  loader: 'sass-loader',
    options: {
      includePaths: [
        path.resolve (__dirname, './node_modules/bootstrap/scss'),
      ],
    sourceMap: true,
  },
},
```

Then in the webpack entry option 

```
...
'script-loader!jquery/dist/jquery.min.js',
'script-loader!popper.js/dist/umd/popper.min.js',
'script-loader!bootstrap/dist/js/bootstrap.min.js',
...
```

and at the end the code should be like this

```
  entry: [
    'babel-polyfill',
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!popper.js/dist/umd/popper.min.js',
    'script-loader!bootstrap/dist/js/bootstrap.min.js',
    './app.js',
  ],
```
Done!

Now you will be able to use this amazing framework with your application

you can also see my multi porpuse boilerplate that have it installed and working properly [multiporpuse-webpack-boilerplate](https://github.com/luigi055/Multi-purpose-webpack3-boilerplate)

## Fonts
thanks to webpack's file-loader and url-loader we can use fonts within our css easily. this feature comes included in the boilerplate. lets use which ever font you want.

### Fontawesome
you can donwload and start using fontawesome Icons using sass

first lets install some packages
```
yarn add fontawesome
```

then go to webpack.config.js to add some paths to sass-loader.

in sass-loader add this to options
```
...
includePaths: [
 path.resolve (__dirname, './node_modules/font-awesome/scss'),
],
...
```

and at the end the code should be like this

```
{
  loader: 'sass-loader',
    options: {
      includePaths: [
        path.resolve (__dirname, './node_modules/font-awesome/scss'),
    sourceMap: true,
  },
},
```


Done!

Now you will be able to use fontaweosme icons in your application

you can also see my multi porpuse boilerplate that have it installed and working properly [multiporpuse-webpack-boilerplate](https://github.com/luigi055/Multi-purpose-webpack3-boilerplate)

## Images
you can also use images within html, css and javascript files.

in the case of Javascript you should first import the image in the file. this get the relative url path of the image which you could use in your javascript

```
...
import catImage from 'my-kitten.jpg;

const CatImage = props => (
  <image src={catImage} alt="my kitten image"/>
);
...
```

## HTML
since we're working with react is normal to have just 1 html file. but sometimes there's some exceptions to the rule and you have to add more html. 

if you want to add a new html you just have to create a new file  in any directory and then go to webpack dev server and register this with the HTML webpack plugin.

go to webpack plugin option and add a new one

```
...
new HTMLWebpackPlugin ({
  title: 'New Project',
  filename: 'other.html',
  template: 'other.html',
}),
...
```

in [multiporpuse-webpack-boilerplate](https://github.com/luigi055/Multi-purpose-webpack3-boilerplate) since is thought to work mainly with html files. i created a html generator within webpack.config.js. in there i got a file calls /views here i put all of my html files and webpack automatically add those. if you want to know how this work. check that repo.

## Favicon & static files

This is mostly useful for loading files into your production build dist folder. Examples include:

robots.txt
.htaccess
sitemap.xml
background images
favicon.ico

so, if you want to add some of these files just import it globally in App.jsx

```
...
/* eslint-disable */
require("static?!path/realFilename.ext?output=path/newFilename.ext");
// example 
require("static?!./favicon.ico?output=favicon.ico");
/* eslint-enable */
...
```

remember to disable eslint since this will not understand the syntax and will send a linting error

## Proxy
Sometimes when we're incorporating our frontend app with a backend server API we have to handle the difference of domain routes in the entire applicacion. in order to use backend server routes as if it would be of the frontend routes. we should use proxy in development.

in production this step is not necesary if we're working under the same domain.

go to webpack.config.js and then in  webpack-dev-server options add the proxy

```
...
proxy: {
  '/auth/*': {
    target: 'http://localhost:3000',
    changeOrigin: true,
    secure: false,
    // pathRewrite: {"^/api" : ""}
  },
},
...
```
final result: 

```
...
devServer: {
  contentBase: path.join (__dirname,publicFile),
  compress: true,
  hot: true, // enable HMR
  port: 5000,
  clientLogLevel: 'none',
  historyApiFallback: true, // can use react-router-dom  browserRouter
  open: true, // auto open
  openPage: '', // Avoid /undefined bug
  proxy: {
    '/auth/*': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      secure: false,
      // pathRewrite: {"^/api" : ""}
    },
  },
},
...
```

## Author
-  __[Luigi055](https://github.com/luigi055)__

See also the list of [contributors](https://github.com/luigi055/TDAH-REST-API/contributors) who participated in this project.

## License
This project is licensed under the MIT License.