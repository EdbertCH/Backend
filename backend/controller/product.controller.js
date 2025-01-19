import path from 'path';
import fs from 'fs'
import dirname from '../helpers/dirname.helpers.js';
import isObjectEmpty from '../helpers/isobjectemepty.helper.js';


class ProductController {


    /**
     * index function controller.
     * 
     * Query params:
     * - categori_id : value from category id for each product filtering
     * - nama        : value string name
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static index(req, res) {
        try {
            const query = req.query;
            const filePath = path.join(dirname, '../data/data.json');
            let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            
            if (!isObjectEmpty(query)) {
                data = data?.filter(dt => {
                    let status = false
                    if (query?.categori_id) {
                        status = dt.categori_id == query?.categori_id
                        if (status == false) return status
                    }
                    if (query?.nama) {
                        console.log(query)
                        status = dt.nama.includes(query?.nama)
                        if (status == false) return status
                    }
                    return status
                })
            }


            return res.json({ data: data });
        } catch (e) {
            return res.json({ data: 'Gagal membaca data.' });
        }
    }


    static store(req, res) {
        try {
            const filePath = path.join(dirname, '../data/data.json');
            let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            const body = req.body;
            data.push({
                id: data.length + 1,
                nama: body.nama,
                harga: parseInt(body.harga),
                image: '/public/gambar/dessert/anmitsu.jfif',
                categori_id: 1
            });
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            return res.json({ data: 'Data berhasil disimpan.' });
        } catch (e) {
            return res.json({ data: 'Gagal menyimpan data.' });
        }
    }
}

export default ProductController