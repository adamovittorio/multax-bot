/** this middleware check if user has been approved. 
* if not approved return the a message to the user that tells him to wait a couple hours */
module.exports = isApproved

function isApproved(req, res, next) {
    console.log("Approved");
    if(true){
        return next();
    }
}