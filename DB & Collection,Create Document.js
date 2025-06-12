const database = 'Akademik';
const collection = 'Mahasiswa';

use(database);

if (!db.getCollectionNames().includes(collection)) {
  db.createCollection(collection);
}

db[collection].insertMany([
  { nama: "Ahmad Faiz", nim: "D0222010", semester: 4, mataKuliah: "Algoritma", nilai: 85, kelas: "B" },
  { nama: "Siti Nurhaliza", nim: "D0222011", semester: 4, mataKuliah: "Basis Data", nilai: 90, kelas: "B" },
  { nama: "Rizky Maulana", nim: "D0222012", semester: 4, mataKuliah: "PBO", nilai: 78, kelas: "B" }
]);
