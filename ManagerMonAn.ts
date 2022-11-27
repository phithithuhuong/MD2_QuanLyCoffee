import {MonAn} from "./MonAn";

export class ManagerMonAn {
    listMonAn: MonAn[] = [];

    add(monAn: MonAn) {
        this.listMonAn.push(monAn)
    }

    show() {
        console.table(this.listMonAn)

    }

    index(id) {
        for (let i = 0; i < this.listMonAn.length; i++) {
            if (this.listMonAn[i].id === id) {
                return i
            }
        }

    }

    edit(id, monAn: MonAn) {
        for (let i = 0; i < this.listMonAn.length; i++) {
            if (this.listMonAn[i].id == id) {
                this.listMonAn[i] = monAn;

            }

        }
    }

    remove(id) {
        let index = this.index(id);
        for (let j = 0; j < this.listMonAn.length; j++) {
            if (this.listMonAn[j].id === id) {
                this.listMonAn.splice(index, 1)
            }

        }
        return "Try again  !"
    }

    search(monAn) {

        let arr = []
        for (let i = 0; i < this.listMonAn.length; i++) {
            if (this.listMonAn[i].tenMon.includes(monAn)) {
                arr.push(this.listMonAn[i])
            }

        }
        console.table(arr)

    }

    type(type) {
        let arr= [];
        for (let i = 0; i < this.listMonAn.length; i++) {
            if (this.listMonAn[i].loai.includes(type)){
                arr.push(this.listMonAn[i]);
            }

        }
        console.table(arr)
    };
    sortGia(){
        console.table( this.listMonAn.sort((a, b) => a.gia-b.gia))
    }
    allType(allType:string){
            this.listMonAn = this.listMonAn.filter(element => element.loai != allType)

    }


}