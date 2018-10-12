export namespace Globalvalues{
    export const firebaseConfig = {
        apiKey: "AIzaSyALPlnYMYdfEwfWuW3IFFdrttVbiv5x0p8",
        authDomain: "mycab-72668.firebaseapp.com",
        databaseURL: "https://mycab-72668.firebaseio.com",
        projectId: "mycab-72668",
        storageBucket: "mycab-72668.appspot.com",
        messagingSenderId: "171748089740"
      };  
 export const  restApi="http://localhost:3000/incab/"  
export const apisList={
    register:restApi+'user/auth/RegisterUser',
    checkUser:restApi+'user/auth/checkUser',
    getNearByCabs:restApi+'user/getDrivers/getNearbyCabs'    
}  
}