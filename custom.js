const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-form-area');
    loginArea.style.display ="none";
const bankAsia = document.querySelector('.bank-info');
    bankAsia.style.display="block";
})

const makeDiposite = document.querySelector('#makeDiposite');
makeDiposite.addEventListener('click', function(){
    const dipoInputValue = parseFloat(document.querySelector('#addDiposite').value);
    const dipoAmount = parseFloat(document.querySelector('#diposite-amount').innerText);
  
    const totalDipo = dipoInputValue + dipoAmount;
    document.querySelector('#diposite-amount').innerText = totalDipo;
    document.querySelector('#addDiposite').value = "";

    const balanceWithDipo = parseFloat(document.querySelector('#balance-amount').innerText);
    document.querySelector('#balance-amount').innerText = balanceWithDipo + totalDipo;
    
})

const withdrow = document.querySelector('#addWithdrow');
withdrow.addEventListener('click', function(){
    const withdrowValue = parseFloat(document.querySelector('#withdrowValue').value);
    const withdrowAmount = parseFloat(document.querySelector('#withdrow-amount').innerText);
    document.querySelector('#withdrow-amount').innerText= withdrowValue + withdrowAmount;
    document.querySelector('#withdrowValue').value = "";
    const totalBalance = parseFloat(document.querySelector('#balance-amount').innerText);
    document.querySelector('#balance-amount').innerText = totalBalance - withdrowValue;
})

