//<===========================================================>//
//<============================Lec6Feb21_Creating and writing files,Events Module, Emmiting Module Module===============================>//
// const Event = require('events');

// const Login = new Event();// ek login banaya jo ek event type ha 
// Login.addListener('Success', ()=>{//Registered event
//     console.log('user logged in successfully');
// })
// Login.emit('Success')//Event ko raise kiya
// Login.emit('error')//predefined event banaya hi nhi to run nhi karega



/*
const Event = require('events');

const Login = new Event();//evenlistner
// const SignUp = new Event()//evenlistner


//  Login.emit('error');// this will throw error (JS code run line by line , top to bottom)
Login.addListener('success', () => {//callback
    console.log('user logged in successfully');
})
Login.addListener('error', () => {
    console.log('error while logging in user');
})
//  Login.emit('success');//abhinav
//  Login.emit('success');//alam
//  Login.emit('success');//noor
 Login.emit('error');
 Login.emit('success');
 */


//
// const Event = require('events');

// const Login = new Event();//evenlistner

// Login.addListener('success', (username, country) => {//callback
//     console.log(`${username} logged in successfully ${country}`);
// })

// Login.addListener('error', () => {
//     console.log('error while logging in user');
// })

//  Login.emit('success', 'Abhinav', 'India');//abhinav
//  Login.emit('success', 'Alam');//alam
//  Login.emit('success', );//noor
//  Login.emit('error');


//
// const Event = require('events');
// const Login = new Event();//evenlistner

// //1 Listener
// Login.addListener('success', (username, country) => {//callback
//     console.log(`${username} logged in successfully ${country}`);
// })
// //2 Listener
// Login.addListener('success', ()=> {
//     console.log('added the logs in file');
// })
// Login.addListener('error', () => {
//     console.log('error while logging in user');
// })

//  Login.emit('success', 'Abhinav', 'India');//abhinav
//  Login.emit('success', 'Alam');//alam
//  Login.emit('success', );//noor
//  Login.emit('error');
// // output 2 logged



//
// const Event = require('events');

// const Login = new Event();//evenlistner
// const SignUp = new Event()//evenlistner

// //1 Listener
// Login.addListener('success', (username, country) => {//callback
//     console.log(`${username} logged in successfully ${country}`);
// })
// Login.emit('success', 'Alam', 'India')
// //2 Listener
// Login.addListener('success', ()=> {
//     console.log('added the logs in file');
// })

// Login.addListener('error', () => {
//     console.log('error while logging in user');
// })

//  Login.emit('success', 'Abhinav', 'India');//abhinav




//
/*
const Event = require('events');

const Login = new Event();//evenlistner
const SignUp = new Event()//evenlistner

//1 Listener
Login.addListener('success', (username, country) => {//callback
    console.log(`${username} logged in successfully ${country}`);
})
Login.emit('success', 'Alam', 'India')
//2 Listener
Login.on('success', ()=> {//define listener as ON
    console.log('added the logs in file');
})

Login.addListener('error', () => {
    console.log('error while logging in user');
})

 Login.emit('success', 'Abhinav', 'India');//abhinav
//output 3 logged
*/

//<============================END: Lec6Feb21_Creating and writing files,Events Module, Emmiting Module Module===============================>//




//<======================= Lec7Feb23: Creating and working files, Events module, Emitting Events====================================>//

// const Event = require('events');

// //
// const SignUp = new Event();
// // runs only one time
// const successSignup = () =>{
//     console.log(`signup is successful`);
// }
// SignUp.addListener('success', successSignup);//listener
// SignUp.emit('success');


//
// const SignUp = new Event();
// // runs only one time
// const successSignup1 = () =>{
//     console.log(`signup is successful first`);
// }
// const successSignup2 = () =>{
//     console.log(`signup is successful second`);
// }
// SignUp.addListener('success', successSignup1);
// SignUp.addListener('success', successSignup2);
// SignUp.emit('success');


//
// const SignUp = new Event();

// const successSignup1 = () =>{
//     console.log(`signup is successful first`);
// }
// const successSignup2 = () =>{
//     console.log(`signup is successful second`);
// }
// SignUp.addListener('success', successSignup1);
// SignUp.addListener('success', successSignup2);
// SignUp.emit('success');

// SignUp.removeListener("success", successSignup1);
// SignUp.emit('success');


//
// const SignUp = new Event();
// const successSignup1 = (name) =>{
//     console.log(`first signup is successful ${name}`);
// }
// const successSignup2 = (name) =>{
//     console.log(`second signup is successful ${name}`);
// }
// SignUp.addListener('success', successSignup1);
// SignUp.on('success', successSignup2);
// SignUp.emit('success', 'Noor', 'Alam');

// // removeListener removes one listener whatever we pass as a second argument
// // SignUp.removeListener('success', successSignup1);
// SignUp.off('success', successSignup1);
// SignUp.emit('success','sameer');

//
// const SignUp = new Event();
// const successSignup1 = (name) =>{
//     console.log(`first signup is successful ${name}`);
// }
// const successSignup2 = (name) =>{
//     console.log(`second signup is successful ${name}`);
// }
// SignUp.on('success', successSignup1);
// SignUp.off('success', successSignup2);
// SignUp.emit('success','sameer');


//
// const SignUp = new Event();

// const successSignup1 = (name) =>{
//     console.log(`first signup is successful ${name}`);
// }
// const successSignup2 = (name) =>{
//     console.log(`second signup is successful ${name}`);
// }
// SignUp.addListener('success', successSignup1);
// SignUp.on('success', successSignup2);
// SignUp.emit('success', 'Noor', 'Alam');

// // removeAllListener removes for the event
// SignUp.removeAllListeners('success');
// SignUp.emit('success','sameer');




//
// const SignUp = new Event();
// const successSignup2 = (name) =>{
//     console.log(`second signup is successful ${name}`)
// }
// SignUp.on('success', successSignup2);

// SignUp.once('success', ()=>{
//     console.log('running only once');
// })
// SignUp.emit('success', 'Abhinav');


//

// const SignUp = new Event();
// const successSignup2 = (name) =>{
//     console.log(`second signup is successful ${name}`)
// }
// SignUp.on('success', successSignup2);

// SignUp.once('success', (name)=>{//ye once baar hi chalega
//     console.log(`running only once ${name}`);
// })
// SignUp.emit('success', 'Abhinav');
// SignUp.emit('success', 'Alam');


//

// const SignUp = new Event();//to create instant of event class
// const successSignup2 = (name) =>{
//     console.log(`second signup is successful ${name}`);
// }

// SignUp.on('success', successSignup2);//on is the object of event class
// SignUp.once('success', ()=>{
//     console.log('running only once');
// })
// SignUp.emit('sucess', 'Abhinav');
// // deprecated
// console.log(SignUp.listenerCount('success'));//give listener number


//<================Iske baad http module banaya================>
//<===========================================================>//