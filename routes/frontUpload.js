/** this routes give the user all the reports option: */
module.exports = frontUpload

function frontUpload(req, res) {
    var title = "VaaaaBene"+req;
    var btn1 = {
        "type": "show_block",
        "block_name": "Divieto di posta",
        "title": "Divieto di posta"
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