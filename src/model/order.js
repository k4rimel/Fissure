var Order = (function () {
    function Order(name, price, date) {
        this.name = name;
        this.price = price;
        this.date = date;
    }
    Order.prototype.getProp = function (prop) {
        switch (prop) {
            case 'name':
                return this.name;
            case 'price':
                return this.price;
            case 'date':
                return this.date;
        }
    };
    return Order;
})();