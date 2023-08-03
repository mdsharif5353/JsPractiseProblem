// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.


const myName = "Abir";
const myTotalScore = 85;
const friends = [
  { name: "Tom", totalScore: 66 },
  { name: "Jane", totalScore: 95 },
  { name: "Peter", totalScore: 56 },
  { name: "John", totalScore: 40 }
];

function getGrade(score) {
  if (score >= 80) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else if (score >= 40) {
    return "D";
  } else {
    return "F";
  }
}

const myGrade = getGrade(myTotalScore);
console.log(`${myName}'s grade: ${myGrade}`);

for (const friend of friends) {
  const friendGrade = getGrade(friend.totalScore);
  console.log(`${friend.name}'s grade: ${friendGrade}`);
}
