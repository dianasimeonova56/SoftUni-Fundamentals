function bonusScoringSystem(input) {
    let students = Number(input.shift());
    let totalLectures = Number(input.shift());
    let additinalBonus = Number(input.shift());
    let maxBonus = 0;
    let topStudent = 0;

    for (let i = 0; i < students; i++) {
        let studentAttendances = input[i];
        let bonus = studentAttendances / totalLectures * (5 + additinalBonus);
        if (bonus > maxBonus) {
            topStudent = studentAttendances;
            maxBonus = bonus;
        }
    } 
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${topStudent} lectures.`)


} bonusScoringSystem(
    [
        '10', '30', '14', '8',
        '23', '27', '28', '15',
        '17', '25', '26', '5',
        '18'
      ]
      

)