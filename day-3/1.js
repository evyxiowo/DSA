function toh(N, fromm, to, aux) {
    let count = 0;
    function helper(N, fromm, to, aux) {
        if (N === 1){
            count++;
            console.log("moved disk" + N + " from rod" + fromm + " to rod" + to);
            return;
        }
        helper(N-1, fromm,aux, to);
        count++;
        console.log("moved disk" + N + " from rod" + fromm + " to rod" + to);
        helper(N-1, aux, to, fromm);
    }
    helper(N, fromm, to, aux);
    return count;
}

