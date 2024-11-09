import path from 'path';
import fs from 'fs'
import dirname from '../helpers/dirname.helpers.js';
import isObjectEmpty from '../helpers/isobjectemepty.helper.js';


class CategoryController {


    /**
     * index function controller.
     * 
     * Query params:
     * - show-count-product: boolean
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static index(req, res) {
        try {
            const query = req.query;
            const filePath = path.join(dirname, '../data/categori.json');
            const filePathProduct = path.join(dirname, '../data/data.json');
            const dataProduct = JSON.parse(fs.readFileSync(filePathProduct, 'utf-8'));
            let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

            if (!isObjectEmpty(query)) {
                if (query['show-count-product']) {
                    data = data.map(data => {
                        return {
                            ...data,
                            count: dataProduct.filter(
                                product => product.categori_id == data.id
                            )?.length
                        }
                    })
                }
            }
          
            return res.status(200).json({ data: data });
        } catch (e) {
            return res.status(500).json({ data: 'Gagal membaca data.' });
        }
    }
}

export default CategoryController