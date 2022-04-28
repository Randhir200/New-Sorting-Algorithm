function runProgram(input) {
    input = input.trim().split("\n");
     var [n,k] = input[0].trim().split(" ").map(Number);
     var arr = input[1].trim().split(" ").map(Number);
     var arr2 = [];
      for(var a=0;a<n;a++){
           arr2.push(arr[a]%k) 
       }
    
    for(var i=0;i<n;i++){
            for(var j=0;j<n-i-1;j++){
                if(arr2[j+1]<arr2[j]){
                    swap(arr,arr2,j,j+1);
                }
            }
        }
    console.log(arr.join(" "))
     
    }
    
    function swap(arr,arr2,a,b){
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        
        var temp = arr2[a];
        arr2[a] = arr2[b];
        arr2[b] = temp;
    }
    if (process.env.USER === "") {
      runProgram(``);
    } else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
        read += input;
      });
      process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }
    
    