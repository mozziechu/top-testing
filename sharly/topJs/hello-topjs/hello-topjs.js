var package = __package__;
var lodash = package.import('lodash');
var process = package.import('process');
var database = package.import('database');
var sys = package.import('sys');


var librarypaths = package.libraryPaths();
print(librarypaths);
// var aaa = lodash.join(['a', 'b', 'c'], '~');
// print(aaa);


database.addConnection({
    database_type: 'QPSQL',
    database_host: '139.196.104.13:5433',
    database_name: 'WMS_TEST',
    database_user: 'toplinker',
    database_pwd: 'TopLinker0510'
}, 'TOPWMS-DB');



var data1 = database.query("TOPWMS-DB", function (query) {
    var tmp = query.selectArray({
        table: 'sys_user',
        field: '*',
        where: {
            username: 'admin'
        }
    });
    return {
        err: query.errorString(),
        data1: tmp
    };
});

var data2 = database.query("TOPWMS-DB", function (query) {
    var tmp = query.selectMap({
        table: 'sys_user',
        field: '*',
        where: {
            username: 'admin'
        }
    });
    return {
        err: query.errorString(),
        data2: tmp
    };
});

var data3 = database.query("TOPWMS-DB", function (query) {
    var tmp = query.selectValue({
        table: 'sys_user',
        field: 'password',
        where: {
            username: 'admin'
        }
    });
    return {
        err: query.errorString(),
        data3: tmp
    };
});

var data4 = database.query("TOPWMS-DB", function (query) {
    var tmp = query.selectArrayArray({
        table: 'sys_user',
        field: '*',
        where: {
            username: 'admin'
        }
    });
    return {
        err: query.errorString(),
        data4: tmp
    };
});

var data5 = database.query("TOPWMS-DB", function (query) {
    var tmp = query.selectArrayMap({
        table: 'sys_user',
        field: '*',
        where: {
            username: 'admin'
        }
    });
    return {
        err: query.errorString(),
        data5: tmp
    };
});

var data6 = database.query("TOPWMS-DB", function (query) {
    var tmp = query.selectArrayData({
        table: 'sys_user',
        field: '*',
        where: {
            username: 'admin'
        }
    });
    return {
        err: query.errorString(),
        data6: tmp
    };
});

var data7 = database.query("TOPWMS-DB", function (query) {
    var tmp = query.selectMapMap({
        table: 'sys_user',
        uniquefield:'id',
        field: '*',
    });
    return {
        err: query.errorString(),
        data7: tmp
    };
});

var data8 = database.query("TOPWMS-DB", function (query) {
    var tmp = query.selectMapValue({
        table: 'sys_user',
        uniquefield:'username',
        field: '*',
        valuefield:"password"
    });
    // var tmp = query.selectMapValue({
    //     table: 'sys_user',
    //     field: 'username,password',
    // });
    return {
        err: query.errorString(),
        data8: tmp
    };
});

var data9 = database.query("TOPWMS-DB", function (query) {
    var tmp = query.selectArrayValue({
        table: 'sys_user',
        field: 'password',
        where: {
            username: 'admin'
        }
    });
    return {
        err: query.errorString(),
        data9: tmp
    };
});

// print(JSON.stringify(data1));
// print(JSON.stringify(data2));
// print(JSON.stringify(data3));
// print(JSON.stringify(data4));
// print(JSON.stringify(data5));
// print(JSON.stringify(data6));
// print(JSON.stringify(data7));
// print(JSON.stringify(data8));
// print(JSON.stringify(data9));


// var data10 = database.query("TOPWMS-DB", function (query) {
//     var tmp = query.insertRow({
//         table: 'wms_warehouse_stockin_detail_201804',
//         data: {
//             stockin_id: '70',
//             material_code: 'A000005-3',
//             supplier_code: 'g001',
//             supplier_name: '供应商1',
//             request_bits_count: '78910',
//             stockin_time: '2018-04-17',
//             status: 'uncollected',
//         },
//         returnid: 'id'
//     });
//     return {
//         err: query.errorString(),
//         data: tmp
//     };
// });

// print(JSON.stringify(data));
// var arrays = [1,2,3,4,5,6,7,8];
// lodash.forEach(arrays, function(s){
//     print(s);
// });

var data10 = database.query("TOPWMS-DB", function (query) {
    var tmp = query.insertRow({
        table: 'wms_warehouse_stockin_detail_201804',
        data: {
            stockin_id: '70',
            material_code: 'A000005-3',
            supplier_code: 'g001',
            supplier_name: '供应商1',
            request_bits_count: '78910',
            stockin_time: '2018-04-17',
            status: 'uncollected',
        },
        returnid: 'id'
    });
    return {
        err: query.errorString(),
        data: tmp
    };
});


print(sys.osType());
print(sys.osName());
print(sys.osBit());
print(sys.osVersion());
print(sys.osKernelType());
print(sys.osKernelVersion());