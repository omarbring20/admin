// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBHQHRh4XJSIWPMV8RSzx6jpfYJFAl4d9s',
    authDomain: 'delivery-9e0c3.firebaseapp.com',
    databaseURL: 'https://delivery-9e0c3.firebaseio.com',
    projectId: 'delivery-9e0c3',
    storageBucket: 'delivery-9e0c3.appspot.com',
    messagingSenderId: '12152593277',
    appId: '1:12152593277:web:5b3026c584403e78380a14'//,measurementId: ''
  },
  onesignal: {
    appId: '',
    googleProjectNumber: '',
    restKey: ''
  },
  stripe: {
    sk: ''
  },
  general: {
    symbol: '$',
    code: 'USD'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
