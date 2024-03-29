// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //  // 개발
  //  bizMOBServer : 'https://iocareapp.coway.com',

   // SIT
   bizMOBServer : 'http://127.0.0.1:8080',

   // Auto Logout Time (min * sec * millsec)
   autoLogoutTime: 10 * 60 * 1000,

   // Encryption Use setting
   encryptionUse : false,

     // SIT
  bizServer : {
    server : 'http://127.0.0.1:8080',
    port : '8080',
    context : 'bizmob.corp.server'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
