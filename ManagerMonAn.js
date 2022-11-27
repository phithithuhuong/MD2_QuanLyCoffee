"use strict";
exports.__esModule = true;
exports.ManagerMonAn = void 0;
var ManagerMonAn = /** @class */ (function () {
    function ManagerMonAn() {
        this.listMonAn = [];
    }
    ManagerMonAn.prototype.add = function (monAn) {
        this.listMonAn.push(monAn);
    };
    ManagerMonAn.prototype.show = function () {
        console.table(this.listMonAn);
    };
    ManagerMonAn.prototype.index = function (id) {
        for (var i = 0; i < this.listMonAn.length; i++) {
            if (this.listMonAn[i].id === id) {
                return i;
            }
        }
    };
    ManagerMonAn.prototype.edit = function (id, monAn) {
        for (var i = 0; i < this.listMonAn.length; i++) {
            if (this.listMonAn[i].id == id) {
                this.listMonAn[i] = monAn;
            }
        }
    };
    ManagerMonAn.prototype.remove = function (id) {
        var index = this.index(id);
        for (var j = 0; j < this.listMonAn.length; j++) {
            if (this.listMonAn[j].id === id) {
                this.listMonAn.splice(index, 1);
            }
        }
        return "Try again  !";
    };
    ManagerMonAn.prototype.search = function (monAn) {
        var arr = [];
        for (var i = 0; i < this.listMonAn.length; i++) {
            if (this.listMonAn[i].tenMon.includes(monAn)) {
                arr.push(this.listMonAn[i]);
            }
        }
        console.table(arr);
    };
    ManagerMonAn.prototype.type = function (type) {
        var arr = [];
        for (var i = 0; i < this.listMonAn.length; i++) {
            if (this.listMonAn[i].loai.includes(type)) {
                arr.push(this.listMonAn[i]);
            }
        }
        console.table(arr);
    };
    ;
    ManagerMonAn.prototype.sortGia = function () {
        console.table(this.listMonAn.sort(function (a, b) { return a.gia - b.gia; }));
    };
    ManagerMonAn.prototype.allType = function (allType) {
        this.listMonAn = this.listMonAn.filter(function (element) { return element.loai != allType; });
    };
    return ManagerMonAn;
}());
exports.ManagerMonAn = ManagerMonAn;
