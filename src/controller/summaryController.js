var summaryController = (function () {
    function summaryController(items) {
        this.items = [];
    }
    summaryController.prototype.getProp = function (prop) {
        switch (prop) {
            case 'items':
                return this.name;
                break;
        }
    };
    return summaryController;
})();