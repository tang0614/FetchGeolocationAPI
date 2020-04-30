if('geolocation' in navigator){
    console.log('geolocation is avaliable');
    navigator.geolocation.getCurrentPosition(position=>{
        const lat =position.coords.latitude;
        const log =position.coords.longitude;
        console.log(lat);
        console.log(log);
        const data ={lat,log};

        const options ={
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data),
        }
        console.log('sending the encoded json data to server');
        fetch('/api',options); //post json encoded data to server end point /api
    });

   
} else {
    console.log('geolocation is not avaliable');

}