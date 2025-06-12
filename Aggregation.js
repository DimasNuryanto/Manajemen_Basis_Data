db.Mahasiswa.aggregate([
  {
    $group: {
      _id: "$mataKuliah",
      rataRataNilai: { $avg: "$nilai" },
      totalMahasiswa: { $sum: 1 }
    }
  }
]);
