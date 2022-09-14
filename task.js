function validatePIN (pin) {
    console.log(parseInt(pin))
      //   toString(), toNumber(), indexOf()
        if(pin.indexOf('.') > -1 ){
          return false;
        }else if(pin.indexOf('-') > -1){
          return false;
        }else{
          if( isNaN(parseInt(pin)) ){ // isNaN( NaN)
              return false;
          }else{
              if(pin.length == 4 || pin.length == 6){
              return true;
              }else{
                  return false;
              }
          }
        }
      }
  
      console.log(validatePIN('6150&2'));


    //   onkeypress and onkeydown -> differnce 

    // function calculator(){
        function sum(){}

        sum();
      
    // }


    caclulator(2,1)

    // calc:

    var calculator = {
      x:0,
      y:0,
      add: function(){
          console.log(this.x + this.y)
      }
  }
  
  console.log(calculator.add());
  calculator.x = 10;