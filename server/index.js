const express = require('express');
const app = express();
// settings

app.set('port',process.env.PORT || 3000)

// Middlewares

//routes

//start server

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});
