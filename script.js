selected = 1;
cart = false;
allprod = 0;
id = 0;
function changeImage(number){
    imagePath = 'images/image-product-'+number+'.jpg';
    document.getElementById("imgMain").src = imagePath;
    document.getElementById("imgZoom").src = imagePath;
    changeThumb(selected, number);
}
function changeThumb(notSel, yesSel){
    varRemove = "thumb" + notSel;
    varAdd = "thumb" + yesSel;
    document.getElementById(varRemove).classList.remove("selectedThumb");
    document.getElementById(varAdd).classList.add("selectedThumb");
    varRemove = "thumbz" + notSel;
    varAdd = "thumbz" + yesSel;
    document.getElementById(varRemove).classList.remove("selectedThumbz");
    document.getElementById(varAdd).classList.add("selectedThumbz");
    selected = yesSel;
}
function skip(skip){
    varSkip = selected + skip;
    if(varSkip == 0)
    {
        varSkip = 4;
    }
    else if(varSkip == 5)
    {
        varSkip = 1;
    }
    changeImage(varSkip);
}
function changeValue(varValue){
    varValue = parseInt(document.getElementById("count").innerHTML) + varValue;
    if(varValue > -1){
        document.getElementById("count").innerHTML = varValue;
    }
}
function zoom(){
    document.getElementById("zoom").style.display = 'flex';
}
function zoomClose(){
    document.getElementById("zoom").style.display = 'none';
}
function addProduct(){
    count = document.getElementById("count").innerHTML;
    if(count != 0){
        id ++;
        price = count * 125.00;
        divContent = '<div class="product" id="'+id+'"><div><img src="images/image-product-1-thumbnail.jpg" class="imgProd"><div class="ptCon"><p>Fall Limited Edition Sneakers</p><div class="ppCon"><p>$125.00 x '+count+' <span style="color: black; font-weight: 700;">$'+price+'.00</span></p></div></div></div><img src="images/icon-delete.svg" style="cursor: pointer;" onclick="myDelete('+id+')"></div>';
        document.getElementById('prodCon').innerHTML += divContent;
        document.getElementById('empty').style.display = "none";
        document.getElementById('checkout').style.display = "block";
        allprod ++;
        document.getElementById('cartCounter').innerHTML = allprod;
        document.getElementById('cartCounter').style.display = "flex";
    }
}
function showcart(){
    if(!cart){
        document.getElementById("cartSummary").style.display = 'block';
        cart = true;
    }
    else{
        document.getElementById("cartSummary").style.display = 'none';
        cart = false;
    }
}
function mobileMenu(){
    document.getElementById("mmCon").classList.add("visible"); 
    if(cart){
        document.getElementById("cartSummary").style.display = 'none';
        cart = false;
    }
}
function mobileCloseMenu(){
    document.getElementById("mmCon").classList.remove("visible");
}
function myDelete(id){
    allprod --;
    document.getElementById('cartCounter').innerHTML = allprod;
    document.getElementById(id).remove();
    if(allprod == 0){
        document.getElementById('empty').style.display = "flex";
        document.getElementById('checkout').style.display = "none";
        document.getElementById('cartCounter').style.display = "none"
        document.getElementById('cartCounter').style.display = "none";
    }
}
