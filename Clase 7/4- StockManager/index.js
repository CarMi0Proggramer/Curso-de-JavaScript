class SaleReport {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    toString() {
        return (
            "Venta de " +
            this.quantity +
            " " +
            this.product.name +
            " por " +
            this.product.getPrice +
            "USD"
        );
    }
}

class Product {
    #price;
    #stock;

    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.#price = price;
        this.#stock = stock;
    }

    get getPrice() {
        return this.#price;
    }

    get getStock() {
        return this.#stock;
    }

    set setStock(stock) {
        this.#stock = stock;
    }

    toString() {
        return `Id: ${this.id}, Nombre: ${this.name}, Precio: ${
            this.#price
        }USD, Stock ${this.#stock}`;
    }
}

class StockManager {
    constructor() {
        this.products = [
            new Product(1, "Laptop HP", 425.99, 10),
            new Product(2, "Iphone 14 PRO Max", 399.99, 5),
            new Product(3, "Smart TV", 580.99, 6),
        ];
        this.salesReports = [];
    }

    sellProduct(id, quantity) {
        const product = this.products.find((p) => p.id == id);

        if (!product) {
            console.error("Id del product inválida");
            return;
        } else if (product.getStock < quantity) {
            console.error("No hay suficiente stock");
            return;
        }

        product.setStock = product.getStock - quantity;

        const saleReport = new SaleReport(product, quantity);
        this.salesReports.push(saleReport);
    }

    replenishProduct(id, quantity) {
        const product = this.products.find((p) => p.id == id);

        if (!product) {
            console.error("Id del product inválida");
            return;
        }

        product.setStock = product.getStock + quantity;
    }

    showSalesReports() {
        let msg = "";

        for (const report of this.salesReports) {
            msg += report.toString() + "\n";
        }

        console.log(msg);
    }

    showProducts() {
        let msg = "Lista de productos \n\n";

        for (const product of this.products) {
            msg += product.toString() + "\n";
        }

        console.log(msg);
    }
}

class Application {
    constructor() {
        this.stockManager = new StockManager();
    }

    start() {
        alert("Bienvenido a su Stock Manager");

        appLoop: while (true) {
            const opcion = Number(
                prompt(
                    "Qué desea hacer? \n\n1. Vender producto \n2. Reponer producto \n3. Mostrar reporte de ventas \n4. Salir"
                )[0]
            );

            switch (opcion) {
                case 1:
                    this.#sellProduct();
                    break;
                case 2:
                    this.#replenishProduct();
                    break;
                case 3:
                    this.stockManager.showSalesReports();
                    break;
                case 4:
                    break appLoop;
                default:
                    console.error("Opción inválida");
            }
        }
    }

    #sellProduct() {
        this.stockManager.showProducts();

        const id = Number(prompt("Ingrese el id del producto")[0]);
        const quantity = Number(prompt("Ingrese la cantidad a vender"));

        if (isNaN(quantity)) {
            console.error("La cantidad debe ser un número");
            return;
        }

        this.stockManager.sellProduct(id, quantity);
    }

    #replenishProduct() {
        this.stockManager.showProducts();

        const idReponer = Number(prompt("Ingrese el id del producto")[0]);
        const quantityReponer = Number(prompt("Ingrese la cantidad a reponer"));

        if (isNaN(quantityReponer)) {
            console.error("La cantidad debe ser un número");
            return;
        }

        this.stockManager.replenishProduct(idReponer, quantityReponer);
    }
}

const app = new Application();
app.start();
