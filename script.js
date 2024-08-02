function calculateTotal(element) {
    const row = element.closest('tr');
    const theory = row.querySelector('.theory').value || 0;
    const practical = row.querySelector('.practical').value || 0;
    const total = parseFloat(theory) + parseFloat(practical);
    row.querySelector('.total').textContent = total;
  
    calculateGrandTotal();
  }
  
  function calculateGrandTotal() {
    let grandTotal = 0;
    let maxMarks = 0;
    let pass = true;
    const rows = document.querySelectorAll('.table2 tr');
    
    rows.forEach(row => {
      const totalCell = row.querySelector('.total');
      if (totalCell) {
        const total = parseFloat(totalCell.textContent);
        grandTotal += total;
        maxMarks += 100; // Assuming each subject has a max of 100 marks
        if (total < 40) { // Assuming pass mark is 40
          pass = false;
        }
      }
    });
  
    const percentage = (grandTotal / maxMarks) * 100;
    document.getElementById('grand-total').textContent = "GRAND TOTAL:"+grandTotal;
    document.getElementById('percentage').textContent = percentage.toFixed(2) + '%';
    document.getElementById('result').textContent = pass ? 'PASS' : 'FAIL';
    document.getElementById('grade').textContent = getGrade(percentage);
  }
  
  function getGrade(percentage) {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C+';
    if (percentage >= 40) return 'C';
    return 'F';
  }
  