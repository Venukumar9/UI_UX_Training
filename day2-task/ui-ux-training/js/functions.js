script
{         var row=1;
       var submit=document.getElementById("submit");
       submit.addEventListener("click", displayDetails);
       function displayDetails(){
        var name=document.getElementById("name").value;
        var name=document.getElementById("email").value;
        var name=document.getElementById("age").value;

        if(!name || !email || !age){
            alert("please fill all boxes");
            return;
        }
        var display=document.getElementById("table");
        var newRow=display.insertRow(row);
        var cell1=newRow.insertCell(0);
        var cell2=newRow.insertCell(1);
        var cell3=newRow.insertCell(2);
        cell1.innerHtml= name;
        cell1.innerHtml= email;
        cell1.innerHtml= age;
        row++;
       }

    }