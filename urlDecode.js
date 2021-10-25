function urlDecode(text) {
    if(text.includes("&")){
        text = text.split("&")
    } else {
        text = [text];
    }
    let result = {};
    
    for(let keyValue of text){
        const key = keyValue.split("=")[0];
        let value = keyValue.split("=")[1];
        for(let i = 0; i < value.length; i++){
            if (value.substring(i, i+3) == "%20"){
                value = value.substring(0, i) + " " + value.substring(i+3);
            }
        }
        result[key] = value;
    }

    return result;
};
  
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);