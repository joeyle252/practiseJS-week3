const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

  console.log(inventors.filter ((items)=> items.startsWith("A")));
  
  console.log(inventors.filter((items)=>items.includes('n')));

  function checkConsecutiveDuplication(e){
    const a = e.split("")
    // let check = false
     return a.slice(0,a.length-1).some((el,idx)=> a[idx]===a[idx+1])
    // return check
  }

//   console.log(inventors.filter(checkConsecutiveDuplication));

  console.log(inventors.filter(e => e.split("").slice(0,e.split("").length-1).some((el,idx)=> e.split("")[idx]===e.split("")[idx+1])))

  console.log(numbers.filter((items)=>items%2 == 1));
  
  console.log(numbers.filter((items)=>items>10));

  console.log(numbers.filter((items)=>items%2==0));

const inventors1 = inventors[index].split('');
console.log(inventors1);