const submit = () =>{
    // retrieve elements
var nameElement = document.getElementById("name");
var regionElement = document.getElementById("Region");

// retrieving input values

const name = String (nameElement.value);
const Region = String (regionElement.value);


      // name validation

      if (name != "" || Region!= "") {
        // alert('success');
        document.getElementById("results").textContent=(name + ' ' + 'you have been booked for' +' ' +Region);
            // send an AJAX request to save the task


    }
        else{
            alert('please enter valid details');
        }
    }

        $(document).ready(function(){
            $('.modal').modal();

            $("form").submit(function(){
                var  name = $('input').val();
                var  Region = $('input').val();
                console.log(name, Region);
                var id = $('form').attr('data-id');
                $.ajax({
                    method: 'post',
                    url: 'DATABASE_URL'+id,
                    headers: {'Content-Type': 'application/json'},
                    data:{
                        'name': name,
                        'Region': Region
                    },
                    error: function(err){
                        console.log(err)
                    }
                })
            })
         })

