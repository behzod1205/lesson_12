class Products{

    static productCount = 0

    constructor(id, name, price){
        this.id = id
        this.name = name
        this.price = price


        Products.productCount++
    }

    totalPrice(){
        return this.price
    }
}

class careProduct extends Products{

    constructor(id, name, price, warrantyPeriod){
        super(id, name, price)
        this.warranty = warrantyPeriod
    }

    totalPrice(){
        let discount = 0

        switch(this.warranty){
            case 5: 
                discount = 0.9
                break
            case 4:
                discount = 0.8
                break
            case 3:
                discount = 0.7
                break
            case 2:
                discount = 0.6
                break
            case 1:
                discount = 0.5
                break
        }
        return this.price * discount
    }
}


let product_1 = new Products(1, "Phone", 300)
let product_2 = new Products(2, "tablet", 400)
let product_3 = new Products(3, "Watch", 200)
let product_4 = new careProduct(4, "Laptop", 1000, 5)
let product_5 = new careProduct(5, "TV", 2000, 2)

console.log("Product_1", product_1.totalPrice())
console.log("Product_2:", product_2.totalPrice())
console.log("Product_3", product_3.totalPrice())
console.log("Product_4", product_4.totalPrice())
console.log("Product_5", product_5.totalPrice())

console.log("All products amount:", Products.productCount)