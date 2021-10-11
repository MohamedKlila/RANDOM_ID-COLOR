
$(document).ready(function(){ var clicks = 0; 
    
    $("#btn1").click(function(){
        clicks++; 
              
     









        function GetTodayDate() {
            var tdate = new Date();
            var dd = tdate.getDate(); 
            var MM = tdate.getMonth(); 
            var yyyy = tdate.getFullYear(); 
            var currentDate= dd + "-" +( MM+1) + "-" + yyyy;
            return currentDate;  
         }    
         document.getElementById("wiiw").innerHTML=(GetTodayDate());















         var dt = new Date();

              var time = dt.getHours() + ":" + dt.getMinutes()+ ":" + dt.getSeconds();





         document.getElementById("wiw").innerHTML=(time);
         console.log(GetTodayDate());
    let app = document.querySelector('#app');
    let h= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let color =[];  
    for(let i=0 ;i<6;i++){
    color.push(h[Math.floor(Math.random() * h.length-1)]);

    }; 
 
    
    //for (let i in color) {  console.log(i); // affiche 0, 1, 2, "toto",
                        // "arrCustom" et "objCustom  }
          let f = `#${color.join("")}`;
          let tr =[];  
                 $("f").css("background-color",f);

            
    for (var i = 0; i < 1; i++) {
        tr[i]=f;
      tr.push(color[i]); 
var s=tr[i];
console.log(tr[i]);};








function copyToClipboard(element) {
    var $temp = $("element");
    $temp.val($('+f+').text()).select();
    ("'+f+'").execCommand("copy");
    $temp.remove();
  }






$('.myTable tbody').after('<tr><th >'+clicks+'</th>         <td>' + '<button  onclick="copyToClipboard(#766687)" style="width: 100% ; background-color:'+f+'" ;  id='+f+' value="'+f+'" title="'+f+'"  onclick="copyToClipboard(#p2)" ">Copy ID</button>' + '</td> <td id="'+clicks+'" style="background-color:'+f+';"></th><th id="'+clicks+'">'+tr[0]+'</th>  </tr>');//'+$("#clicks").css("background-color",
     
});
        
});