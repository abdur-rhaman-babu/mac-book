// find element
const extraMemory1 = document.getElementById('extra-memory1')
const extraMemory2 = document.getElementById('extra-memory2')

const firstSsd = document.getElementById('first-ssd')
const secondSsd = document.getElementById('second-ssd')

const ssd = document.getElementById('ssd')
const fastDelivery = document.getElementById('fast-delivery')
const lateDelivery = document.getElementById('late-delivery')

const totalPrice = document.getElementById('total-price')

// getExtraMomery
const getExtraMemory = (getValue, isCost) =>{
    const getInnerText = document.getElementById(getValue)
    // const previousCost = totalPrice.innerText;
    // console.log(previousCost)
    // const extraMemoryCost = getInnerText.innerText; 
    // console.log(extraMemoryCost)
    if( isCost === true){
        getInnerText.innerText = 0;
    }else{
        getInnerText.innerText = 180;
    }

    const previousPrice = totalPrice.innerText;
    const currentPrice = getInnerText.innerText;
    
    const totalPrices = parseFloat(previousPrice) + parseFloat(currentPrice);
    totalPrice.innerText = totalPrices;
}

// getExtraStorage
const getExtraStorage = (getValue, isCost) =>{
    const getInnerText = document.getElementById(getValue)

    if( isCost === 'first'){
        getInnerText.innerText = 50;
    }else if (isCost === 'second'){
        getInnerText.innerText = 100;
    }else if(isCost === 'third'){
        getInnerText.innerText = 0;
    }

}

// getDeliveryCharge
const getDeliveryCharge = (getValue, isFree) =>{
    const getInnerText = document.getElementById(getValue)

    if( isFree === true){
        getInnerText.innerText = 20
    }else{
        getInnerText.innerText = 0
    }

}

// getExtraMemoryButton
extraMemory1.addEventListener('click', ()=>{
    getExtraMemory('memory-text', true)
})

extraMemory2.addEventListener('click', ()=>{
    getExtraMemory('memory-text',false)
})

// getExtraStorage
firstSsd.addEventListener('click', ()=>{
    getExtraStorage('storage-text','first')
})

secondSsd.addEventListener('click', ()=>{
    getExtraStorage('storage-text','second')
})

ssd.addEventListener('click', ()=>{
    getExtraStorage('storage-text','third')
})

// getDeliveryCharge
fastDelivery.addEventListener('click', ()=>{
    getDeliveryCharge('delivery-charge',false)
})

lateDelivery.addEventListener('click', ()=>{
    getDeliveryCharge('delivery-charge',true)
})




