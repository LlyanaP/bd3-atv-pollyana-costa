const database = 'Chat';

const collection = 'Conversas'

use(database);

db[collection].find({
    
}).sort({DataHora: -1});