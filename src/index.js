const app = require('./app/app')
require('./app/database/database')

app.listen(app.get('port'), (err) => {
    if(err){
        console.log(`Internal error ${err}`);
    }else{
        console.log(`Listen and serve on port: ${app.get('port')}`);
    }
}) 