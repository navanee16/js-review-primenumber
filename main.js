let x=50
for (i=2; i<=x; i++) {
    if (i%2 !==0 && i%3 !==0 && i%5 !==0 && i%7 !==0) {
        console.log(i+"number");
    } else if(i==2 || i==3 || i==5|| i==7) {
        console.log(i+"number");
    }
}