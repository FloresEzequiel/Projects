
const urlParams = new URLSearchParams(window.location.search)
const userId = urlParams.get("id")
let des = 0
let sortv=1
window.onload = async function(){
    const sesR = await fetch(`${domain}/api/check-session`)
    const sesUsDa = await sesR.json();
    

    if(sesUsDa.data){
        if(sesUsDa.data.id !=userId){
            window.location=`${domain}/`
        }
    }else{
        window.location=`${domain}/`
    }
    filldataA();
}

async function filldataA(){
    const ticketResponse = await fetch(`${domain}/api/financeA`)
    const ticketData = await ticketResponse.json();

    const allUser = await fetch(`${domain}/api/Users`)
    const aU = await allUser.json();

    if(sesUsDa.data){
        if(sesUsDa.data.id !=userId){
            window.location=`${domain}/`
        }
    }else{
        window.location=`${domain}/`
    }
    
    filldataA();

}

async function filldataA(){
    const ticketResponse = await fetch(`${domain}/api/financeA`)
    const ticketData = await ticketResponse.json();

    const allUser = await fetch(`${domain}/api/Users`)
    const aU = await allUser.json();

    //console.log(aU.data)

    if(sortv==1){
        ticketData.data.sort((a,b)=>{
            if(a.id<b.id){
                return -1
            }
           if(a.id>b.id){
              return 1
           }
           return 0;
        }) 
    }

    if(sortv==2){
        ticketData.data.sort((a,b)=>{
            if(a.id>b.id){
                return -1
            }
           if(a.id<b.id){
              return 1
           }
           return 0;
        }) 
    }

    if(sortv==3){
        ticketData.data.sort((a,b)=>{
            if(a.amount<b.amount){
                return -1
            }
           if(a.amount>b.amount){
              return 1
           }
           return 0;
        }) 
    }
    
    if(sortv==4){
        ticketData.data.sort((a,b)=>{
            if(a.amount>b.amount){
                return -1
            }
           if(a.amount<b.amount){
              return 1
           }
           return 0;
        }) 
    }
    if(sortv==5){
        ticketData.data.sort((a,b)=>{
            if(a.submitted<b.submitted){
                return -1
            }
           if(a.submitted>b.submitted){
              return 1
           }
           return 0;
        }) 
    }
    if(sortv==6){
        ticketData.data.sort((a,b)=>{
            if(a.submitted>b.submitted){
                return -1
            }
           if(a.submitted<b.submitted){
              return 1
           }
           return 0;
        }) 
    }
    if(sortv==7){
        ticketData.data.sort((a,b)=>{
            if(a.resolved<b.resolved){
                return -1
            }
           if(a.resolved>b.resolved){
              return 1
           }
           return 0;
        }) 
    }
    if(sortv==8){

        ticketData.data.sort((a,b)=>{
            if(a.resolved>b.resolved){
                return -1
            }
           if(a.resolved<b.resolved){
              return 1
           }
           return 0;
        })
    }

    if(sortv==10){
        ticketData.data.sort((a,b)=>{
        if(a.status<b.status){
            return -1
        }
       if(a.status>b.status){
          return 1
       }
       return 0;
    }) 
    }
    if(sortv==9){
        ticketData.data.sort((a,b)=>{
        if(a.status>b.status){
            return -1
        }
       if(a.status<b.status){
          return 1
       }
       return 0;
    }) 
    }

    

    //console.log(ticketData.data)
    let tickerElem= document.getElementById("rtl=container")
    tickerElem.innerHTML=``;

    
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')
    table.appendChild(thead)
    table.appendChild(tbody)
    tickerElem.appendChild(table)
        let row1=document.createElement('tr')
        let heading1=document.createElement('th')
        //heading1.addEventListener.onclick=myfunction()
        heading1.innerHTML="Reimbursement ID"
        heading1.addEventListener;
        heading1.id="RI";
        let heading2=document.createElement('th')
        heading2.innerHTML="Amount"
        heading2.addEventListener;
        heading2.id="AT";
        let heading3=document.createElement('th')
        heading3.innerHTML="Submitted Date"
        heading3.addEventListener;
        heading3.id="SD";
        let heading4 = document.createElement('th')
        heading4.innerHTML="Resolved Date"
        heading4.addEventListener;
        heading4.id="RD";
        let heading5=document.createElement('th')
        heading5.innerHTML="Resolver"
        let heading6=document.createElement('th')
        heading6.innerHTML="Description"
        let heading7=document.createElement('th')
        heading7.innerHTML="Type"
        heading7.addEventListener;
        heading7.id="TE"
        let heading8 = document.createElement('th')
        heading8.innerHTML="Author"
        
        let heading9=document.createElement('th')
        heading9.innerHTML="Status"

        row1.appendChild(heading1)
        row1.appendChild(heading2)
        row1.appendChild(heading3)
        row1.appendChild(heading4)
        row1.appendChild(heading5)
        row1.appendChild(heading6)
        row1.appendChild(heading7)
        row1.appendChild(heading8)
        row1.appendChild(heading9)
        thead.appendChild(row1)
        let x=2
        ticketData.data.forEach(item => {
        //console.log(item.resolver)console.log(item)
            if(item.resolver==userId && des==0){
                if(item.status==2){

                
                var time = document.createElement('tr')

                var row_data1=document.createElement('td')
                row_data1.innerHTML=item.id
                var row_data2 =document.createElement('td')
                row_data2.innerHTML=item.amount
                var row_data3= document.createElement('td')
                row_data3.innerHTML=new Date(item.submitted)
        
                var row_data4= document.createElement('td')
        
                if(item.resolved==null){
                    row_data4.innerText="Not Yet resolved"
                }else{
                    row_data4.innerHTML=new Date(item.resolved)
                }
        
                var row_data5=document.createElement('td')
        
                if(item.resolver==null||item.resolver==0){
                    row_data5.innerHTML="Pending Assignment"
                }else{
                    var ts = item.resolver
                    aU.data.forEach(useA => {
                        
                        if(ts==useA.id){
                            row_data5.innerHTML=useA.firstName
                        }
                        
                    });
        
                }
        
                var row_data6=document.createElement('td')
                row_data6.innerHTML=item.description
                var row_data9=document.createElement('td')
                row_data9.innerHTML="Approved"
            row_data9.style.backgroundColor="#A8F387"

            var row_data7=document.createElement('td')
        if(item.type==1){
            row_data7.innerHTML="Lodging"
        }
        if(item.type==2){
            row_data7.innerHTML="Travel"
        }
        if(item.type==3){
            row_data7.innerHTML="Food"
        }

        var row_data8=document.createElement('td')
        var tp = item.author
        aU.data.forEach(useB => {
            if(tp==useB.id){    
            row_data8.innerHTML= useB.firstName
        }
           
        });
        
        time.appendChild(row_data1)
        time.appendChild(row_data2)
        time.appendChild(row_data3)
        time.appendChild(row_data4)
        time.appendChild(row_data5)
        time.appendChild(row_data6)
        time.appendChild(row_data7)
        time.appendChild(row_data8)
        time.appendChild(row_data9)
        tbody.appendChild(time)
        x=x+1

        let reorderId = document.getElementById('RI')
        reorderId.onclick=async function reId(){
           // tickerElem.innerHTML=``;

           if(sortv==1){
               sortv=2;
               filldataA();
           }else{
               sortv=1
            filldataA();
           }
            
        }

        let reorderAmount = document.getElementById('AT')
        reorderAmount.onclick=async function reAt(){
            if(sortv==3){
                sortv=4;
                filldataA();

            }else{
                sortv=3;
                filldataA();
            }
        }

        let reorderSD = document.getElementById('SD')
        reorderSD.onclick=async function RSD(){
            if(sortv==5){
                sortv = 6;
                filldataA();

            }else{
                sortv=5;
                filldataA();
            }
        }

        let reorderRD = document.getElementById('RD')
        reorderRD.onclick= async function RDS(){
            if(sortv==7){
                sortv = 8;
                filldataA();
            }else{
                sortv = 7;
                filldataA();
            }
        }
           } }

           if(item.resolver==userId && des==1){
            if(item.status==3){
                 
                var time = document.createElement('tr')

                var row_data1=document.createElement('td')
                row_data1.innerHTML=item.id
                var row_data2 =document.createElement('td')
                row_data2.innerHTML=item.amount
                var row_data3= document.createElement('td')
                row_data3.innerHTML=new Date(item.submitted)
        
                var row_data4= document.createElement('td')
        
                if(item.resolved==null){
                    row_data4.innerText="Not Yet resolved"
                }else{
                    row_data4.innerHTML=new Date(item.resolved)
                }
        
                var row_data5=document.createElement('td')
        
                if(item.resolver==null||item.resolver==0){
                    row_data5.innerHTML="Pending Assignment"
                }else{
                    var ts = item.resolver
                    aU.data.forEach(useA => {
                        
                        if(ts==useA.id){
                            row_data5.innerHTML=useA.firstName
                        }
                        
                    });
        
                }
        
                var row_data6=document.createElement('td')
                row_data6.innerHTML=item.description
                var row_data9=document.createElement('td')
                row_data9.innerHTML="Denied"
                row_data9.style.backgroundColor="#E20A4A"
                var row_data7=document.createElement('td')
                if(item.type==1){
                    row_data7.innerHTML="Lodging"
                }
                if(item.type==2){
                    row_data7.innerHTML="Travel"
                }
                if(item.type==3){
                    row_data7.innerHTML="Food"
                }
        
                var row_data8=document.createElement('td')
                var tp = item.author
                aU.data.forEach(useB => {
                    if(tp==useB.id){    
                    row_data8.innerHTML= useB.firstName
                }
                   
                });
                
                time.appendChild(row_data1)
                time.appendChild(row_data2)
                time.appendChild(row_data3)
                time.appendChild(row_data4)
                time.appendChild(row_data5)
                time.appendChild(row_data6)
                time.appendChild(row_data7)
                time.appendChild(row_data8)
                time.appendChild(row_data9)
                tbody.appendChild(time)
                x=x+1
        
                let reorderId = document.getElementById('RI')
                reorderId.onclick=async function reId(){
                   // tickerElem.innerHTML=``;
        
                   if(sortv==1){
                       sortv=2;
                       filldataA();
                   }else{
                       sortv=1
                    filldataA();
                   }
                    
                }
        
                let reorderAmount = document.getElementById('AT')
                reorderAmount.onclick=async function reAt(){
                    if(sortv==3){
                        sortv=4;
                        filldataA();
        
                    }else{
                        sortv=3;
                        filldataA();
                    }
                }
        
                let reorderSD = document.getElementById('SD')
                reorderSD.onclick=async function RSD(){
                    if(sortv==5){
                        sortv = 6;
                        filldataA();
        
                    }else{
                        sortv=5;
                        filldataA();
                    }
                }
        
                let reorderRD = document.getElementById('RD')
                reorderRD.onclick= async function RDS(){
                    if(sortv==7){
                        sortv = 8;
                        filldataA();
                    }else{
                        sortv = 7;
                        filldataA();
                    }
                }
            }
        
        }
           

        });
}



let goback = document.getElementById("Back-btn")

goback.onclick=async function(){

    window.location = `${domain}/menuadmin?id=${userId}`
}

let seeA = document.getElementById("see-a")

seeA.onclick=async function(){
    des = 0
    filldataA();
}

let seeD = document.getElementById("see-d")

seeD.onclick=async function(){
    des = 1
    filldataA();
}