const storage = {
    fetch(){
        const arr = [];
        if(localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++){
              if (localStorage.key(i) !== "loglevel:webpack-dev-server"){
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
              }
            }
        }
        return arr;
    },
};