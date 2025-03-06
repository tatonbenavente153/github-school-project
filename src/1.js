// Generate a random number between 1 and 100
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Get a random student from the class list
function getRandomStudent() {
  const students = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const studentIndex = Math.floor(Math.random() * students.length);
  return students[studentIndex];
}

// Get a random classroom from the list of classrooms
function getRandomClassroom() {
  const classrooms = ["1A", "1B", "2A", "2B", "3A", "3B"];
  const classroomIndex = Math.floor(Math.random() * classrooms.length);
  return classrooms[classroomIndex];
}
