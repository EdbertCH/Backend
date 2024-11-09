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





    /**
     * Index Order
     * Get data list order
     * 
     * @param {*} _ 
     * @param {*} res 
     * @returns 
     */
    static index (_, res) {
        try {
            const filePath = path.join(dirname, '../data/order.json');
            const filePaythPayment = path.join(dirname, '../data/payment.json');
            const filePathProduct = path.join(dirname, '../data/data.json');
            const filePathCategory = path.join(dirname, '../data/categori.json');
            const dataCategory = JSON.parse(fs.readFileSync(filePathCategory, 'utf-8'))
            const dataPayment = JSON.parse(fs.readFileSync(filePaythPayment, 'utf-8'))
            const dataProduct = JSON.parse(fs.readFileSync(filePathProduct, 'utf-8'));
            let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

            const dataLink = data.map(data => {
                const products = data.products.map(data => {
                    const product = dataProduct.filter(product => {
                        return product.id == data.id
                    })[0]

                    product.categori = dataCategory.filter(category => {
                        return product.categori_id == category.id
                    })[0]

                    delete product.categori_id

                    return {
                        qty: data.qty,
                        product: product
                    }
                })
                return {
                    ...data,
                    products,
                    payment_type: dataPayment.filter(payment => {
                        return data.payment_type == payment.id
                    })[0].name
                }
            })

            return res.status(200).json({
                message: 'Berhasil mengambil data',
                data: dataLink
            })
        } catch (_) {
            return res.status(500).json({ message: 'Gagal membaca data.', data: [] });
        }
    }



    /**
     * Delete
     * 
     * this controller usage params id
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static delete(req, res) {
        try {
            const filePath = path.join(dirname, '../data/order.json');
            const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            const { id } = req.params

            const dataFilter = data.filter(data => data.id !== id)
            fs.writeFileSync(filePath, JSON.stringify(dataFilter, null, 2));

            return res.status(200).json({
                message: 'Berhasil menghapus data',
                data: []
            })
        } catch(_) {
            return res.status(500).json({ message: 'Gagal membaca data.', data: [] });
        }
    }
}

export default OrderController