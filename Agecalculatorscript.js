function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const resultElement = document.getElementById('result');

    // Validate inputs
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
        resultElement.textContent = 'Invalid date!';
        return;
    }

    // Calculate age
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        resultElement.textContent = `You are ${age - 1} years old.`;
    } else {
        resultElement.textContent = `You are ${age} years old.`;
    }
}