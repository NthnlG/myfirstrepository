let numItemsInput = document.getElementById("num_items");
let shippingFeeInput = document.getElementById("shipping_fee");
let numItemsSummary = document.getElementById("num_items_summary");
let shippingFeeSummary = document.getElementById("shipping_fee_summary");
let totalBeforeTaxSpan = document.getElementById("total_before_tax");
let estimatedTaxSpan = document.getElementById("estimated_tax");
let totalOrderSpan = document.getElementById("total_order");
let summaryDiv = document.getElementById("summary");
    
function increment() {
    let currentValue = parseInt(numItemsInput.value);
    numItemsInput.value = currentValue + 1;
    }
    
function decrement() {
    let currentValue = parseInt(numItemsInput.value);
        if (currentValue > 0) {
            numItemsInput.value = currentValue - 1;
        }
    }
    
function calculateTotal() {
    let numItems = parseInt(numItemsInput.value);
    let shippingFee = parseFloat(shippingFeeInput.value);
    let totalBeforeTax = numItems * 15.97 + shippingFee;
    let estimatedTax = Math.round(totalBeforeTax * 0.1);
    let totalOrder = totalBeforeTax + estimatedTax;
    numItemsSummary.textContent = numItems;
    shippingFeeSummary.textContent = "$" + shippingFee.toFixed(2);
    totalBeforeTaxSpan.textContent = "$" + totalBeforeTax.toFixed(2);
    estimatedTaxSpan.textContent = "$" + estimatedTax.toFixed(2);
    totalOrderSpan.textContent = "$" + totalOrder.toFixed(2);
    summaryDiv.style.display = "block";
    }