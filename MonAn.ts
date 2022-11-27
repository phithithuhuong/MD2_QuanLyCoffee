
export class MonAn {
    private _id: number
    private _tenMon: string;
    private _gia: number;
    private _loai: string;
    private _moTa: string;
    private _soLuong: number;


    constructor(id: number, tenMon: string, gia: number, loai: string, moTa: string, soLuong: number) {
        this._id = id
        this._tenMon = tenMon;
        this._gia = gia;
        this._loai = loai;
        this._moTa = moTa;
        this._soLuong = soLuong;

    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get tenMon(): string {
        return this._tenMon;
    }

    set tenMon(value: string) {
        this._tenMon = value;
    }

    get gia(): number {
        return this._gia;
    }

    set gia(value: number) {
        this._gia = value;
    }

    get loai(): string {
        return this._loai;
    }

    set loai(value: string) {
        this._loai = value;
    }

    get moTa(): string {
        return this._moTa;
    }

    set moTa(value: string) {
        this._moTa = value;
    }

    get soLuong(): number {
        return this._soLuong;
    }

    set soLuong(value: number) {
        this._soLuong = value;
    }
};


