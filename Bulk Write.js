db.Mahasiswa.bulkWrite([
  {
    insertOne: {
      document: { nama: "Dewi Lestari", nim: "D0222013", semester: 4, mataKuliah: "Algoritma", nilai: 92, kelas: "B" }
    }
  },
  {
    updateOne: {
      filter: { nim: "D0222011" },
      update: { $set: { nilai: 95 } }
    }
  },
  {
    deleteOne: {
      filter: { nim: "D0222010" }
    }
  }
]);
