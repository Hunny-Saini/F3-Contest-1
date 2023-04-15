let empData = [];
var count = empData.length;

document.getElementById("add-user").addEventListener("click",addData);

function addData(event){
    event.preventDefault();

    //getting data
    const nameVal = document.querySelector("#name").value;
    const profession = document.querySelector("#profession").value;
    const age = document.querySelector("#age").value;

    //checking if any val if empty
    if(nameVal.trim() == "" || profession.trim() == "" || age.trim() == ""){
        document.getElementById("success").style.display = "none";
        document.getElementById("error").style.display = "block";
        return;
    }

    //pushing data into array by creating object
    count = count + 1;
    // console.log(count);
    var employee = {count,nameVal,profession,age};
    empData.push(employee);
    updateCount();
    renderData();

    //changing message
    document.getElementById("error").style.display = "none";
    document.getElementById("success").style.display = "block";

    // reseting form
    document.querySelector("form").reset();
}

function renderData(){
    //getting container div
    const dataContainer = document.getElementById("user-list-container");
    dataContainer.innerText = "";

    for(let i = 0; i < empData.length; i++){

        //main container
        const empDiv = document.createElement("div");
        empDiv.setAttribute("class","data-container");

        //data container
        var data = document.createElement("div");
        data.setAttribute("class","data");
        
        //creating id span
        var id = document.createElement("span");
        id.innerText = `${empData[i].count}.`

        //creating name span
        var nameData = document.createElement("span");
        nameData.innerText = `Name : ${empData[i].nameVal}`

        //creating profession span
        var professionalData = document.createElement("span");
        professionalData.innerText = `Profession : ${empData[i].profession}`

        ////creating age span
        var ageData = document.createElement("span");
        ageData.innerText = `Age : ${empData[i].age}`;

        //appending data into data container
        data.appendChild(id);
        data.appendChild(nameData);
        data.appendChild(professionalData);
        data.appendChild(ageData);

        empDiv.appendChild(data);

        //delete button
        const deletebtn = document.createElement("button");
        deletebtn.setAttribute("class","delete-btn");
        deletebtn.setAttribute("type","submit");
        deletebtn.innerText = "Delete User";
        deletebtn.addEventListener("click",() => {
            const index = i;
            empData.splice(index, 1);
            updateCount();
            renderData();
        });

        //appending container
        
        empDiv.appendChild(deletebtn);
        dataContainer.appendChild(empDiv);
    }

    
}

function updateCount(){
    for(let i=0; i < empData.length;i++){
        empData[i].count = i+1;
    }
}