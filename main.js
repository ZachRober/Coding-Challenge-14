const myContainer = document.getElementById('container');

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
        for (let i = 0; i < data.length; i++) {
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

    }
    
    
}
fetchData();