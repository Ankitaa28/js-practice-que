// implement a try catch block to handle an error that occurs during api data fetching 
async function fetching() {
    try{
        let response = await fetch("http://www.bar.com:8001/apis.json");
        let data = await response.json();
        console.log(data);
    }
    catch(error){
     console.log("error while fetching data "+ error);
    }
}
fetching();