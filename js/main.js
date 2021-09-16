
     let palabra =document.getElementById("palabra1");
     let url='https://api.dictionaryapi.dev/api/v2/entries/en/'+palabra.value;
     document.getElementById("botonBuscar").onclick=function(){
     console.log(palabra.value);   
     fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error)) 
     const mostrarData = (data) =>{
     console.log(data);
      };       
     };