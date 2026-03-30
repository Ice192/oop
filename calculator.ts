class nomor{
    angka1: number;
    angka2: number;

    constructor(angka1: number, angka2: number){
        this.angka1= angka1
        this.angka2= angka2
    }   
}

class kalkulasi extends nomor{
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

const inpNomor = new kalkulasi(4, 8)

const tambah = inpNomor.hasilTambah()
const kurang = inpNomor.hasilKurang()
const bagi = inpNomor.hasilBagi()
const kali = inpNomor.hasilKali()



console.log("==== Kalkulasi Sederhana ====")
console.log(`Angka pertama = ${inpNomor.angka1}`)
console.log(`Angka kedua = ${inpNomor.angka2}`)
console.log(`Hasil tambah adalah ${tambah}`)
console.log(`Hasil kurang adalah ${kurang}`)
console.log(`Hasil kali adalah ${kali}`)
console.log(`Hasil bagi adalah ${bagi}`)


