function instructorWithLongestName(instructors) {
  let highest = instructors[0];
  for(let instructor of instructors){
    if (instructor.name.length > highest.name.length){
      highest = instructor;
    }
  }
  return highest;
};
  
  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));
  