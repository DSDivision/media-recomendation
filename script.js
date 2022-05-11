var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET" , "http://127.0.0.1:8000/recommendation/s123");
xmlHttp.send();

function get() {
    console.log(xmlHttp.responseText);
}