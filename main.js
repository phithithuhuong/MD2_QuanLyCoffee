"use strict";
exports.__esModule = true;
var ManagerMonAn_1 = require("./ManagerMonAn");
var MonAn_1 = require("./MonAn");
var input = require('readline-sync');
var main = new ManagerMonAn_1.ManagerMonAn();
var monAn1 = new MonAn_1.MonAn(1, ' coffee Milk', 35, 'Coffee', 'ngon nhat', 1);
var monAn2 = new MonAn_1.MonAn(2, 'sinh to bo', 40, 'Nuoc ep', 'beautiful', 2);
var monAn3 = new MonAn_1.MonAn(3, 'tra da', 5, 'Tra', 'ok', 1);
var monAn4 = new MonAn_1.MonAn(4, 'khoai tay chien', 50, 'Do an vat', 'ngot', 1);
var monAn5 = new MonAn_1.MonAn(5, 'nuoc oi', 20, 'Nuoc ep', 'thom ngon', 2);
main.add(monAn1);
main.add(monAn2);
main.add(monAn3);
main.add(monAn4);
main.add(monAn5);
var types = ['Coffee', 'Tra', 'Nuoc ep', 'Do an vat'];
function add() {
    var id = +input.question('Nhap id :');
    var tenMon = input.question('Nhap ten mon :');
    var gia = +input.question('Nhap gia :');
    var loai = input.question('1.Coffee\n2.Tea\n3. Nuoc ep\n4. Do an vat \nNhap loai tu 1-4 ?');
    var type = types[loai - 1];
    var moTa = input.question('Nhap mo ta :');
    var soLuong = +input.question('Nhap so luong :');
    var monAn = new MonAn_1.MonAn(id, tenMon, gia, type, moTa, soLuong);
    main.add(monAn);
}
function edit() {
    var id1 = +input.question('Nhap id muon sua ?');
    var id2 = +input.question('Nhap id :');
    var tenMon = input.question('Nhap ten mon :');
    var gia = +input.question('Nhap gia :');
    var loai = input.question('1.Coffee\n2.Tea\n3. Nuoc ep\n4. Do an vat \nNhap loai tu 1-4 ?');
    var type = types[loai - 1];
    var moTa = input.question('Nhap mo ta :');
    var soLuong = +input.question('Nhap so luong :');
    var monAn = new MonAn_1.MonAn(id2, tenMon, gia, type, moTa, soLuong);
    main.edit(id1, monAn);
}
var menu = "\n1. Hien thi danh sach mon an .\n2. Them mon an theo ma\n3. Sua mon an\n4. Xoa mon an theo ma\n5. Tim mon an theo ten \n6. Hien cac loai, chon va hien ra ten mon an\n7. Sap xep theo gia tang dan\n8. Hien cac loai va chon, xoa het\n9. Thoat ^^";
var exit = false;
while (!exit) {
    console.log(menu);
    var choice = +input.question('Nhap lua chon ?');
    switch (choice) {
        case 1:
            main.show();
            break;
        case 2:
            add();
            main.show();
            break;
        case 3:
            edit();
            main.show();
            break;
        case 4:
            var id = +input.question('Nhap id muon xoa :');
            main.remove(id);
            main.show();
            break;
        case 5:
            var monAn = input.question('Nhap ten mon an can tim ?');
            main.search(monAn);
            break;
        case 6:
            var loai = input.question('1.Coffee\n2.Tea\n3. Nuoc ep\n4. Do an vat \nNhap loai tu 1-4 ?');
            var type = types[loai - 1];
            main.type(type);
            break;
        case 7:
            main.sortGia();
            break;
        case 8:
            var loai1 = input.question('1.Coffee\n2.Tea\n3. Nuoc ep\n4. Do an vat \nNhap loai tu 1-4 ?');
            var type1 = types[loai1 - 1];
            main.allType(type1);
            main.show();
            break;
        case 9:
            exit = true;
            break;
    }
}
