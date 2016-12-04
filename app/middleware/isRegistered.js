/** this middleware check if user is registered. 
* if not registered return an how to register procedure. */
module.exports = isRegistered

function isRegistered(req, res, next) {
    if(true){
        return next();
    } 
    else{
        res.json(registrationBlock());
    }  
}

function registrationBlock(){
    var text =  "Per poter effettuare segnalazioni, è necessario effettuare una breve registrazione. ";
    var btn1 = {
        "type": "show_block",
        "block_name": "Registrazione",
        "title": "Inizia la registrazione"
    };
    var btn2 = {
        "type": "show_block",
        "block_name": "Default answer",
        "title": "Non mi interessa"
    }; 
    var block = {
        "messages": [{
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "button",
                    "text": text,
                    "buttons": [ btn1,btn2 ]
                }
            }
        }]
    };
    return block;
}