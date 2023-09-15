function rot13(str) {
    
    var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    var resultStr = [];
   
    for(let k=1; k<27; k++){
        console.log(k)
    for(let i=0; i<str.length; i++){
        
        let d=str[i]
        for(let j =0; j<alphabets.length; j++){
            
            if(d === alphabets[j]){
               l=d
                C= (j-k)%26;
            
                if(C<0){
                 C=26+C
                }
                
                
                resultStr[i] =(alphabets[C]);
            }
        }
    
    
  };console.log(resultStr)}

}

  rot13("HELLOWORLD")


 