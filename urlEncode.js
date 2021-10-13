function urlEncode(url){
    url = url.trim();
    for(let i = 0; i < url.length; i++){
        if (url[i] == " "){
            url = url.substring(0, i) + "%20" + url.substring(i+1);
        }
    }
    return url;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));