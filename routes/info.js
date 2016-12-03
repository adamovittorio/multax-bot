/** this routes explain the user how it works and then provides 2 choices:
 * - I want to know more: sends to multax landing page
 * - I want to report a law Engrangment: triggers registration-check */
module.exports = function (req, res) {
    var info = {
        "messages": [
            { "text": "Lasciami spiegare..." }
        ]
    }
    res.json(info);
}