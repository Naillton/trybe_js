type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
};

type Student = {
  name: string;
  disciplines: Discipline[];
};

const GRADE_DICT = {
  numbers: [0.9, 0.8, 0.7, 0.6, 0.1],
  letters: ['A', 'B', 'C', 'D', 'E'],
};

const getGradeLetter = (geraNumber: number): string => {
    const gradeNumbers = GRADE_DICT.numbers;
    const gradeLetters = GRADE_DICT.letters;
    for (let i = 0; i < gradeNumbers.length; i += 1) {
      if (geraNumber >= gradeNumbers[i]) return gradeLetters[i];
    }
    return 'F';
};

const getLetterGrades = (discipline: Discipline): Discipline => ({
  ...discipline,
  letterGrade: getGradeLetter(discipline.grade),
});

const porcentageGradesIntoLetters = (student: Student): Student => ({
  ...student,
  disciplines: student.disciplines.map(getLetterGrades),
});

const approvedStudents = ({ disciplines }: Student): boolean =>
  disciplines.every(
    ({ grade }) => grade > 0.7,
  );

const updateApprovalData = ({ name: studentName, disciplines }: Student): void => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);
  
  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setAprroved(students: Student[]): void {
  students
    .map(porcentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

export {
  porcentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setAprroved,
  getLetterGrades,
};