var package = __package__;
var _ =  package.import('lodash');
var process = package.import('process');
var tui = package.import('tui');
var sys = package.import('sys');
var database = package.import('database');
var table = package.import('table/table.json');

// sys.env('');
// sys.setEnv('','');
// print(sys.stdinReadAll()); // 控制台写文本
// print(sys.stdinReadLine()); // 控制台写单行文本
// sys.stdoutWrite([]); 
print(sys.osType() + ' ' + sys.osName() + ' ' + sys.osBit()+' '+ sys.osVersion()); // sys.osType() 系统类型 + sys.osName() 名称 + sys.osBit() 位数 + sys.osVersion() 版本
print(sys.osKernelType() + ' ' + sys.osKernelVersion()); // sys.osKernelType() 系统内核类型 + sys.osKernelVersion()版本
print(sys.hostName()); //主机名
// sys.isFileExists('');
// sys.isDirExists('');
var a = sys.readFileAll('table/table.json'); // 读文件内容
print(a);
var b = sys.readFileLines('table/table.json'); // 按行读文件内容
print(b);

sys.writeFile('c:/tmp/rrr.txt','ssssss');
sys.writeFile('c:/tmp/sss.txt','ssssss');
sys.removeFile('c:/tmp/sss.txt');

sys.exec("C:\Program Files\Typora\Typora.exe"); 
sys.logger();

var lsdir = sys.lsDir('c:/tmp');
sys.writeFile("c:/tmp/ttt.txt", JSON.stringify(lsdir));