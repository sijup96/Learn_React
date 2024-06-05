                                Learning React..

# React create app
npx create-react-app my-app
cd my-app
npm start

# Install React
--> npm install react

--> npm i react-dom

# Installing dependencies
--> npm i -D parcel ( -D means dev dependencies ) other is normal dependencies.

# Run Parcel for developer
--> npx parcel index.html ( npx means executing the package.. to Iginte our app) --https

. Local server
. HMR (Hot Module Replacement)
. Store caching for Faster Builds
. Image optimization
. Minification
. Compress
. Bundling
. Consistent Hashing
. Differential Bundling - support older versions
. HTTPS host also
. Tree Shaking algorithm- remove unused code

# Parcel for Production
--> npx parcel build index.html (When using this, remove main:App.js from package.json)

# make sure gitignore
/node_modules

# JSX (JavaScript XML (xml like syntax))
--> (JSX transpiled before it reaches the JS) - PARCEL - Babel
- Camelcase
- Writing multiple line inside the () otherwise write in one line.

# React Component (2 types)
--> Class Based Component - OLD way of writing code

--> Functional Component - NEW way of writing code
. Component name starts with capital letter.
. Function that return reactElement  

--> Component composition - A component inside another component.

# props 
--> Arguments to a function (to Load dynamic data)
 .passing props to the component.

# key
--> must use unique ID ,(else use 'index' but  is not recomented by react)



 # more
 --> Config driven UI (website is driven by config data)- industrial use