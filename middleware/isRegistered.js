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
    var text =  "Per poter effettuare segnalazioni, è necessario verificarsi." + 
                "Carica le foto front e retro del  tuo documento di identità in questa chat";
    var btn1 = {
        "type": "show_block",
        "block_name": "Welcome Back",
        "title": "Ho cambiato idea."
    };
    var block = {
        "messages": [{
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "button",
                    "text": text,
                    "buttons": [ btn1 ]
                }
            }
        }]
    };
    return block;
}