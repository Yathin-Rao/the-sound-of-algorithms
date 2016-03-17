var t = 0;

function knuthShuffle(arr,gainvar) {
    var rand, temp, i;
 
    for (i = arr.length - 1; i > 0; i -= 1) {
        rand = Math.floor((i + 1) * Math.random());//get random between zero and i (inclusive)
        temp = arr[rand];//swap i and the zero-indexed number
        arr[rand] = arr[i];
        arr[i] = temp;
        var osc = createOscillator4(arr[i],gainvar);
        //console.log("starting ");
        osc.start(t);
        t += 0.25
        osc.stop(t);
    }
}

function runKnuthShuffle(arr){
    var originalArr = arr.slice(0);
    var gainvar;
    var numtimes = 100;
    while(numtimes > 0){
        arr = originalArr.slice(0);
        for (var i = 0; i < 4; i++) {
            gainvar = 1.0/(4-i);
            knuthShuffle(arr,gainvar);
        }
        numtimes -= 1;
    }
}
 
/*
for (var key in res) {
    print(key + "\t" + res[key]);
}
*/
