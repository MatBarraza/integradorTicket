let formula = document.getElementById("formulario");

    function calcularImporte(e) {

        let importe=0,
            inputcantidad=document.getElementById("cantidad").value,
            inputcategoria=document.getElementById("categoria").value;
        
        if (inputcantidad>0) {

            e.preventDefault();

            switch (inputcategoria) {
                case "Estudiante":
                    importe=inputcantidad*200*0.2;
                    break;
                case "Trainee":
                    importe=inputcantidad*200*0.5;
                    break;
                case "Junior":
                    importe=inputcantidad*200*0.85;
                    break;
                default:
                    break;
            }

            return document.getElementById("importeapagar").innerHTML=`Total a Pagar: $${importe}`;

        }

    }

formula.addEventListener("submit", calcularImporte);

    function borrar() {
        
        document.getElementById("importeapagar").innerHTML=`Total a Pagar: $ `;

    }
