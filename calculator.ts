class Nomor{
     angka1: number;
     angka2: number;

    constructor(angka1: number, angka2: number){
        this.angka1= angka1
        this.angka2= angka2
    }   
}

class Kalkulasi extends Nomor{
    
    hasilTambah() {
        return this.angka1 + this.angka2
    }
    hasilKurang() {
        return this.angka1 - this.angka2
    }
    hasilKali() {
        return this.angka1 * this.angka2
    }
    hasilBagi() {
        return this.angka1 / this.angka2
    }
}

class PersegiPanjang {
    panjang: number
    lebar: number

    constructor(panjang:number, lebar:number){
        this.panjang = panjang
        this.lebar = lebar
    }

    keliling(){
        return 2 * (this.panjang + this.lebar)
    }

    luas(){
        return this.panjang * this.lebar
    }
}

class Segitiga {
    alas: number
    tinggi: number
    sisiKiri: number
    sisiKanan: number

    constructor (
        alas: number,
        tinggi: number,
        sisiKiri: number,
        sisiKanan: number
    ) {
        this.alas = alas
        this.tinggi = tinggi
        this.sisiKiri = sisiKiri
        this.sisiKanan = sisiKanan
    }

    
    luas(){
        let hasil = 0.5 * this.alas * this.tinggi
        return Math.round(hasil)
    }

    keliling(){
        return this.alas + this.sisiKanan + this.sisiKiri
    }

}

class Lingkaran {
    r: number

    constructor (r: number){
        this.r = r
    }

    luas() {
        let hasil = Math.PI * this.r * this.r
        return Math.round(hasil)
    }

    keliling() {
        let hasil = 2 * Math.PI * this.r
        return Math.round(hasil)
    }
}

// const inpNomor = new Kalkulasi(8, 8)

// const tambah = inpNomor.hasilTambah()
// const kurang = inpNomor.hasilKurang()
// const bagi = inpNomor.hasilBagi()
// const kali = inpNomor.hasilKali()


// Untuk menghitung perjumlahan, pengurangan , perkalian, dan pembagian
// console.log("==== Kalkulasi Sederhana ====")
// console.log(`Angka pertama = ${inpNomor.angka1}`)
// console.log(`Angka kedua = ${inpNomor.angka2}`)
// console.log(`Hasil tambah adalah ${tambah}`)
// console.log(`Hasil kurang adalah ${kurang}`)
// console.log(`Hasil kali adalah ${kali}`)
// console.log(`Hasil bagi adalah ${bagi}`)

//Segitiga
const segitiga = new Segitiga(5, 4, 6, 2)

const hasilKelilingSegitiga = segitiga.keliling()
const hasilLuasSegitiga = segitiga.luas()
console.log(`Keliling segitiga = ${hasilKelilingSegitiga}`)
console.log(`Luas segitiga = ${hasilLuasSegitiga}`)

// console.log("==== Kalkulasi Segitiga====")
// console.log(`Alas = ${segitiga.alas}`)
// console.log(`Tinggi = ${segitiga.tinggi}`)
// console.log(`Sisi Kanan = ${segitiga.sisiKanan}`)
// console.log(`Sisi Kiri = ${segitiga.sisiKiri}`)

//Persegi Panjang
const persegiPanjang = new PersegiPanjang(4, 7)

const kelilingPersegiPanjang = persegiPanjang.keliling()
const luasPersegiPanjang = persegiPanjang.luas()

console.log(`Keliling Persegi Panjang = ${kelilingPersegiPanjang}`)
console.log(`Luas Persegi Panjang = ${luasPersegiPanjang}`)

//Lingkaran
const lingkaran = new Lingkaran(5)

const kelilingLingkaran = lingkaran.keliling()
const LuasLingkaran = lingkaran.luas()

console.log(`Keliling Lingkaran = ${kelilingLingkaran}`)
console.log(`Luas Lingkaran = ${LuasLingkaran}`)
