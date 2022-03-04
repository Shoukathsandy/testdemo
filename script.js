var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    for(var i=0;i<data.length;i++){
        console.log(`name: ${data[i].name}, region: ${data[i].region}, subregion: ${data[i].subregion}, population: ${data[i].population}`);

    }
    let final=data.reduce((sum,cv)=>sum+cv.population,0);
    console.log(final);
}

                                                      