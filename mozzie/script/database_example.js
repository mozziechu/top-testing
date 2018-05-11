var package = __package__;
var _ =  package.import('lodash');
var process = package.import('process');
var tui = package.import('tui');
var sys = package.import('sys');
var database = package.import('database');
print(package.libraryPaths());
print(sys.osType() + ' ' + sys.osName() + ' ' + sys.osVersion());
_.forEach(process.argv(), function(n){
    print("argv = " + n);
});

database.addConnection({database_type:'QPSQL',
                        database_host:'139.196.104.13:5433',
                        database_name:'TOPMES_SNAPSHOT_V6',
                        database_user:'toplinker',
                        database_pwd:'TopLinker0510'});

var data = database.query("", function(query){
   var tmp = query.selectArrayMap({table:'sys_user', field:'*'});
    return {err:query.errorString(), data:tmp};
});

print(JSON.stringify(data));

var data = database.query("", function(query){
   var tmp = query.insertRow({table:'a_test', data:{name:'bb'},  returnid:'id'});
    return {err:query.errorString(), data:tmp};
});

print(JSON.stringify(data));

/*
(function () {
    var query = database.query();
    query1 = query;
    var data = query.selectMap({table:'sys_user', field:'*'});
    print(JSON.stringify(data));
    //query = undefined;
    //process.gc();
    query.close();

})();
*/
//print("gc---------------");
//process.gc();

//var window = tui.mainWindow();
//window.show();
//tui.exec();


