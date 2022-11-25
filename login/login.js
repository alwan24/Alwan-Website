function login(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username == "Basith" && password == 1023 || username == "Salim" && password == 1038 || username == "Swabeeh" && password == 1035 ||username == "Shamil" && password == 1029
    || username == "Naseef" && password == 1022  || username == "Shajeeh" && password == 1033 ||  username == "Aslah" && password == 1025 ||  username == "Shifin" && password == 1037
    ||  username == "Rubaib" && password == 1012 ||  username == "Shinas" && password == 1028 ||  username == "Fadil" && password == 1015 ||  username == "Vasil_cs" && password == 4321
    ||  username == "Salsal" && password == 1002 || username == "Sinan" && password == 1005 ||  username == "Sabeeh" && password == 1036 ||  username == "Ashhad" && password == 1032
    || username == "Nafih" && password == 1016 || username == "Rabeeh" && password == 1026  || username == "Shabeer" && password == 1010 || username == "Ajumal" && password == 1018 
    || username == "Murshid" && password == 1014 || username == "Aflah" && password == 1006 || username == "Shammas" && password == 1041 || username == "Sahal" && password == 1031
    || username == "Ihsan" && password == 1019 || username == "Salman" && password == 1039  || username == "Rinshad" && password == 998 || username == "Nihal" && password == 1030
    || username == "Juraij" && password == 1022 || username == "Basith" && password == 970 || username == "Shidad" && password == 997 || username == "Sanih" && password == 975 
    || username == "Ikram" && password == 993){
        window.open("./"+password+".html", "_blank");
    }else{
        alert("Please provide correct information!")
    }
}
