/** this routes give the user all the reports option: */
const router = require('express').Router()

router.get('reports', function (req, res) {
    const title = "Cosa vuoi segnalare?"
    const btn1 = {
        "type": "show_block",
        "block_name": "Divieto di sosta",
        "title": "Divieto di sosta"
    }
    const reports = {
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
    }
    res.status(200).json(reports)
})

module.exports = router
