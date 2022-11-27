"use strict";
exports.__esModule = true;
exports.MonAn = void 0;
var MonAn = /** @class */ (function () {
    function MonAn(id, tenMon, gia, loai, moTa, soLuong) {
        this._id = id;
        this._tenMon = tenMon;
        this._gia = gia;
        this._loai = loai;
        this._moTa = moTa;
        this._soLuong = soLuong;
    }
    Object.defineProperty(MonAn.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonAn.prototype, "tenMon", {
        get: function () {
            return this._tenMon;
        },
        set: function (value) {
            this._tenMon = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonAn.prototype, "gia", {
        get: function () {
            return this._gia;
        },
        set: function (value) {
            this._gia = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonAn.prototype, "loai", {
        get: function () {
            return this._loai;
        },
        set: function (value) {
            this._loai = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonAn.prototype, "moTa", {
        get: function () {
            return this._moTa;
        },
        set: function (value) {
            this._moTa = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonAn.prototype, "soLuong", {
        get: function () {
            return this._soLuong;
        },
        set: function (value) {
            this._soLuong = value;
        },
        enumerable: false,
        configurable: true
    });
    return MonAn;
}());
exports.MonAn = MonAn;
;
