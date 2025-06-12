db.Mahasiswa.find({
  $or: [
    { nilai: { $gte: 80 } },
    { mataKuliah: "Algoritma" }
  ]
});
