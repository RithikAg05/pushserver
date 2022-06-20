const express = require ('express');

const routes = require('./Routes/pushroute');

const app = express();

app.use(express.json());

app.use('/', routes);

const listmer = app.listen(process.env.PORT || 3000, () =>{

    console.log('Application is listning on port ' + listmer.address().port)
})

