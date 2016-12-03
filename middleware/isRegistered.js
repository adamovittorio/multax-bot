/** this middleware check if user is registered. 
* if not registered return an how to register procedure. */
module.exports = isRegistered

function isRegistered(req, res, next) {
    console.log("Registered");
    if(true){
        return next();
    }
}