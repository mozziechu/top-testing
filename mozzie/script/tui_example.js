var package = __package__;
var _ =  package.import('lodash');
var process = package.import('process');
var tui = package.import('tui');
var sys = package.import('sys');
var database = package.import('database');
var logger = sys.logger();
print(package.libraryPaths());
print(sys.osType() + ' ' + sys.osName() + ' ' + sys.osVersion());
_.forEach(process.argv(), function(n){
    print("argv = " + n);
});
print(process.appBinDir());
print(process.execFileDir());
logger.setDebugLevel(5);
logger.debug('start logger');

var lineedit = tui.newLineEdit();
lineedit.set({value:'abcd',echo_mode:'Password'});
lineedit.show();

var window = tui.newMainWindow();
window.set({window_title: 'My Window111'});
var bodywgt = tui.newWidget(window);
window.setBodyWidget(bodywgt);
var vlayout = tui.newVBoxLayout(bodywgt);
vlayout.set({spacing:8, margin: 16});
var gridlayout = tui.newGridLayout();
gridlayout.set({hspacing:20, vspacing:10});
vlayout.packLayout(gridlayout);

var pushbtn = tui.newPushButton(window);
pushbtn.set({'text': 'My PushButton1'});
gridlayout.packWidget(pushbtn, 1, 1, 2, 2);
var pushbtn2 = tui.newPushButton(window);
pushbtn2.set({text:'Button2'});
gridlayout.packWidget(pushbtn2, 2, 1);
var pushbtn3 = tui.newPushButton(window);
pushbtn3.set({text:'Button3'});
gridlayout.packWidget(pushbtn3, 2, 2);
gridlayout.setRowStretch(2, 1);
gridlayout.setColumnStretch(2, 1);

var formlayout = tui.newFormLayout();
formlayout.set({column_count:2, separator:':'});
vlayout.packLayout(formlayout);
formlayout.packWidget(tui.newLineEdit(window), "Label1", "Units1");
formlayout.packWidget(tui.newLineEdit(window),  tui.newPushButton(window), "Units2");

var numberedit = tui.newLineEdit(window);
numberedit.setValidMask("INT(-1,10)");
formlayout.packWidget(numberedit, "NumberEdit", "mm");

var combobox = tui.newComboBox(window);
combobox.set({searchable:true, item_list:[{name:'1', text:'Item 1', icon:'ok'}, {name:'2', text:'Item 2', icon:'ok'},{name:'3', text:'Item 3', icon:'ok'}]});
combobox.setCurrentName('a');
combobox.signal.connect(this, function(){numberedit.set('value', combobox.get('value'));});
formlayout.packWidget(combobox, 'ComboBox');


formlayout.packWidget(tui.newLineEdit(window), "Remark", "", 2, "", 1);




pushbtn.signal.connect(this, function(type, data, uuid){
    try{
    if (type == 'clicked'){
        print("button clicked...");
        window.close();
        lineedit.setWindowTitle('eeeee');
        lineedit.set({echo_mode:'Normal'});
    }
    }
    catch(err) {
        print('ERROR222=' + err.toString());
    }
});

window.show();
tui.exec();

