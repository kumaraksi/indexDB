function debounce(callback, time){
    let timeout;
  
    return function() {
      const functionCall = () => callback.apply(this, arguments);
      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    }
}

function formatCurrency(currency){
    if(currency){
        return Number.parseInt(currency).toLocaleString('en-IN',{style:'currency',currency:'INR'})
    }else{
        return 'N/A'
    }
}

function showLoader(){
    document.getElementById('loader').classList.add('show')
}

function hideLoader(){
    setTimeout(()=>{
        document.getElementById('loader').classList.remove('show')
    },1000)
}

export {
    debounce,
    formatCurrency,
    showLoader,
    hideLoader
}