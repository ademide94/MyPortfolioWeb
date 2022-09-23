 

jQuery(document).ready(function () {

    typewriter();
    setTimeout(function () { 
        $("#first").css("visibility", "visible"); 
    }, 520);

    setTimeout(function () {
        $("#second").css("visibility", "visible");
    }, 1050);
});


function HomeFunction() { 
    $("#Home_Div").css("display", "block"); 
    $("#About_Div").css("display", "none"); 
    $("#Projects_Div").css("display", "none"); 
    $("#Contact_Div").css("display", "none");  

    $("#Home_btn").css('color', 'gray');
    $("#About_btn").css('color', 'white');
    $("#Projects_btn").css('color', 'white');
    $("#Contact_Btn").css('color', 'white');
 
}

function AboutFunction() {
    $("#Home_Div").css("display", "none");
    $("#About_Div").css("display", "block");
    $("#Projects_Div").css("display", "none");
    $("#Contact_Div").css("display", "none");

    $("#Home_btn").css('color', 'white');
    $("#About_btn").css('color', 'gray');
    $("#Projects_btn").css('color', 'white');
    $("#Contact_Btn").css('color', 'white');

    if ($('#typedtext').is(':empty'))
    {
        typewriter();
    }
 
     

}

function ProjectsFunction() {
    $("#Home_Div").css("display", "none");
    $("#About_Div").css("display", "none");
    $("#Projects_Div").css("display", "block");
    $("#Contact_Div").css("display", "none");


    $("#Home_btn").css('color', 'white');
    $("#About_btn").css('color', 'white');
    $("#Projects_btn").css('color', 'gray');
    $("#Contact_Btn").css('color', 'white');
}

function ContactFunction() {
    $("#Home_Div").css("display", "none");
    $("#About_Div").css("display", "none");
    $("#Projects_Div").css("display", "none");
    $("#Contact_Div").css("display", "block");


    $("#Home_btn").css('color', 'white');
    $("#About_btn").css('color', 'white');
    $("#Projects_btn").css('color', 'white');
    $("#Contact_Btn").css('color', 'gray');
}


// set up text to print, each item in array is new line
var aText = new Array( 
    "Hi!",
    "My name is Ademide.",
    "I am software developer with 3+ years professional experience in software developement.",
    "I currently work in a well known financial institution, writting Web-Apis for various business requirments.",
    "My stack,",
    "Asp.net core Web Api, MVC, CSS, Javacript, SQL, Azure, Kubernetes, NodeJs and React.",
    "Regards."
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


