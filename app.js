// obyektler
const students=[
        {
            id:1,
            name: "sevinc",
            surname: "esedova",
            age: 24,
            phone:["051-505-95-56","060-505-95-56"],
            bal:91,
          
            
        },
        {
            id:2,
            name: "pusta",
            surname: "zeynalova",
            age: 23,
            phone:["051-505-95-57","060-505-95-57"],
            bal:91,
            
    },
      {
            id:3,
            name: "Aynur",
            surname: "Necefova",
            age: 23,
            phone:["051-505-95-57","060-505-95-57"],
            bal:85,
            
      },
      {
            id:4,
            name: "Minaye",
            surname: "Memmedova",
            age: 23,
            phone:["051-505-95-57","060-505-95-57"],
            bal: 80,
           
  },           
    ]
    console.log(students)
    const bal=students.map((x)=> x.bal);
    let ortalama=0;
    bal.forEach(y=>{ortalama+=y})
    console.log(`telebelerin ortalamsi ${ortalama/4}`)
students.map((x)=>{if (x.bal>90){console.log(`${x.name} ${x.surname}`)}})