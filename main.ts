import {ManagerMonAn} from "./ManagerMonAn";
import {MonAn} from "./MonAn";

let input = require('readline-sync');

let main = new ManagerMonAn();
let monAn1 = new MonAn(1, ' coffee Milk', 35, 'Coffee', 'ngon nhat', 1)
let monAn2 = new MonAn(2, 'sinh to bo', 40, 'Nuoc ep', 'beautiful', 2)
let monAn3 = new MonAn(3, 'tra da', 5, 'Tra', 'ok', 1)
let monAn4 = new MonAn(4, 'khoai tay chien', 50, 'Do an vat', 'ngot', 1)
let monAn5 = new MonAn(5, 'nuoc oi', 20, 'Nuoc ep', 'thom ngon', 2)
main.add(monAn1)
main.add(monAn2)
main.add(monAn3)
main.add(monAn4)
main.add(monAn5)
let types = ['Coffee', 'Tra', 'Nuoc ep', 'Do an vat'];

function add() {
    let id = +input.question('Nhap id :')
    let tenMon = input.question('Nhap ten mon :')
    let gia = +input.question('Nhap gia :')
    let loai = input.question('1.Coffee\n2.Tea\n3. Nuoc ep\n4. Do an vat \nNhap loai tu 1-4 ?');
    let type = types[loai - 1]
    let moTa = input.question('Nhap mo ta :')
    let soLuong = +input.question('Nhap so luong :');
    let monAn = new MonAn(id, tenMon, gia, type, moTa, soLuong);
    main.add(monAn);
}

function edit() {
    let id1 = +input.question('Nhap id muon sua ?')
    let id2 = +input.question('Nhap id :')
    let tenMon = input.question('Nhap ten mon :')
    let gia = +input.question('Nhap gia :')
    let loai = input.question('1.Coffee\n2.Tea\n3. Nuoc ep\n4. Do an vat \nNhap loai tu 1-4 ?');
    let type = types[loai - 1]
    let moTa = input.question('Nhap mo ta :')
    let soLuong = +input.question('Nhap so luong :');
    let monAn = new MonAn(id2, tenMon, gia, type, moTa, soLuong);
    main.edit(id1, monAn)

}

let menu = `
1. Hien thi danh sach mon an .
2. Them mon an theo ma
3. Sua mon an
4. Xoa mon an theo ma
5. Tim mon an theo ten 
6. Hien cac loai, chon va hien ra ten mon an
7. Sap xep theo gia tang dan
8. Hien cac loai va chon, xoa het
9. Thoat ^^`

let exit = false;
while (!exit) {
    console.log(menu);
    let choice = +input.question('Nhap lua chon ?')
    switch (choice) {
        case 1:
            main.show()
            break;
        case 2:
            add();
            main.show()
            break;
        case 3:
            edit();
            main.show()
            break;
        case 4:
            let id = +input.question('Nhap id muon xoa :')
            main.remove(id);
            main.show()
            break;
        case 5:
            let monAn= input.question('Nhap ten mon an can tim ?');
            main.search(monAn)
            break;
        case 6:
            let loai = input.question('1.Coffee\n2.Tea\n3. Nuoc ep\n4. Do an vat \nNhap loai tu 1-4 ?');
            let type = types[loai - 1];
            main.type(type)
            break;
        case 7:
            main.sortGia();
            break;
        case 8:
            let loai1 = input.question('1.Coffee\n2.Tea\n3. Nuoc ep\n4. Do an vat \nNhap loai tu 1-4 ?');
            let type1 = types[loai1 - 1];
            main.allType(type1);
            main.show()
            break;
        case 9:
            exit= true;
            break;


    }

}