function chooseFacture(){
  var facture = document.getElementById("facture");
  var producerSelect = document.getElementById("producer");
  var colorSelect = document.getElementById("colour");

  var facture1 = "<select name='producer' class='producer' onchange='chooseProducer()'>\
	  				<option value=''>--Выбрать--</option>\
	                <option value='выберите цвет'>MSD Classic Китай</option>\
	                <option value='выберите цвет'>MSD Evolution Китай</option>\
	                <option value='выберите цвет'>Pongs Германия</option>\
                </select>";
  var facture2 = "<select name='producer' class='producer' onchange='chooseProducer()'>\
	 				<option value=''>--Выбрать--</option>\
	                <option value='выберите цвет'>Descor Германия</option>\
	                <option value='выберите цвет'>Clipso Франция</option>\
	                <option value='выберите цвет'>Cerutti Швейцария</option>\
                </select>";
  var color1 = "<select name='colour' class='colour' onchange='chooseColour()'>\
  	 				<option value=''>--Выбрать--</option>\
                    <option value='0'>Белый</option>\
                    <option value='1'>Цветной</option>\
                    <option value='2'>Фотопечать</option>\
                </select>";
  var color2 = "<select name='colour' class='colour' onchange='chooseColour()'>\
  	 				<option value=''>--Выбрать--</option>\
                    <option value='0'>Белый</option>\
                    <option value='1'>Цветной</option>\
                    <option value='2'>Фотопечать</option>\
                </select>";

  if(facture.value == 1){
  	producerSelect.innerHTML = facture1;
  	colorSelect.innerHTML = color1;
  }else if (facture.value == 2) {
  	producerSelect.innerHTML = facture2;
  	colorSelect.innerHTML = color2;
  }else{
  	producerSelect.innerHTML = "<div>сначала выберите фактуру</div>";
  	colorSelect.innerHTML = "<div>сначала выберите производителя</div>";
  }
    document.getElementById("basePrice").innerHTML = "Выберите: <span class='red'>производителя и цвет</span>";
    document.getElementsByClassName("producer")[1].innerHTML = "--<span class='red'>выберите производителя</span>--";
    document.getElementsByClassName("price")[0].innerHTML = "--<span class='red'>выберите производителя</span>--";
    document.getElementsByClassName("price")[1].innerHTML = 0;
    document.getElementsByClassName("price")[2].innerHTML = 0;
    document.getElementsByClassName("qtyty")[0].innerHTML = "--<span class='red'>укажите размеры</span>--";
    document.getElementsByClassName("qtyty")[1].innerHTML = "--<span class='red'>укажите размеры</span>--";
    document.getElementsByClassName("qtyty")[2].innerHTML = "--<span class='red'>укажите размеры</span>--";
    document.getElementById("roomLength").value = 1;
    document.getElementById("roomWidth").value = 1;
    document.getElementById("finalPrice").innerHTML = "<span class='red'>--</span>";

}

function chooseProducer(){
  var producer = document.getElementsByClassName("producer")[0];
  document.getElementsByClassName("producer")[1].innerHTML = producer.options[producer.selectedIndex].text;
  document.getElementsByClassName("price")[0].innerHTML = "--<span class='red'>Выберите: цвет</span>--";
  document.getElementsByClassName("price")[1].innerHTML = 0;
  document.getElementsByClassName("price")[2].innerHTML = 0;
  document.getElementById("basePrice").innerHTML = "<span class='red'>выберите цвет</span>";
  document.getElementsByClassName("colour")[0].selectedIndex = 0;
  document.getElementsByClassName("qtyty")[0].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty")[1].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty")[2].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementById("roomLength").value = 1;
  document.getElementById("roomWidth").value = 1;
  document.getElementById("finalPrice").innerHTML = "<span class='red'>--</span>";

}
  var priceC = {
    "MSD Classic Китай":['240','290','2400'],
    "MSD Evolution Китай":['310','360','2400'],
    "Pongs Германия":['740','810','2400'],
    "Descor Германия":['860','1300','3200'],
    "Clipso Франция":['1640','2100','3200'],
    "Cerutti Швейцария":['2500','3100','4000']
  }
function chooseColour(){
	var colour = document.getElementsByClassName("colour")[0];

	document.getElementsByClassName("price")[0].innerHTML = priceC[document.getElementsByClassName("producer")[0].options[document.getElementsByClassName("producer")[0].selectedIndex].text][colour.value];
	document.getElementsByClassName("price")[1].innerHTML = 0;
  document.getElementsByClassName("price")[2].innerHTML = 0;
  document.getElementById("basePrice").innerHTML = document.getElementsByClassName("price")[0].innerHTML * 1 + 4*140 + 4*110;
  document.getElementsByClassName("qtyty")[0].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty")[1].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty")[2].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementById("roomLength").value = 1;
  document.getElementById("roomWidth").value = 1;
  document.getElementById("finalPrice").innerHTML = "<span class='red'>--</span>";
  // document.getElementsByClassName("sumamount")[0].innerHTML = document.getElementById("finalPrice").innerHTML;

}

function change(){
var squareRoom = document.getElementById("roomLength").value * document.getElementById("roomWidth").value;
document.getElementsByClassName("qtyty")[0].innerHTML = Math.ceil(squareRoom);
document.getElementsByClassName("price")[0].innerHTML = Math.ceil(squareRoom) * parseInt(priceC[document.getElementsByClassName("producer")[0].options[document.getElementsByClassName("producer")[0].selectedIndex].text][document.getElementsByClassName("colour")[0].value]);
var perimetrRoom = 2*(+document.getElementById("roomLength").value + +document.getElementById("roomWidth").value);
document.getElementsByClassName("qtyty")[1].innerHTML = Math.ceil(perimetrRoom);
document.getElementsByClassName("price")[1].innerHTML = 140 * Math.ceil(perimetrRoom);

document.getElementsByClassName("qtyty")[2].innerHTML = Math.ceil(perimetrRoom);
document.getElementsByClassName("price")[2].innerHTML = 110 * Math.ceil(perimetrRoom);
document.getElementById("finalPrice").innerHTML = parseInt(document.getElementsByClassName("price")[0].innerHTML) + parseInt(document.getElementsByClassName("price")[1].innerHTML) + parseInt(document.getElementsByClassName("price")[2].innerHTML) + parseInt(document.getElementsByClassName("price")[3].innerHTML) + parseInt(document.getElementsByClassName("price")[4].innerHTML) + parseInt(document.getElementsByClassName("price")[5].innerHTML) + parseInt(document.getElementsByClassName("price")[6].innerHTML);

// document.getElementsByClassName("sumamount")[0].innerHTML = document.getElementById("finalPrice").innerHTML;
// document.getElementById("sumamount").setAttribute("max",document.getElementById("finalPrice").innerHTML);
// document.getElementById("sumamount").setAttribute("value",document.getElementById("finalPrice").innerHTML);
// document.getElementsByClassName("sumamount")[1].innerHTML = 0 + " -- " + document.getElementById("finalPrice").innerHTML + " ₽";
var monthRata = document.getElementById("finalPrice").innerHTML /document.getElementById("monthamount").value
document.getElementById("generalPrice").innerHTML = Math.round(monthRata);
}

function change2(classnumber,id){
  var array = ['','','','150','200','400','560'];
document.getElementsByClassName("qtyty")[classnumber].innerHTML = document.getElementById(id).value;
document.getElementsByClassName("price")[classnumber].innerHTML = document.getElementsByClassName("qtyty")[classnumber].innerHTML * array[classnumber];
document.getElementById("finalPrice").innerHTML = parseInt(document.getElementsByClassName("price")[0].innerHTML) + parseInt(document.getElementsByClassName("price")[1].innerHTML) + parseInt(document.getElementsByClassName("price")[2].innerHTML) + parseInt(document.getElementsByClassName("price")[3].innerHTML) + parseInt(document.getElementsByClassName("price")[4].innerHTML) + parseInt(document.getElementsByClassName("price")[5].innerHTML) + parseInt(document.getElementsByClassName("price")[6].innerHTML);
// document.getElementsByClassName("sumamount")[0].innerHTML = document.getElementById("finalPrice").innerHTML;

// document.getElementById("sumamount").setAttribute("max",document.getElementById("finalPrice").innerHTML);
// document.getElementById("sumamount").setAttribute("value",document.getElementById("finalPrice").innerHTML);
// document.getElementsByClassName("sumamount")[1].innerHTML = 0 + " -- " + document.getElementById("finalPrice").innerHTML + " ₽";
var monthRata = document.getElementById("finalPrice").innerHTML /document.getElementById("monthamount").value
document.getElementById("generalPrice").innerHTML = Math.round(monthRata);
}
function change3(span,id){
document.getElementsByClassName(span)[0].innerHTML = document.getElementById(id).value;

var monthRata = document.getElementById("finalPrice").innerHTML /document.getElementById("monthamount").value
document.getElementById("generalPrice").innerHTML = Math.round(monthRata);
}


// function buy(){
//   var v = document.getElementById("finalPrice").innerHTML;
//   Cookies.set("finalPrice", v);
// }
// ==> 2 <==

function chooseFacture2(){
  var facture = document.getElementById("facture2");
  var producerSelect = document.getElementById("producer2");
  var colorSelect = document.getElementById("colour2");

  var facture1 = "<select name='producer2' class='producer2' onchange='chooseProducer2()'>\
            <option value=''>--Выбрать--</option>\
                  <option value='выберите цвет'>MSD Classic Китай</option>\
                  <option value='выберите цвет'>MSD Evolution Китай</option>\
                  <option value='выберите цвет'>Pongs Германия</option>\
                </select>";
  var facture2 = "<select name='producer2' class='producer2' onchange='chooseProducer2()'>\
          <option value=''>--Выбрать--</option>\
                  <option value='выберите цвет'>Descor Германия</option>\
                  <option value='выберите цвет'>Clipso Франция</option>\
                  <option value='выберите цвет'>Cerutti Швейцария</option>\
                </select>";
  var color1 = "<select name='colour2' class='colour2' onchange='chooseColour2()'>\
            <option value=''>--Выбрать--</option>\
                    <option value='0'>Белый</option>\
                    <option value='1'>Цветной</option>\
                    <option value='2'>Фотопечать</option>\
                </select>";
  var color2 = "<select name='colour2' class='colour2' onchange='chooseColour2()'>\
            <option value=''>--Выбрать--</option>\
                    <option value='0'>Белый</option>\
                    <option value='1'>Цветной</option>\
                    <option value='2'>Фотопечать</option>\
                </select>";

  if(facture.value == 1){
    producerSelect.innerHTML = facture1;
    colorSelect.innerHTML = color1;
  }else if (facture.value == 2) {
    producerSelect.innerHTML = facture2;
    colorSelect.innerHTML = color2;
  }else{
    producerSelect.innerHTML = "<div>сначала выберите фактуру</div>";
    colorSelect.innerHTML = "<div>сначала выберите производителя</div>";
  }
    document.getElementById("basePrice2").innerHTML = "Выберите: <span class='red'>производителя и цвет</span>";
    document.getElementsByClassName("producer2")[1].innerHTML = "--<span class='red'>выберите производителя</span>--";
    document.getElementsByClassName("price2")[0].innerHTML = "--<span class='red'>выберите производителя</span>--";
    document.getElementsByClassName("price2")[1].innerHTML = 0;
    document.getElementsByClassName("price2")[2].innerHTML = 0;
    document.getElementsByClassName("qtyty2")[0].innerHTML = "--<span class='red'>укажите размеры</span>--";
    document.getElementsByClassName("qtyty2")[1].innerHTML = "--<span class='red'>укажите размеры</span>--";
    document.getElementsByClassName("qtyty2")[2].innerHTML = "--<span class='red'>укажите размеры</span>--";
    document.getElementById("roomLength2").value = 1;
    document.getElementById("roomWidth2").value = 1;
    document.getElementById("finalPrice2").innerHTML = "<span class='red'>--</span>";

}

function chooseProducer2(){
  var producer = document.getElementsByClassName("producer2")[0];
  document.getElementsByClassName("producer2")[1].innerHTML = producer.options[producer.selectedIndex].text;
  document.getElementsByClassName("price2")[0].innerHTML = "--<span class='red'>Выберите: цвет</span>--";
  document.getElementsByClassName("price2")[1].innerHTML = 0;
  document.getElementsByClassName("price2")[2].innerHTML = 0;
  document.getElementById("basePrice2").innerHTML = "<span class='red'>выберите цвет</span>";
  document.getElementsByClassName("colour2")[0].selectedIndex = 0;
  document.getElementsByClassName("qtyty2")[0].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty2")[1].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty2")[2].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementById("roomLength2").value = 1;
  document.getElementById("roomWidth2").value = 1;
  document.getElementById("finalPrice2").innerHTML = "<span class='red'>--</span>";

}
  var priceC = {
    "MSD Classic Китай":['240','290','2400'],
    "MSD Evolution Китай":['310','360','2400'],
    "Pongs Германия":['740','810','2400'],
    "Descor Германия":['860','1300','3200'],
    "Clipso Франция":['1640','2100','3200'],
    "Cerutti Швейцария":['2500','3100','4000']
  }
function chooseColour2(){
  var colour = document.getElementsByClassName("colour2")[0];

  document.getElementsByClassName("price2")[0].innerHTML = priceC[document.getElementsByClassName("producer2")[0].options[document.getElementsByClassName("producer2")[0].selectedIndex].text][colour.value];
  document.getElementsByClassName("price2")[1].innerHTML = 0;
  document.getElementsByClassName("price2")[2].innerHTML = 0;
  document.getElementById("basePrice2").innerHTML = document.getElementsByClassName("price2")[0].innerHTML * 1 + 4*140 + 4*110;
  document.getElementsByClassName("qtyty2")[0].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty2")[1].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty2")[2].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementById("roomLength2").value = 1;
  document.getElementById("roomWidth2").value = 1;
  document.getElementById("finalPrice2").innerHTML = "<span class='red'>--</span>";
  // document.getElementsByClassName("sumamount")[0].innerHTML = document.getElementById("finalPrice").innerHTML;

}

function change2_1(){
var squareRoom = document.getElementById("roomLength2").value * document.getElementById("roomWidth2").value;
document.getElementsByClassName("qtyty2")[0].innerHTML = Math.ceil(squareRoom);
document.getElementsByClassName("price2")[0].innerHTML = Math.ceil(squareRoom) * parseInt(priceC[document.getElementsByClassName("producer2")[0].options[document.getElementsByClassName("producer2")[0].selectedIndex].text][document.getElementsByClassName("colour2")[0].value]);
var perimetrRoom = 2*(+document.getElementById("roomLength2").value + +document.getElementById("roomWidth2").value);
document.getElementsByClassName("qtyty2")[1].innerHTML = Math.ceil(perimetrRoom);
document.getElementsByClassName("price2")[1].innerHTML = 140 * Math.ceil(perimetrRoom);

document.getElementsByClassName("qtyty2")[2].innerHTML = Math.ceil(perimetrRoom);
document.getElementsByClassName("price2")[2].innerHTML = 110 * Math.ceil(perimetrRoom);
document.getElementById("finalPrice2").innerHTML = parseInt(document.getElementsByClassName("price2")[0].innerHTML) + parseInt(document.getElementsByClassName("price2")[1].innerHTML) + parseInt(document.getElementsByClassName("price2")[2].innerHTML) + parseInt(document.getElementsByClassName("price2")[3].innerHTML) + parseInt(document.getElementsByClassName("price2")[4].innerHTML) + parseInt(document.getElementsByClassName("price2")[5].innerHTML) + parseInt(document.getElementsByClassName("price2")[6].innerHTML);

// document.getElementsByClassName("sumamount")[0].innerHTML = document.getElementById("finalPrice").innerHTML;
// document.getElementById("sumamount").setAttribute("max",document.getElementById("finalPrice").innerHTML);
// document.getElementById("sumamount").setAttribute("value",document.getElementById("finalPrice").innerHTML);
// document.getElementsByClassName("sumamount")[1].innerHTML = 0 + " -- " + document.getElementById("finalPrice").innerHTML + " ₽";
var monthRata = document.getElementById("finalPrice").innerHTML /document.getElementById("monthamount").value
document.getElementById("generalPrice").innerHTML = Math.round(monthRata);
}

function change2_2(classnumber,id){
  var array = ['','','','150','200','400','560'];
document.getElementsByClassName("qtyty2")[classnumber].innerHTML = document.getElementById(id).value;
document.getElementsByClassName("price2")[classnumber].innerHTML = document.getElementsByClassName("qtyty2")[classnumber].innerHTML * array[classnumber];
document.getElementById("finalPrice2").innerHTML = parseInt(document.getElementsByClassName("price2")[0].innerHTML) + parseInt(document.getElementsByClassName("price2")[1].innerHTML) + parseInt(document.getElementsByClassName("price2")[2].innerHTML) + parseInt(document.getElementsByClassName("price2")[3].innerHTML) + parseInt(document.getElementsByClassName("price2")[4].innerHTML) + parseInt(document.getElementsByClassName("price2")[5].innerHTML) + parseInt(document.getElementsByClassName("price2")[6].innerHTML);
// document.getElementsByClassName("sumamount")[0].innerHTML = document.getElementById("finalPrice").innerHTML;

// document.getElementById("sumamount").setAttribute("max",document.getElementById("finalPrice").innerHTML);
// document.getElementById("sumamount").setAttribute("value",document.getElementById("finalPrice").innerHTML);
// document.getElementsByClassName("sumamount")[1].innerHTML = 0 + " -- " + document.getElementById("finalPrice").innerHTML + " ₽";
var monthRata = document.getElementById("finalPrice2").innerHTML /document.getElementById("monthamount2").value
document.getElementById("generalPrice2").innerHTML = Math.round(monthRata);
}
function change2_3(span,id){
document.getElementsByClassName(span)[0].innerHTML = document.getElementById(id).value;

var monthRata = document.getElementById("finalPrice2").innerHTML /document.getElementById("monthamount2").value
document.getElementById("generalPrice2").innerHTML = Math.round(monthRata);
}

// ==> 3 <==

function chooseFacture3(){
  var facture = document.getElementById("facture3");
  var producerSelect = document.getElementById("producer3");
  var colorSelect = document.getElementById("colour3");

  var facture1 = "<select name='producer3' class='producer3' onchange='chooseProducer3()'>\
            <option value=''>--Выбрать--</option>\
                  <option value='выберите цвет'>MSD Classic Китай</option>\
                  <option value='выберите цвет'>MSD Evolution Китай</option>\
                  <option value='выберите цвет'>Pongs Германия</option>\
                </select>";
  var facture2 = "<select name='producer3' class='producer3' onchange='chooseProducer3()'>\
          <option value=''>--Выбрать--</option>\
                  <option value='выберите цвет'>Descor Германия</option>\
                  <option value='выберите цвет'>Clipso Франция</option>\
                  <option value='выберите цвет'>Cerutti Швейцария</option>\
                </select>";
  var color1 = "<select name='colour3' class='colour3' onchange='chooseColour3()'>\
            <option value=''>--Выбрать--</option>\
                    <option value='0'>Белый</option>\
                    <option value='1'>Цветной</option>\
                    <option value='2'>Фотопечать</option>\
                </select>";
  var color2 = "<select name='colour3' class='colour3' onchange='chooseColour3()'>\
            <option value=''>--Выбрать--</option>\
                    <option value='0'>Белый</option>\
                    <option value='1'>Цветной</option>\
                    <option value='2'>Фотопечать</option>\
                </select>";

  if(facture.value == 1){
    producerSelect.innerHTML = facture1;
    colorSelect.innerHTML = color1;
  }else if (facture.value == 2) {
    producerSelect.innerHTML = facture2;
    colorSelect.innerHTML = color2;
  }else{
    producerSelect.innerHTML = "<div>сначала выберите фактуру</div>";
    colorSelect.innerHTML = "<div>сначала выберите производителя</div>";
  }
    document.getElementById("basePrice3").innerHTML = "Выберите: <span class='red'>производителя и цвет</span>";
    document.getElementsByClassName("producer3")[1].innerHTML = "--<span class='red'>выберите производителя</span>--";
    document.getElementsByClassName("price3")[0].innerHTML = "--<span class='red'>выберите производителя</span>--";
    document.getElementsByClassName("price3")[1].innerHTML = 0;
    document.getElementsByClassName("price3")[2].innerHTML = 0;
    document.getElementsByClassName("qtyty3")[0].innerHTML = "--<span class='red'>укажите размеры</span>--";
    document.getElementsByClassName("qtyty3")[1].innerHTML = "--<span class='red'>укажите размеры</span>--";
    document.getElementsByClassName("qtyty3")[2].innerHTML = "--<span class='red'>укажите размеры</span>--";
    document.getElementById("roomLength3").value = 1;
    document.getElementById("roomWidth3").value = 1;
    document.getElementById("finalPrice3").innerHTML = "<span class='red'>--</span>";

}

function chooseProducer3(){
  var producer = document.getElementsByClassName("producer3")[0];
  document.getElementsByClassName("producer3")[1].innerHTML = producer.options[producer.selectedIndex].text;
  document.getElementsByClassName("price3")[0].innerHTML = "--<span class='red'>Выберите: цвет</span>--";
  document.getElementsByClassName("price3")[1].innerHTML = 0;
  document.getElementsByClassName("price3")[2].innerHTML = 0;
  document.getElementById("basePrice3").innerHTML = "<span class='red'>выберите цвет</span>";
  document.getElementsByClassName("colour3")[0].selectedIndex = 0;
  document.getElementsByClassName("qtyty3")[0].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty3")[1].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty3")[2].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementById("roomLength3").value = 1;
  document.getElementById("roomWidth3").value = 1;
  document.getElementById("finalPrice3").innerHTML = "<span class='red'>--</span>";

}
  var priceC = {
    "MSD Classic Китай":['240','290','2400'],
    "MSD Evolution Китай":['310','360','2400'],
    "Pongs Германия":['740','810','2400'],
    "Descor Германия":['860','1300','3200'],
    "Clipso Франция":['1640','2100','3200'],
    "Cerutti Швейцария":['2500','3100','4000']
  }
function chooseColour3(){
  var colour = document.getElementsByClassName("colour3")[0];

  document.getElementsByClassName("price3")[0].innerHTML = priceC[document.getElementsByClassName("producer3")[0].options[document.getElementsByClassName("producer3")[0].selectedIndex].text][colour.value];
  document.getElementsByClassName("price3")[1].innerHTML = 0;
  document.getElementsByClassName("price3")[2].innerHTML = 0;
  document.getElementById("basePrice3").innerHTML = document.getElementsByClassName("price3")[0].innerHTML * 1 + 4*140 + 4*110;
  document.getElementsByClassName("qtyty3")[0].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty3")[1].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty3")[2].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementById("roomLength3").value = 1;
  document.getElementById("roomWidth3").value = 1;
  document.getElementById("finalPrice3").innerHTML = "<span class='red'>--</span>";
  // document.getElementsByClassName("sumamount")[0].innerHTML = document.getElementById("finalPrice").innerHTML;

}

function change3_1(){
var squareRoom = document.getElementById("roomLength3").value * document.getElementById("roomWidth3").value;
document.getElementsByClassName("qtyty3")[0].innerHTML = Math.ceil(squareRoom);
document.getElementsByClassName("price3")[0].innerHTML = Math.ceil(squareRoom) * parseInt(priceC[document.getElementsByClassName("producer3")[0].options[document.getElementsByClassName("producer3")[0].selectedIndex].text][document.getElementsByClassName("colour3")[0].value]);
var perimetrRoom = 2*(+document.getElementById("roomLength3").value + +document.getElementById("roomWidth3").value);
document.getElementsByClassName("qtyty3")[1].innerHTML = Math.ceil(perimetrRoom);
document.getElementsByClassName("price3")[1].innerHTML = 140 * Math.ceil(perimetrRoom);

document.getElementsByClassName("qtyty3")[2].innerHTML = Math.ceil(perimetrRoom);
document.getElementsByClassName("price3")[2].innerHTML = 110 * Math.ceil(perimetrRoom);
document.getElementById("finalPrice3").innerHTML = parseInt(document.getElementsByClassName("price3")[0].innerHTML) + parseInt(document.getElementsByClassName("price3")[1].innerHTML) + parseInt(document.getElementsByClassName("price3")[2].innerHTML) + parseInt(document.getElementsByClassName("price3")[3].innerHTML) + parseInt(document.getElementsByClassName("price3")[4].innerHTML) + parseInt(document.getElementsByClassName("price3")[5].innerHTML) + parseInt(document.getElementsByClassName("price3")[6].innerHTML);

// document.getElementsByClassName("sumamount")[0].innerHTML = document.getElementById("finalPrice").innerHTML;
// document.getElementById("sumamount").setAttribute("max",document.getElementById("finalPrice").innerHTML);
// document.getElementById("sumamount").setAttribute("value",document.getElementById("finalPrice").innerHTML);
// document.getElementsByClassName("sumamount")[1].innerHTML = 0 + " -- " + document.getElementById("finalPrice").innerHTML + " ₽";
var monthRata = document.getElementById("finalPrice3").innerHTML /document.getElementById("monthamount3").value
document.getElementById("generalPrice3").innerHTML = Math.round(monthRata);
}

function change3_2(classnumber,id){
  var array = ['','','','150','200','400','560'];
document.getElementsByClassName("qtyty3")[classnumber].innerHTML = document.getElementById(id).value;
document.getElementsByClassName("price3")[classnumber].innerHTML = document.getElementsByClassName("qtyty3")[classnumber].innerHTML * array[classnumber];
document.getElementById("finalPrice3").innerHTML = parseInt(document.getElementsByClassName("price3")[0].innerHTML) + parseInt(document.getElementsByClassName("price3")[1].innerHTML) + parseInt(document.getElementsByClassName("price3")[2].innerHTML) + parseInt(document.getElementsByClassName("price3")[3].innerHTML) + parseInt(document.getElementsByClassName("price3")[4].innerHTML) + parseInt(document.getElementsByClassName("price3")[5].innerHTML) + parseInt(document.getElementsByClassName("price3")[6].innerHTML);
// document.getElementsByClassName("sumamount")[0].innerHTML = document.getElementById("finalPrice").innerHTML;

// document.getElementById("sumamount").setAttribute("max",document.getElementById("finalPrice").innerHTML);
// document.getElementById("sumamount").setAttribute("value",document.getElementById("finalPrice").innerHTML);
// document.getElementsByClassName("sumamount")[1].innerHTML = 0 + " -- " + document.getElementById("finalPrice").innerHTML + " ₽";
var monthRata = document.getElementById("finalPrice3").innerHTML /document.getElementById("monthamount3").value
document.getElementById("generalPrice3").innerHTML = Math.round(monthRata);
}
function change3_3(span,id){
document.getElementsByClassName(span)[0].innerHTML = document.getElementById(id).value;

var monthRata = document.getElementById("finalPrice3").innerHTML /document.getElementById("monthamount3").value
document.getElementById("generalPrice3").innerHTML = Math.round(monthRata);
}
// ==> 4 <==

function chooseFacture4(){
  var facture = document.getElementById("facture4");
  var producerSelect = document.getElementById("producer4");
  var colorSelect = document.getElementById("colour4");

  var facture1 = "<select name='producer4' class='producer4' onchange='chooseProducer4()'>\
            <option value=''>--Выбрать--</option>\
                  <option value='выберите цвет'>MSD Classic Китай</option>\
                  <option value='выберите цвет'>MSD Evolution Китай</option>\
                  <option value='выберите цвет'>Pongs Германия</option>\
                </select>";
  var facture2 = "<select name='producer4' class='producer4' onchange='chooseProducer4()'>\
          <option value=''>--Выбрать--</option>\
                  <option value='выберите цвет'>Descor Германия</option>\
                  <option value='выберите цвет'>Clipso Франция</option>\
                  <option value='выберите цвет'>Cerutti Швейцария</option>\
                </select>";
  var color1 = "<select name='colour4' class='colour4' onchange='chooseColour4()'>\
            <option value=''>--Выбрать--</option>\
                    <option value='0'>Белый</option>\
                    <option value='1'>Цветной</option>\
                    <option value='2'>Фотопечать</option>\
                </select>";
  var color2 = "<select name='colour4' class='colour4' onchange='chooseColour4()'>\
            <option value=''>--Выбрать--</option>\
                    <option value='0'>Белый</option>\
                    <option value='1'>Цветной</option>\
                    <option value='2'>Фотопечать</option>\
                </select>";

  if(facture.value == 1){
    producerSelect.innerHTML = facture1;
    colorSelect.innerHTML = color1;
  }else if (facture.value == 2) {
    producerSelect.innerHTML = facture2;
    colorSelect.innerHTML = color2;
  }else{
    producerSelect.innerHTML = "<div>сначала выберите фактуру</div>";
    colorSelect.innerHTML = "<div>сначала выберите производителя</div>";
  }
    document.getElementById("basePrice4").innerHTML = "Выберите: <span class='red'>производителя и цвет</span>";
    document.getElementsByClassName("producer4")[1].innerHTML = "--<span class='red'>выберите производителя</span>--";
    document.getElementsByClassName("price4")[0].innerHTML = "--<span class='red'>выберите производителя</span>--";
    document.getElementsByClassName("price4")[1].innerHTML = 0;
    document.getElementsByClassName("price4")[2].innerHTML = 0;
    document.getElementsByClassName("qtyty4")[0].innerHTML = "--<span class='red'>укажите размеры</span>--";
    document.getElementsByClassName("qtyty4")[1].innerHTML = "--<span class='red'>укажите размеры</span>--";
    document.getElementsByClassName("qtyty4")[2].innerHTML = "--<span class='red'>укажите размеры</span>--";
    document.getElementById("roomLength4").value = 1;
    document.getElementById("roomWidth4").value = 1;
    document.getElementById("finalPrice4").innerHTML = "<span class='red'>--</span>";

}

function chooseProducer4(){
  var producer = document.getElementsByClassName("producer4")[0];
  document.getElementsByClassName("producer4")[1].innerHTML = producer.options[producer.selectedIndex].text;
  document.getElementsByClassName("price4")[0].innerHTML = "--<span class='red'>Выберите: цвет</span>--";
  document.getElementsByClassName("price4")[1].innerHTML = 0;
  document.getElementsByClassName("price4")[2].innerHTML = 0;
  document.getElementById("basePrice3").innerHTML = "<span class='red'>выберите цвет</span>";
  document.getElementsByClassName("colour4")[0].selectedIndex = 0;
  document.getElementsByClassName("qtyty4")[0].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty4")[1].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty4")[2].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementById("roomLength4").value = 1;
  document.getElementById("roomWidth4").value = 1;
  document.getElementById("finalPrice4").innerHTML = "<span class='red'>--</span>";

}
  var priceC = {
    "MSD Classic Китай":['240','290','2400'],
    "MSD Evolution Китай":['310','360','2400'],
    "Pongs Германия":['740','810','2400'],
    "Descor Германия":['860','1300','3200'],
    "Clipso Франция":['1640','2100','3200'],
    "Cerutti Швейцария":['2500','3100','4000']
  }
function chooseColour4(){
  var colour = document.getElementsByClassName("colour4")[0];

  document.getElementsByClassName("price4")[0].innerHTML = priceC[document.getElementsByClassName("producer4")[0].options[document.getElementsByClassName("producer4")[0].selectedIndex].text][colour.value];
  document.getElementsByClassName("price4")[1].innerHTML = 0;
  document.getElementsByClassName("price4")[2].innerHTML = 0;
  document.getElementById("basePrice4").innerHTML = document.getElementsByClassName("price4")[0].innerHTML * 1 + 4*140 + 4*110;
  document.getElementsByClassName("qtyty4")[0].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty4")[1].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementsByClassName("qtyty4")[2].innerHTML = "--<span class='red'>укажите размеры</span>--";
  document.getElementById("roomLength4").value = 1;
  document.getElementById("roomWidth4").value = 1;
  document.getElementById("finalPrice4").innerHTML = "<span class='red'>--</span>";
  // document.getElementsByClassName("sumamount")[0].innerHTML = document.getElementById("finalPrice").innerHTML;

}

function change4_1(){
var squareRoom = document.getElementById("roomLength4").value * document.getElementById("roomWidth4").value;
document.getElementsByClassName("qtyty4")[0].innerHTML = Math.ceil(squareRoom);
document.getElementsByClassName("price4")[0].innerHTML = Math.ceil(squareRoom) * parseInt(priceC[document.getElementsByClassName("producer4")[0].options[document.getElementsByClassName("producer4")[0].selectedIndex].text][document.getElementsByClassName("colour4")[0].value]);
var perimetrRoom = 2*(+document.getElementById("roomLength4").value + +document.getElementById("roomWidth4").value);
document.getElementsByClassName("qtyty4")[1].innerHTML = Math.ceil(perimetrRoom);
document.getElementsByClassName("price4")[1].innerHTML = 140 * Math.ceil(perimetrRoom);

document.getElementsByClassName("qtyty4")[2].innerHTML = Math.ceil(perimetrRoom);
document.getElementsByClassName("price4")[2].innerHTML = 110 * Math.ceil(perimetrRoom);
document.getElementById("finalPrice4").innerHTML = parseInt(document.getElementsByClassName("price4")[0].innerHTML) + parseInt(document.getElementsByClassName("price4")[1].innerHTML) + parseInt(document.getElementsByClassName("price4")[2].innerHTML) + parseInt(document.getElementsByClassName("price4")[3].innerHTML) + parseInt(document.getElementsByClassName("price4")[4].innerHTML) + parseInt(document.getElementsByClassName("price4")[5].innerHTML) + parseInt(document.getElementsByClassName("price4")[6].innerHTML);

// document.getElementsByClassName("sumamount")[0].innerHTML = document.getElementById("finalPrice").innerHTML;
// document.getElementById("sumamount").setAttribute("max",document.getElementById("finalPrice").innerHTML);
// document.getElementById("sumamount").setAttribute("value",document.getElementById("finalPrice").innerHTML);
// document.getElementsByClassName("sumamount")[1].innerHTML = 0 + " -- " + document.getElementById("finalPrice").innerHTML + " ₽";
var monthRata = document.getElementById("finalPrice4").innerHTML /document.getElementById("monthamount4").value
document.getElementById("generalPrice4").innerHTML = Math.round(monthRata);
}

function change4_2(classnumber,id){
  var array = ['','','','150','200','400','560'];
document.getElementsByClassName("qtyty4")[classnumber].innerHTML = document.getElementById(id).value;
document.getElementsByClassName("price4")[classnumber].innerHTML = document.getElementsByClassName("qtyty4")[classnumber].innerHTML * array[classnumber];
document.getElementById("finalPrice4").innerHTML = parseInt(document.getElementsByClassName("price4")[0].innerHTML) + parseInt(document.getElementsByClassName("price4")[1].innerHTML) + parseInt(document.getElementsByClassName("price4")[2].innerHTML) + parseInt(document.getElementsByClassName("price4")[3].innerHTML) + parseInt(document.getElementsByClassName("price4")[4].innerHTML) + parseInt(document.getElementsByClassName("price4")[5].innerHTML) + parseInt(document.getElementsByClassName("price4")[6].innerHTML);
// document.getElementsByClassName("sumamount")[0].innerHTML = document.getElementById("finalPrice").innerHTML;

// document.getElementById("sumamount").setAttribute("max",document.getElementById("finalPrice").innerHTML);
// document.getElementById("sumamount").setAttribute("value",document.getElementById("finalPrice").innerHTML);
// document.getElementsByClassName("sumamount")[1].innerHTML = 0 + " -- " + document.getElementById("finalPrice").innerHTML + " ₽";
var monthRata = document.getElementById("finalPrice4").innerHTML /document.getElementById("monthamount4").value
document.getElementById("generalPrice4").innerHTML = Math.round(monthRata);
}
function change4_3(span,id){
document.getElementsByClassName(span)[0].innerHTML = document.getElementById(id).value;

var monthRata = document.getElementById("finalPrice4").innerHTML /document.getElementById("monthamount4").value
document.getElementById("generalPrice4").innerHTML = Math.round(monthRata);
}


