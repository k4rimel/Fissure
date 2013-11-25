var InputController = (function () {
    function InputController() {
        
    }
    InputController.prototype.getProp = function (prop) {
        switch (prop) {
            case 'items':
                return this.items;
        }
    };
    return InputController;
})();