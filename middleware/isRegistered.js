/** this middleware check if user is registered. 
* if not registered return an how to register procedure. */
module.exports = isRegistered

function isRegistered(req, res, next) {
    console.log("Registered");
    if(!true){
        return next();
    } 
    else{
        res.json(requestIdBlock());
    }  
}

function requestIdBlock(){
    var text =  "Per poter effettuare segnalazioni, è necessario verificarsi. " + 
                "Cosa vuoi fare?";
    var btn1 = {
        "type": "show_block",
        "block_name": "Fronte upload",
        "title": "Caricare il documento"
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