var Mock = require('mockjs');

module.exports = {
    project_comments: Mock.mock({
        "error": 0,
        "message": "success",
        "result|40": [{
            "author": "@name",
            "comment": "@cparagraph",
            "date": "@datetime"
        }]
    }),
    push_comment: Mock.mock({
        "error": 0,
        "message": "success",
        "result": []
    }),
    invest_list: Mock.mock({
        "error": 0,
        "msg": "success",
        "result": [{
            id: '1245678',
            name: '张AA',
            mobile: '13512345678',
            regTime: 1511147531500,
            valideTime: 1511147531500,
            regDevice: 'WAP',
            source: 'friend',
            accStatus: 'opened',
            userStatus: 'normal'
        }, {
            id: '1245679',
            name: '张AA',
            mobile: '13512345678',
            regTime: 1511147531500,
            valideTime: 1511147531500,
            regDevice: 'ANDROID',
            source: 'ql',
            accStatus: 'opened',
            userStatus: 'normal'
        }, {
            id: '1245118',
            name: '张AA',
            mobile: '13512345678',
            regTime: 1511147531500,
            valideTime: 1511147531500,
            regDevice: 'iOS',
            source: 'own',
            accStatus: 'opened',
            userStatus: 'normal'
        }]
    })
};
