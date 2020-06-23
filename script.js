function convert(){
    var ftext = document.getElementById("txttext")
    var str = ftext.value
    var foption = document.getElementsByName("radoption")
    if (foption[0].checked){
        var strArray = str.split(" ")
        var charArray = []
        for (var i = 0; i < strArray.length; i++){
            var unicode = parseInt(strArray[i], 2)
            var char = String.fromCharCode(unicode)
            charArray.push(char)
        }
        var con = charArray.join('')
    }else {
        var binArray = []
        for (var i = 0; i < str.length; i++){
            var unicode = str.charCodeAt(i)
            var bin = "0"+unicode.toString(2)
            binArray.push(bin)
        }
        var con = binArray.join(' ')
    }
    var res = document.querySelector("div#res")
    res.innerHTML = con
}