
 function config(){
	 alert("set configuration");
 }
  
   function info(){
	 alert("set info");
 }
  
   function add(){
	      BootstrapDialog.show({
            message: 'Hi Apple!'
        });
	// alert("add");
 }
 


function addCat(){
	
	
	 $(".alert-success").alert();
	 $(".alert-success").show()
	window.setTimeout(function() { $(".alert-success").alert('close'); }, 3000);

	//$(".alert-danger").alert();
	//$(".alert-danger").show()
	//window.setTimeout(function() { $(".alert-danger").alert('close'); }, 3000);	
	
}