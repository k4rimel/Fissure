var Order = (function () {
    function Order(name, price) {
        this.name = name;
        this.price = price;
    }
    Order.prototype.getProp = function (prop) {
        switch (prop) {
            case 'name':
                return this.name;
                break;
            case 'price':
                return this.price;
                break;
        }
    };
    return Order;
})();