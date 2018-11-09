export namespace Globalvalues{
    export const firebaseConfig = {
        apiKey: "AIzaSyALPlnYMYdfEwfWuW3IFFdrttVbiv5x0p8",
        authDomain: "mycab-72668.firebaseapp.com",
        databaseURL: "https://mycab-72668.firebaseio.com",
        projectId: "mycab-72668",
        storageBucket: "mycab-72668.appspot.com",
        messagingSenderId: "171748089740"
      };  
 export const  rootApi="http://localhost:3000/incab/"  
export const apisList={
    register:rootApi+'user/auth/RegisterUser',
    checkUser:rootApi+'user/auth/checkUser',
    getNearByCabs:rootApi+'user/getDrivers/getNearbyCabs',
    getRidePrice:rootApi+'user/reqRideDetails/getPrice',
    getDistance:rootApi+'user/reqRideDetails/getDistance',
    confirmRide:rootApi+'user/bookride/confirmRide'     
}  
}