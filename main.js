document.getElementById('container');

async function fetchData() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            throw new Error("Bad URL")
        }
        
        const data = await response.json();
        console.log(data);
        if(data.length<1){
            throw new Error("No Support Tickets")
        }
    }
    catch(error){
        console.error(error);
    }
}
fetchData();