db.createCollection("Mahasiswa", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "nim", "semester", "mataKuliah", "nilai", "kelas"],
      properties: {
        nama: { bsonType: "string" },
        nim: { bsonType: "string" },
        semester: { bsonType: "int", minimum: 1 },
        mataKuliah: { bsonType: "string" },
        nilai: { bsonType: "int", minimum: 0, maximum: 100 },
        kelas: { bsonType: "string" }
      }
    }
  }
});
