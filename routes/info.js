module.exports = function (req, res) {
    var info = {
        "messages": { 
            "text": "Lasciami spiegare...",
        }
    }
    res.json(info);
}