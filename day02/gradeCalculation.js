function studentGrade(score)
{
    switch(true)
    {
        case (score>=90 && score<=100):
            console.log("Grade A");
            break;
        case (score>=80 && score<=90):
            console.log("Grade B");
            break;
        case (score>=60 && score<=80):
            console.log("Grade C")
            break;
        case (score>=35 && score<=60):
            console.log("Grade D")
            break;
        case (score>=0 && score<=35):
            console.log("Grade F")
            break;
        default:
            console.log("Invalid Data")
    }
}
let studentScore = 90
studentGrade(studentScore);