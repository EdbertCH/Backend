export interface Order {
    id: string
    products: {
        qty: number
        product: {
            id: number
            nama: string
            harga: number
            image: string
        }
    }[]
    payment_type: string
    customer_name: string
    created_at: string
}