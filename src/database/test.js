const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  //Insert data on the TABLE
  await saveOrphanage(db, {
      lat: "-27.2280416",
      lng: "-49.6758861",
      name: "Lar dos meninos",
      about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
      whatsapp: "128340203",
      images: [
        "https://images.unsplash.com/photo-1596443686812-2f45229eebc3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  
        "https://images.unsplash.com/photo-1597553161987-5993dc9da24e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
      ].toString(),
      instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
      opening_hours: "Horário de visitas das 18h as 8h",
      open_on_weekends: "0"
  
    })

  //Consulte the table's data
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  //Consulte just one orphanage using 
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
  console.log(orphanage)


  //Delete table data
  /*console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
  console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'))*/
})