let activeindexImg=0;
let imageArray=document.getElementsByClassName('slides');
imageArray[activeindexImg].style.display='block';
function hienThiSlide(i){
    imageArray[i].style.display='block';
}
function anslide(k){
    imageArray[k].style.display='none';
}
function hienThiSlideTruocDo(){
    anslide(activeindexImg);
    if(activeindexImg<=0){
        activeindexImg=imageArray.length-1;
    }
    else{
        activeindexImg -=1;
    }
    hienThiSlide(activeindexImg);

}
function hienThiSlideKeTiep(){
    anslide(activeindexImg);
    if(activeindexImg<imageArray.length-1){
        activeindexImg +=1;
    }
    else{
        activeindexImg=0;
    }
    hienThiSlide(activeindexImg);
}