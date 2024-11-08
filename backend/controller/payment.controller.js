import path from 'path';
import fs from 'fs'
import dirname from '../helpers/dirname.helpers.js';


class PaymentController {

    static index(_, res) {
        try {
            const filePath = path.join(dirname, '../data/payment.json');
            let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            return res.status(200).json({ data: data });
        } catch (e) {
            return res.status(500).json({ data: 'Gagal membaca data.' });
        }
    }
}

export default PaymentController