function printRange(start,end,skip){
    if (end === undefined){
        end = start;
        start = 0;
    }
    if (skip === undefined){
        skip = 1;
    }
    for (var i = start; i < end; i += skip){
        console.log(i);
    }
}