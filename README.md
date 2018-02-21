
# MyMap React Native App
[![Build Status](https://travis-ci.com/ctcusc/mymap-mobile.svg?token=xy29s3KFjbDSoUJfVgcQ&branch=master)](https://travis-ci.com/ctcusc/mymap-mobile/)

## Table of Contents

* [Prerequisites](#prerequisites)
  * [react-native-cli](#rn-cli)
  * [expo-cli](#expo-cli)
  * [react-native-debugger](#react-native-debugger)
* [Available Scripts](#available-scripts)
  * [yarn test](#yarn-test)
  * [yarn run ios](#yarn-run-ios)
  * [yarn run android](#yarn-run-android)
  * [yarn run eject](#yarn-run-eject)
* [Environment Variables](#environment-variables)
  * [Configuring Packager IP Address](#configuring-packager-ip-address)
* [Customizing App Display Name and Icon](#customizing-app-display-name-and-icon)
* [Troubleshooting](#troubleshooting)
  * [Networking](#networking)
  * [iOS Simulator won't open](#ios-simulator-wont-open)
  * [QR Code does not scan](#qr-code-does-not-scan)

## Prequisites

You will need to install the following before you start development on the app.

### `react-native-cli`

You'll need to install the react-native-cli by typing the following:

```
npm install -g react-native-cli
```

This is important because we will be running our simulator with `react-native run-ios`.
If you try it without the cli, it won't work.

### `expo-cli`

You will also need to install the Expo CLI, as we are using it to bundle and serve the source code.

```
npm install -g exp
```

Now, you will be able to type 'exp start' to start the packaging server.

### `react-native-debugger`

In order to debug the application, it is best that you install the react-native-debugger tool.
It works very similar to chrome dev tools and gives you a React-Devtools-esque debugging experience.
Install the application by running:
```
brew update && brew cask install react-native-debugger
```
This will download the application to your computer.

You can then run the debugger by typing:
```
yarn run debug
```
and then tapping on the 'Debug JS Remotely' option in your emulator.

## Running with the Cancerbase SDK:

Note that you will have to have the Cancerbase SDK compiled before building this app. Our current development environment assumes that you have `/mymap-mobile` adjacent to `platform` in the folder structure. In order to build the Cancerbase SDK, navigate into `platform` and find the `.xcodeproj` for the Cancerbase SDK. Open it up and build! If there are errors, most likely you don't have the pods installed (run pod install).

When developing the app, you may want to login with Cancerbase and do things such as create a user, login, and access a profile. Upon creating a profile, you will be taken to the "Grant Access" page.  Sometimes, if you press "Grant Access", nothing will happen. If this is the case, navigate into the `platform/scripts` directory and run `hydra-launch-terminal.sh` and then run `dev-init`, which will insert the list of OAuth accounts into the database (this is what the whole cb11111 abcdef stuff is for). Restart the app and you should be good to go!

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

#### `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.
  You should see something like this print to your screen:
  ![enter image description here](https://i.imgur.com/qszAAZV.png)

#### `yarn run ios`

Like `yarn start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed. Under the hood, it calls `react-native run-ios`, which is necessary because we have native modules in our application. If `yarn run ios

## Troubleshooting

### Networking

If you press `Cmd+D` on your simulator and enable "Debug JS Remotely", you should be able to debug mymap-mobile using Chrome Devtools! This will print all calls to `console.log()` into the browser tab. In addition, you'll see that at the top of `App/index.js` there is code to print all Network Requests in the console, which will be very useful when we are working with the Cancerbase SDK, performing HTTP requests to `platform`.  

*IMPORTANT: * You must enable `CORS` in order to debug network requests. `CORS` stands for Cross-Origin-Request-Sharing, which is important because our network requests will be coming from a different origin (the iOS simulator), and we will be debugging from our browser.

### iOS Simulator won't open

If you're on a Mac, there are a few errors that users sometimes see when attempting to `yarn run ios`:

* "non-zero exit code: 107"
* "You may need to install Xcode" but it is already installed
* and others

There are a few steps you may want to take to troubleshoot these kinds of errors:

1. Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
2. Open Xcode's Preferences, the Locations tab, and make sure that the `Command Line Tools` menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run `yarn run ios` after doing so.
3. If that doesn't work, open the Simulator, and under the app menu select `Reset Contents and Settings...`. After that has finished, quit the Simulator, and re-run `yarn run ios`.

### QR Code does not scan

If you're not able to scan the QR code, make sure your phone's camera is focusing correctly, and also make sure that the contrast on the two colors in your terminal is high enough. For example, WebStorm's default themes may [not have enough contrast](https://github.com/react-community/create-react-native-app/issues/49) for terminal QR codes to be scannable with the system barcode scanners that the Expo app uses.

If this causes problems for you, you may want to try changing your terminal's color theme to have more contrast, or running Create React Native App from a different terminal. You can also manually enter the URL printed by the packager script in the Expo app's search bar to load it manually.
