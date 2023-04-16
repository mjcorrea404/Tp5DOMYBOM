let numeroMagico = Math.floor(Math.random() * 100) + 1;
            
            function adivinar() {
                
                let numeroUsuario = document.getElementById("numero").value;
                
                
                if (numeroUsuario == numeroMagico) {
                    alert("¡Felicidades! Adivinaste el número.");
                } else if (numeroUsuario > numeroMagico) {
                    alert("El número que ingresaste es mayor que el número mágico.");
                } else {
                    alert("El número que ingresaste es menor que el número mágico.");
                }
            }