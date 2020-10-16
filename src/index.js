const app = require('./app/app')

require('./config/database')


app.listen(app.get('port'), (error) => {
    if(error){
        console.log(`Internal error ${error}`);
    }else{
        console.log(`Listen and serve on port: ${app.get('port')}`);
    }
}) 