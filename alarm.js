function display_time() {

        var t = document.getElementById('mytime').value;
        var d = document.getElementById('mydate').value;
        document.getElementById('output').innerHTML = "<h2>Date and Time entered: "+d+" "+t+"</h2>";
        alarm();

    }

    function alarm() {

        var dat = new Date();
        var d = dat.getDate();
        var mo = parseInt(dat.getMonth())+1;
        var y = dat.getFullYear();
        var h = dat.getHours();
        var m = dat.getMinutes();
        if (d<10) {
            d = '0'+d;
        }
        if (mo<10) {
            mo = '0'+mo;
        }
        if (h<10) {
            h = '0'+h;
        }
        if (m<10) {
            m = '0'+m;
        }
        var al_dat = y+'-'+mo+'-'+d;
        var al_time = h+':'+m;

        if (al_time == document.getElementById('mytime').value && al_dat == document.getElementById('mydate').value) {
            alert("ALARM!!!");
            return;
        }
        setTimeout("alarm()", 5000);
    }
