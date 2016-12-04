/** this routes give the user all the reports option: */
module.exports = function (req, res) {
    var title = "Cosa vuoi segnalare?";
    var btn1 = {
        "type": "show_block",
        "block_name": "Divieto di sosta",
        "title": "Divieto di sosta"
    };
    var reports = {
        "messages": [{
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "button",
                    "text": title,
                    "buttons": [ btn1 ]
                }
            }
        }]
    };
    res.json(reports);
}