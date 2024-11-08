import path from 'path';
import fs from 'fs'
import dirname from '../helpers/dirname.helpers.js';


class OrderController {

    /**
     * Store order method handler
     * 
     * Request Body:
     * - products : {
     *      id: string;
     *      qty: number;
     * }[]
     * - payment_type: string
     * - customer_name: string
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static store(req, res) {
        try {
            const filePath = path.join(dirname, '../data/order.json');
            const { products, payment_type, created_at, customer_name } = req.body;
            let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            
            if (!products || !Array.isArray(products) || !payment_type || !customer_name) {
                return res.status(400).json({ error: 'Invalid request body' });
            }

            const order = {
                id: crypto.randomUUID(),
                products,
                payment_type,
                customer_name,
                created_at: new Date().toUTCString()
            }
            data.push(order)
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

            return res.status(201).json({
                message: 'Order berhasil disimpan.',
                data: order
            });
        } catch (e) {
            return res.status(500).json({ data: 'Gagal membaca data.' });
        }
    }



    static index (req, res) {
        try {
            const filePath = path.join(dirname, '../data/order.json');
            const filePathProduct = path.join(dirname, '../data/data.json');
            const dataProduct = JSON.parse(fs.readFileSync(filePathProduct, 'utf-8'));
            let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

            data.map(data => {
                data.products.map(data => {
                    // return 
                })
            })
        } catch (_) {

        }
    }
}

export default OrderController