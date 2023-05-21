
    function encriptado(text){
           const encripted = text.split("");
           for(let position = 0; position <=encripted.length; position++  ){
                if (encripted[position] =="a") {
                    encripted.splice(position, 1, "ai");
                }
                else if (encripted[position]=="e") {
                    encripted.splice(position, 1, "enter");
                }
                else if (encripted[position] == "i") {
                    encripted.splice(position, 1, "imes");
                }
                else if (encripted[position] == "o") {
                    encripted.splice(position, 1, "ober");
                }
                else if (encripted[position] == "u") {
                    encripted.splice(position, 1, "ufat");
                }
            }
            texto = encripted.join("");
            document.getElementById("outputText").value = texto    
            console.log(texto);
             document.getElementById('inputText').value = '';
            outputText.classList.add('no-background');
    }

    function desencriptar(text){
        let textoEncriptado = text;
        textoEncriptado = textoEncriptado.replace(/ai/gi, "a"); 
        textoEncriptado =textoEncriptado.replace(/enter/gi, "e"); 
        textoEncriptado =textoEncriptado.replace(/imes/gi, "i"); 
        textoEncriptado =textoEncriptado.replace(/ober/gi, "o"); 
        textoEncriptado =textoEncriptado.replace(/ufat/gi, "u");    
        document.getElementById("outputText").value = textoEncriptado
        console.log(textoEncriptado);
         document.getElementById('inputText').value = '';
        outputText.classList.add('no-background');
    }
    