// listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    
    // hide results
    document.getElementById('results').style.display = 'none';
    
    // display the loader GIF...
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults, 2000); 


    e.preventDefault();
});


// func - calculate results
function calculateResults(){
    console.log('Calculating...');

    // ui vars (input)...
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    // console.log(amount.value);
    // console.log(interest.value);
    // console.log(years.value);

    // // ui vars (output)...
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // // calculation vars...
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;

    // console.log(principal);
    // console.log(calculatedInterest);
    // console.log(calculatedPayment);

    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal * x * calculatedInterest)/(x-1);

    // console.log(isFinite(monthly));

    // validation
    if (isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2);
        
        // show results and loading GIF...
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';

    } else {
        
        showError('Please check your numbers...');
    }

}

 // showError
 function showError(error){
     
    // hide  results and loading GIF...
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none';

    // insert error div into DOM

    const errorDiv = document.createElement('div');
     
    // insertion point...
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // create content
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error)); 

    card.insertBefore(errorDiv, heading);

    // clear error after 3sec.
    setTimeout(clearError, 3000); 

 }

 // clearError
function clearError(){
    document.querySelector('.alert').remove();
}