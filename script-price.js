window.onload = function() {
  document.getElementsByClassName('agen1')[0].value = '6';
  document.getElementsByClassName('agen1')[1].value = '6';
  document.getElementsByClassName('agen1')[2].value = '6';
  document.getElementsByClassName('agen1')[3].value = '3';
  document.getElementsByClassName('agen1')[4].value = '3';
  }

function priceReseller1() {
  let ss = 99000;
  let ws = 99000;
  let cc = 99000;
  let no = 50000;
  let lc = 66000;

  let priceSs = document.getElementsByClassName("agen1")[0].value * ss;
  let priceWs = document.getElementsByClassName("agen1")[1].value * ws;
  let priceCc = document.getElementsByClassName("agen1")[2].value * cc;
  let priceNo = document.getElementsByClassName("agen1")[3].value * no;
  let priceLc = document.getElementsByClassName("agen1")[4].value * lc;

  let totalPrice = priceSs + priceWs + priceCc + priceNo + priceLc;
  let totalDisc = totalPrice * 0.9;
  //console.log(totalPrice);
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  let maxQty = 24;

  let qtySs = parseInt(document.getElementsByClassName("agen1")[0].value);
  let qtyWs = parseInt(document.getElementsByClassName("agen1")[1].value);
  let qtyCc = parseInt(document.getElementsByClassName("agen1")[2].value);
  let qtyNo = parseInt(document.getElementsByClassName("agen1")[3].value);
  let qtyLc = parseInt(document.getElementsByClassName("agen1")[4].value);

  let totalQty = qtySs + qtyWs + qtyCc + qtyNo + qtyLc;

  console.log(totalQty);
  
  if (totalQty < maxQty) {
    document.getElementById("message-kuota").style.visibility = "visible";
    document.getElementById("message-kuota").innerHTML = "Quantity Minimal Paket belum Terpenuhi";
    document.getElementById("btnReseller").style.visibility = "hidden";
  } else {
    document.getElementById("message-kuota").style.visibility = "hidden";
    document.getElementById("btnReseller").style.visibility = "visible";
  }

  document.getElementById("totalReseller").innerHTML = rupiah(totalDisc);
  document.querySelector('input[name="TotalPriceReseller"]').value = totalDisc;
}

let maxQty = 24;

let qtySs = parseInt(document.getElementsByClassName("agen1")[0].value);
let qtyWs = parseInt(document.getElementsByClassName("agen1")[1].value);
let qtyCc = parseInt(document.getElementsByClassName("agen1")[2].value);
let qtyNo = parseInt(document.getElementsByClassName("agen1")[3].value);
let qtyLc = parseInt(document.getElementsByClassName("agen1")[4].value);

let totalQty = qtySs + qtyWs + qtyCc + qtyNo + qtyLc;



if (totalQty < maxQty) {
  document.getElementById("message-kuota").style.visibility = "visible";
  document.getElementById("message-kuota").innerHTML = "Quantity Minimal Paket belum Terpenuhi";
  document.getElementById("btnReseller").style.visibility = "hidden";
} else {
  document.getElementById("message-kuota").style.visibility = "hidden";
    document.getElementById("btnReseller").style.visibility = "visible";
}

// $(document).ready(function() {

//   //iterate through each textboxes and add keyup
//   //handler to trigger sum event
//   $(".agen1").each(function() {

//     $(this).click(function() {
//       calculateSum();
//     });
//   });
// });

// function calculateSum() {

//   var sum = 0;
//   //iterate through each textboxes and add the values
//   $(".agen1").each(function() {

//     //add only if the value is number
//     if (!isNaN(this.value) && this.value.length != 0) {
//       sum += parseFloat(this.value);
//     }

//   });
//   //.toFixed() method will roundoff the final sum to 2 decimal places
//   $("#price").html(sum.toFixed(2));
// }
