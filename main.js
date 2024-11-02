const myContainer = document.getElementById('container');
const loadingIndicator = document.getElementById('loading');
async function fetchData() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");//await our fetch
        if(!response.ok){
            throw new Error("Bad URL")//check if response is ok
        }
        
        const data = await response.json();//await json
        console.log(data);
        if(data.length<1){
            throw new Error("No Support Tickets")//check if any support tickets are there
        }
        for (let i = 0; i < data.length; i++) {//loop through our data and display
            let ticketID = data[i].id;
            let customerName = data[i].userId;
            let issueDescription = data[i].title;
            let details = data[i].body;
            let newTicket = document.createElement('p');
            newTicket.textContent = `Ticket ID:${ticketID} User ID:${customerName} Description:${issueDescription} Details:${details}`;
            myContainer.append(newTicket);
            
        }
    }
    catch(error){
        console.error(error);
    }
    finally{
loadingIndicator.style.display='none'//hide our loading indicator
    }
    
    
}
fetchData();