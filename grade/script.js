
function calculateGrade() {
    const mark = parseFloat(document.getElementById('markInput').value);
  
    if (!isNaN(mark)) {
        let grade;
  
        if ( mark>=90 && mark<=100) {
            grade = 'S';
        } else if ( mark>=80 && mark<=90) {
            grade = 'A';
        } 
        
        
        else if ( mark>=70 && mark<=80) {
            grade = 'B';
        } 
        
        else if ( mark>=60 && mark<=70) {
            grade = 'C';
        } 
        
        else if ( mark>=50 && mark<=60) {
            grade = 'D';
        }
        
        else if(mark>= 35 && mark<=50){
  
          grade='E';
        }
        
        else {
            grade = 'FAIL';
        }
  
        document.getElementById('result').textContent = `The grade is  ${grade}`;
    } 
    else{ document.getElementById('result').textContent='invalid input.plese valid numbeical mark';}
}
  