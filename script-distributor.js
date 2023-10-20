function priceDistributor() {
  let ss2 = 99000;
  let ws2 = 99000;
  let cc2 = 99000;
  let no2 = 50000;
  let lc2 = 66000;

  let priceSs2 = document.getElementsByClassName("distributor1")[0].value * ss2;
  let priceWs2 = document.getElementsByClassName("distributor1")[1].value * ws2;
  let priceCc2 = document.getElementsByClassName("distributor1")[2].value * cc2;
  let priceNo2 = document.getElementsByClassName("distributor1")[3].value * no2;
  let priceLc2 = document.getElementsByClassName("distributor1")[4].value * lc2;

  let totalPrice2 = priceSs2 + priceWs2 + priceCc2 + priceNo2 + priceLc2;
  let totalDisc2 = totalPrice2 * 0.85;
  //console.log(totalPrice2);
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  let minQty = 72;

  let qtySs2 = parseInt(document.getElementsByClassName("distributor1")[0].value);
  let qtyWs2 = parseInt(document.getElementsByClassName("distributor1")[1].value);
  let qtyCc2 = parseInt(document.getElementsByClassName("distributor1")[2].value);
  let qtyNo2 = parseInt(document.getElementsByClassName("distributor1")[3].value);
  let qtyLc2 = parseInt(document.getElementsByClassName("distributor1")[4].value);

  let totalQty2 = qtySs2 + qtyWs2 + qtyCc2 + qtyNo2 + qtyLc2;

  console.log(totalQty2);
  
  if (totalQty2 < minQty) {
    document.getElementById("message-kuota2").style.visibility = "visible";
    document.getElementById("message-kuota2").innerHTML = "Quantity Minimal Paket belum Terpenuhi";
    document.getElementById("btnDistributor").style.visibility = "hidden";
  } else {
    document.getElementById("message-kuota2").style.visibility = "hidden";
    document.getElementById("btnDistributor").style.visibility = "visible";
  }

  document.getElementById("totalDistributor").innerHTML = rupiah(totalDisc2);
  document.querySelector('input[name="TotalPriceDistributor"]').value = totalDisc2;
}

let minQty = 72;

let qtySs2 = parseInt(document.getElementsByClassName("distributor1")[0].value);
let qtyWs2 = parseInt(document.getElementsByClassName("distributor1")[1].value);
let qtyCc2 = parseInt(document.getElementsByClassName("distributor1")[2].value);
let qtyNo2 = parseInt(document.getElementsByClassName("distributor1")[3].value);
let qtyLc2 = parseInt(document.getElementsByClassName("distributor1")[4].value);

let totalQty2 = qtySs2 + qtyWs2 + qtyCc2 + qtyNo2 + qtyLc2;



if (totalQty2 < minQty) {
  document.getElementById("message-kuota2").style.visibility = "visible";
  document.getElementById("message-kuota2").innerHTML = "Quantity Minimal Paket belum Terpenuhi";
  document.getElementById("btnDistributor").style.visibility = "hidden";
} else {
  document.getElementById("message-kuota2").style.visibility = "hidden";
    document.getElementById("btnDistributor").style.visibility = "visible";
}

// $(document).ready(function() {

//   //iterate through each textboxes and add keyup
//   //handler to trigger sum event
//   $(".distributor1").each(function() {

//     $(this).click(function() {
//       calculateSum();
//     });
//   });
// });

// function calculateSum() {

//   var sum = 0;
//   //iterate through each textboxes and add the values
//   $(".distributor1").each(function() {

//     //add only if the value is number
//     if (!isNaN(this.value) && this.value.length != 0) {
//       sum += parseFloat(this.value);
//     }

//   });
//   //.toFixed() method will roundoff the final sum to 2 decimal places
//   $("#price").html(sum.toFixed(2));
// }
