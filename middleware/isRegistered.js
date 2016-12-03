/** this middleware check if user is registered. 
* if not registered return an how to register procedure. */
module.exports = function (req, res, next) {
    var isRegistered = isRegistered();
    if(isRegistered){
        return next();
    }
    res.redirect('/');
}

function isRegistered(){
    return false;
}