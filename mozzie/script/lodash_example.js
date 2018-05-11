var package = __package__;
var _ =  package.import('lodash');
var process = package.import('process');
var tui = package.import('tui');
var sys = package.import('sys');

print(package.libraryPaths());

print(sys.osType() + ' ' + sys.osName() + ' ' + sys.osVersion());

_.forEach(process.argv(), function(n){
    print("argv = " + n);
});

var list = [1, 2, 3, 4];
_.forEach(list, function(n){
    print("item " + n);
});


var window = tui.mainWindow();
window.show();
tui.exec();

