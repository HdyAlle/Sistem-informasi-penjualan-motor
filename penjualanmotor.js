function calculateTotal() {
    const merkMotor = document.getElementById("merkMotor");
    const merkMotorPrice = parseInt(merkMotor.value);
    
    let aksesorisTotal = 0;
    document.querySelectorAll('input[name="aksesoris"]:checked').forEach((checkbox) => {
      aksesorisTotal += parseInt(checkbox.value);
    });
    
    let totalPrice = merkMotorPrice + aksesorisTotal;
    
    const pembayaran = document.querySelector('input[name="caraPembayaran"]:checked').value;
    let bungaDiskon = 0;
    
    if (pembayaran === "tunai") {
      bungaDiskon = totalPrice * 0.10;
      totalPrice -= bungaDiskon;
    } else if (pembayaran === "kredit") {
      bungaDiskon = totalPrice * 0.15;
      totalPrice += bungaDiskon;
    }
    
    document.getElementById("harga").value = merkMotorPrice + aksesorisTotal;
    document.getElementById("bungaDiskon").value = bungaDiskon;
    document.getElementById("total").value = totalPrice;
  }

  function resetForm() {
    document.getElementById("merkMotor").selectedIndex = 0;
    document.getElementById("velg").checked = false;
    document.getElementById("helm").checked = false;
    document.getElementById("jaket").checked = false;
    document.querySelector('input[name="caraPembayaran"][value="tunai"]').checked = true;
    document.getElementById("harga").value = '';
    document.getElementById("bungaDiskon").value = '';
    document.getElementById("total").value = '';
  }