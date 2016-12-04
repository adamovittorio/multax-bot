/** this middleware check if user has been approved. 
* if not approved return the a message to the user that tells him to wait a couple hours */
module.exports = isApproved

function isApproved(req, res, next) {
    console.log("Approved");
    if(!true){
        return next();
    } 
    else{
        res.json(idleBlock());
    }  
}

function idleBlock(){
    var text =  "La tua registrazione deve ancora essere validata."+
                " Torna tra qualche ora per poter effetuare le segnalazioni.";
    var idleMsg = {
        "messages": [ {"text": text} ]
    };
    res.json(idleMsg);
}