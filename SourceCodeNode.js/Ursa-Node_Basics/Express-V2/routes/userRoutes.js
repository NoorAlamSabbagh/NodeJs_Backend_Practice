// <======================Lec12March2-Introducing routes and Router, middleware in express,mvc architecture==========>
const express = require('express');

const router = express.Router();

router.get('/user', (req, res) => {
    res.send('user list')
})

router.get('/user/all', (req, res) => {
    res.send('all user')
})

module.exports = router

//
// user route
// app.route('/user/:id')
// .get((req, res) => {
    //     res.send('product page-- GET')
    // })
    // .post((req, res) => {
        //     res.send('product page -- POST')
        // })
        // .patch((req, res) => {
            //     res.send('product page -- PATCH')
            // })
// <======================END: Lec12March2-Introducing routes and Router, middleware in express,mvc architecture==========>