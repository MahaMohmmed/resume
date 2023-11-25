function showImg(){
    document.getElementById("hiddencard2").style.display ='block';
    document.getElementById("firstcard2").style.display ='none';
    document.getElementById("secondtHide").style.display ='block';
    document.getElementById("secondeButton").style.display ='none';

}
function showfirstImg(){
    document.getElementById("hiddencard").style.display ='block';
    document.getElementById("firstcard").style.display ='none';
    document.getElementById("firstHide").style.display ='block';
    document.getElementById("firstbutton").style.display ='none';


}
function hidefirstButton(){
    document.getElementById("firstbutton").style.display ='block';
    document.getElementById("firstHide").style.display ='none';
    document.getElementById("hiddencard").style.display ='none';
    document.getElementById("firstcard").style.display ='block';

}
function hideSecondButton(){
    document.getElementById("secondeButton").style.display ='block';
    document.getElementById("secondtHide").style.display ='none';
    document.getElementById("hiddencard2").style.display ='none';
    document.getElementById("firstcard2").style.display ='block';

}