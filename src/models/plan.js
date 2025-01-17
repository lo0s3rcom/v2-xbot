'use strict';

module.exports = {
    seed: {
        name: 'seed plans',
        cmd: 'select_plan',
        prev_cmd: 'select_server',
        next_cmd: 'select_server',
        data: [
            {
                model: {
                    "id": 1,
                    "name": "PLAN_NAME", // نام نمایشی به کاربر
                    "totalPrice": 100000, // قیمت
                    "maxDays": 30, // تعداد روز
                    "volume": 30, // حجم به گیگ
                    "maxIp": 1, // حداکثر تعدا آی پی
                    "sharedId": 0, // اکانت اشتراکی
                    "note": "ADMIN_NOTE" // یاددشت برای ادمین
                }
            },
            {
                model: {
                    "id": 2,
                    "name": "PLAN_NAME_2",
                    "totalPrice": 170000,
                    "maxDays": 60,
                    "volume": 60,
                    "maxIp": 1,
                    "sharedId": 0,
                    "note": "ایاددشت برای ادمین"
                }
            },
            {
                model: {
                    "id": 3,
                    "name": "PLAN_NAME_2",
                    "totalPrice": 250000,
                    "maxDays": 90,
                    "volume": 90,
                    "maxIp": 1,
                    "sharedId": 0,
                    "note": "ایاددشت برای ادمین"
                }
            },
        ],
    },

    getButtons(nextCmd, options = {}) {
        let {addBackButton = true, unitPrice = "تومان"} = options;
        let data = this.seed.data.map(p => {
            return [{text: `${p.model.name} - ${p.model.totalPrice.toLocaleString()} ${unitPrice}`, callback_data: `${nextCmd};${p.model.id}`}]
        })

        if (addBackButton) {
            data.push([{text: "برگشت ↩️", callback_data: this.seed.prev_cmd}])

        }

        return data;
    },

    findById(id) {
        return this.seed.data.find(p => p.model.id == id)
    }
}




