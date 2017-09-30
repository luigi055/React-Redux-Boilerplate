# React Redux Boilerplate
This is a modern webpack full feature configuration boilerplate for __React__ v16 and __Redux__ enviroments ready to start working in development and in production.

## Table of contents
- [Next To Do](#next-to-do)
- [Vistual Studio Code Extensions](#visual-studio-code-extensions)
- [OS Compatibility](os-compatibility)
- [Installation](#installation)
  - [Global Packages](#global-packages)
- [Enviroments](#enviroments)
  - [Production](#production)
  - [Development](#development)
  - [Test](#tets)
- [React](#react)
- [redux](#redux)
  - [Redux Devtool](#redux-devtool)
- [prettier](#prettier)
- [Babel](#babel)
- [eslint](#eslint)
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
  - [Other Plugins](#other-plugins)
  - [Useful other Plugins (NOT INCLUDED)](#useful-other-plugins)
- [Fonts](#fonts)
  - [FontAwesome](#fontawesome)
- [Images](#images)
- [HTML](#html)
- [Favicon and static files](#favicon-and-static-files)
- [Proxy](#proxy)
- [Clearing Public Folder](clearing-public-folder)
- [Software used](#software-used)
- [Author](#author)
- [license](#license)

## Next To Do
- [ ] Redux hot module replacement
- [ ] favicon correctly
- [ ] __SVG fonts__ not supported yet. _only as images_

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

## OS Compatibility

This boilerplate is thought to be use in multi platform specificlly in windows 7, 8, 10, linux (tested in ubuntu, antergos), and in OSX.

any problem related with Operating System please i'll be glad to know about it. so, create an issue.

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
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- [flow](https://flow.org/) (Static type checker)
- [flow-typed](https://github.com/flowtype/flow-typed) (A central repository for Flow library definitions)
- [mocha](https://mochajs.org/) (Test Runner)

## Enviroments
This enviroment supports by default 3 enviroments
- production: which simulates a production enviroment for testing
- development: used by default for develop the entire app
- test: which run our tests using mocha, chai, sinon, enzyme

Tested using node 6+, 7+ and 8+

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

## Babel
modern EcmaScript features is all support thanks to babel which compile and transpile our ES6+ (latest versions of the language), JSX, Flow  to ES5 or which ever version we want

Additional you could use modern syntax when creating stateful components with transform-class-plugin
which allow you to use this syntax in addition to the clasical ES6 class Syntax:

```
class Search extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchTermChange = event => {
    this.setState ({
      searchTerm: event.target.value,
    });
  };

  render () {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleSearchTermChange}
          value={this.state.searchTerm}
          placeholder="Searh and try HOT MODULE REPLACEMen"
        />
        <h2>{this.state.searchTerm}</h2>
      </div>
    );
  }
}
```

## ESLint
Eslint is completely enable and properly setted to use with React using the popular airbnb eslint rules and also with react, prettier and flow linting

You can also run the following script to check linting of all your code

```
$yarn run lint
```

## Prettier
the popular autoformatter is also available in this boilerplate so to take the most out of this feature you should install the equivalent plugin or extension to your favourite IDE or Text Editor. [Read mor about prettier editor integration](https://github.com/prettier/prettier#editor-integration)

use this script in order to autoformat your code
```
$yarn run format
```

## Flow
Flow type checker supported by default and ready to use via yarn or npm script

init flow 
```
$yarn runt flow:init
```

Other scripts
```
$yarn run flow:start
$yarn run flow:stop
$yarn run flow:status
$yarn run flow:coverage
```


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

### Bootstrap 4
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

## PostCSS
you can use postCSS features and plugins in your .css or .scss files directly. this boilerplate take advantage of this awesome tool features.
You can go to postcss.config.js and check the available options and plugins
### Autoprefixer
Add vendor prefixes to CSS rules using values from Can I Use. Autoprefixer will use the data based on current browser popularity and property support to apply prefixes for you.

in postcss.config.js you can point to browsers your app will support
```
...
autoprefixer({
  browsers: ['last 2 versions', 'ie >= 10', 'and_chr >= 2.3'],
}),
...
```

### StyleLint
Enforce consistent conventions and avoid errors in your stylesheets with stylelint, a modern CSS linter. It supports the latest CSS syntax, as well as CSS-like syntaxes, such as SCSS.

this is configured with default css rules by stylelint you can [see more here](https://stylelint.io/) and also check .stylelintrc file in the boilerplate. 

__You could also need an editor or IDE extension or plugin to have this working__

### Other Plugins
theres is some other basics plugins installed and working in this boilerplate
visit postcss.config.js to know more.

#### PixRem
Pixrem is a CSS post-processor that, given CSS and a root em value, returns CSS with pixel unit fallbacks or replacements. It's based on browser data so only needed fallbacks will be added. Basically, it's for IE8 or less, and for IE9 & IE10 in the font shorthand property and in pseudo-elements.

#### will-change
This plugin uses backface-visibility to force the browser to create a new layer, without overriding existing backface-visibility properties. This 3D CSS hack is commonly done with transform: translateZ(0), but backface-visibility is used here to avoid overriding the more popular transform property.

These hacks are required for browsers that do not support will-change

#### mqpacker
MQPacker optimizes your media queries into single rules when possible:

Pre-processors such as Sass make it easy to use media queries within a declaration,
To reduce file sizes and (possibly) improve parsing times, MQPacker packs multiple declarations into one @media rule

__Hot tip__: ensure the first media query declaration in your code defines all possible options in the order you want them even if there’s no actual difference. This guarantees MQPacker will define rules in the correct order.

[mqoacket source](https://www.sitepoint.com/7-postcss-plugins-to-ease-you-into-postcss/)

### Useful other Plugins
####___(NOT INCLUDED)___
PostCSS has a lot a plugins that could be super useful as your css tool.
is fascinating how far have CSS Styling evolved thanks to javascript

the following 2 plugins are personal recommendation but is __not included__ in this boilerplate
 

#### CSS Nano Plugin
cssnano compacts your CSS file to ensure the download is as small as possible in your production environment. Install it via:

```
$yarn add --dev cssnano
```

The plugin works by removing comments, whitespace, duplicate rules, outdated vendor prefixes and making other optimizations to typically save at least 50%. There are alternative options but cssnano is one of the best. Use it!

[Learn More](http://cssnano.co/)

#### Uncss Plugin
UnCSS is a tool that removes unused CSS from your stylesheets. It works across multiple files and supports Javascript-injected CSS.

```
$yarn add --dev uncss
```

[You can test this feature here](https://uncss-online.com/)

[Learn More](UnCSS is a tool that removes unused CSS from your stylesheets. It works across multiple files and supports Javascript-injected CSS.)

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

## Favicon and Static Files

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

## Clearing Public Folder
There's an easy way to remove the public folder via npm or yarn script. sometimes we need to build it and we forget or ir annoying being removing it manually so you can remove this using the following script

```
$yarn run clear
```
## Software Used

- [Hyper CLI](https://hyper.is/)
- [visual studio code](https://code.visualstudio.com/)
- [git with git flow](https://git-scm.com/)
- [Haroopad](http://pad.haroopress.com/)
- [yarn](https://yarnpkg.com/lang/en/docs/install/)

## Author
-  __[Luigi055](https://github.com/luigi055)__

See also the list of [contributors](https://github.com/luigi055/TDAH-REST-API/contributors) who participated in this project.

## License
This project is licensed under the MIT License.