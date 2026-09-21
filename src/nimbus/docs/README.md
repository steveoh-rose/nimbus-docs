# Nimbus UI

## Welcome

Nimbus UI is the React library counterpart of Console Connect’s design system - Nimbus. Nimbus UI consists of a core set of reusable components and composable components for common application design patterns. The system is split into `/nimbus-core` and `/components` to allow for primitive components and application specific components to be seperated and structured.

React is a core part of our front-end architecture and our components have to be able to handle large data sets and complex workflows. We take great care in designing components that are easy-to-use and flexible enough to handle unique configurations.

## Table of contents

- 🏗️ [App structure](#app-structure)
- 📦 [Getting started](#📦-getting-started)
  - [Developing Nimbus](#developing-nimbus)
  - [Using Nimbus](#using-nimbus)
- 🚀 [Releasing](#releasing)
- ✨ [Contributing](#contributing)
- 💖 [Getting in touch](#getting-in-touch)

## 🏗️ App structure

Currently Nimbus is in the process of a redesign. This means that the structure of Nimbus UI might change, but for now our current structure supports two types of components (legacy & core). For this we’ve had to break out components into two separate folders.

```
.nimbus-ui
├── ...
├── docs
├── public
├── src
│    ├── components       // all legacy components
│    │   ├── Input
│    │   ├── Button
│    │   ├── DropDown
│    │   └── ...
│    ├── nimbus-core      // core components
│    │   ├── switch
│    │   ├── text-area
│    │   ├── text-input
│    │   └── ...
│    ├── nimbus-icons    // nimbus icons
│    ├── utils           // hooks & utils
│    ├── index.test.ts
│    ├── index.ts        // exports
│    ├── setupTests.ts
│    └── typings.d.ts    //global types
├── ...
├── package.lock.json
├── package.json
├── rollup.config.js
└── tsconfig.json
```

#### Please note

- Components, Icons and their types are built with [Rollup](https://rollupjs.org/), meaning Nimbus supports tree shaking out of the box. For this reason we don't have separate packages.
- Nimbus UI compiles styles at build time - using its own version of cc-design-tokens. To use tokens, we still import the token package (which lives in a separate repository). For more information visit [cc-design-tokens](https://github.com/ConsoleConnect/cc-design-tokens).

# 📦 Getting started

## Developing Nimbus

### Local Install

You'll need [Git](https://help.github.com/articles/set-up-git/) and [Node.js](https://nodejs.org/en/) installed to get this project running.

**Note:** You will need the Node.js version specified in the [.nvmrc](https://github.com/ConsoleConnect/nimbus-ui/blob/main/.nvmrc) file.

#### 1. Clone repository

To run Nimbus UI locally, you will first need to clone the repository using git:

```bash
git clone git@github.com:ConsoleConnect/nimbus-ui.git
```

After that has finished cloning, you will need to `cd nimbus-ui` and check peer dependencies.

#### 2. Using nvm (optional)

Nimbus relies on peer dependencies to be met before it can be installed. To meet these peer dependencies, you’ll need to use node 18.

To enable switching version we use [nvm (node version manager)](https://github.com/creationix/nvm) to switch between versions easily.

1. Install [nvm](https://github.com/creationix/nvm#installation)
2. Run `nvm --version` to check if it’s installed
3. Run `nvm install` in the project directory (this will use [.nvmrc](https://github.com/ConsoleConnect/nimbus-ui/blob/main/.nvmrc))
4. (Optional) if your node version didn’t install try `nvm use 18` or

#### 3. Install dependencies

##### Peer dependencies

After you’ve installed the node version we use, you can install.

```bash
npm install
```

Sometimes, npm might fail to install the peer dependencies. You can try running the install with the `--legacy-peer-deps` flag to bypass peerDependency auto-installation.

#### 4. Start a local server

This will build storybook, serve it and watch for changes.

```bash
npm run storybook
```

## Using Nimbus

### Install

Nimbus is a private NPM module, to use Nimbus you'll need to get access to the console connect NPM account so you’re able to follow the getting started guide.

To use Nimbus UI components, all you need to do is install the `@console/nimbus-ui` package.

```bash
$ npm install @console/nimbus-ui --save
```

Nimbus UI is best used with our Nimbus Tokens ([cc-design-tokens](https://github.com/ConsoleConnect/cc-design-tokens)) as these have a peer dependency on each other. This is also a private module hosted on the console connect org NPM account.

```bash
$ npm install @console/cc-design-tokens --save
```

Nimbus UI relies on `react`, `react-dom` and `react-router-dom` as peer dependencies that need to be met.

```js
    "react": ">=16",
    "react-dom": ">=16",
    "react-router-dom": ">=5"
```

### Usage

Legacy, or composed components can be imported from the main entry:

```
import {} from '@console/nimbus-ui';
```

Core components can be imported from the `core` subpath:

```
import React from 'react';
import { Switch } from '@console/nimbus-ui/core';

const App = () => {
  return (
    <div>
      <Switch size="lg">Button</Switch>
      <Switch size="lg">Button</Switch>
      <Switch size="lg">Button</Switch>
      <Switch size="lg">Button</Switch>
    </div>
  );
};

export default App;
```

## 🚀 Releasing

See [releasing a new version](./?path=/docs/getting-started-contributing--docs#-releasing-a-new-version)

## ✨ Contributing

See [contributing](?path=/docs/getting-started-contribution--docs#contributing).

## 💖 Getting in touch

Every PI we release a design system survey to gather data on how our design system is used and gather metrics from developers & designer alike.

For any general feedback or to raise an issue please feel free to get in touch with the design system team in [#nimbus](https://consoleconnect.slack.com/archives/CMAV1497S) Slack channel and mention us via `@team-nimbus`. Once we have received your feedback it will be triaged and responded to.
