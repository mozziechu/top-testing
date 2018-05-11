var package = __package__;
var _ = package.import('lodash');
var process = package.import('process');
var sys = package.import('sys');
var tui = package.import('tui');
var pgDB = package.import('database');
// var t = package.import('data');

// package.addLibraryPath('F:/testing');
// print(package.libraryPaths());
// print(sys.osType() + ' ' + sys.osName() + ' ' + sys.osVersion());
// _.forEach(process.argv(), function(n){
//     print("argv = " + n);
// });



// document.write('<script type="text/javascript"  src="data.js"></script>');
// var table = package.import("data.js");

pgDB.addConnection({
    database_type: 'QPSQL',
    database_host: '139.196.104.13:5433',
    database_name: 'WMS_TEST',
    database_user: 'toplinker',
    database_pwd: 'TopLinker0510'
})

/**
 * 获取表映射
 */
// 收料
var db_in = 'wms_warehouse_stockin';
var db_in_detail = 'wms_warehouse_stockin_detail_201804';
// 备料
var db_out = 'wms_warehouse_stockout';
var db_out_detail = 'wms_warehouse_stockout_detail_201804';
// 发料单
var db_out_req = 'wms_warehouse_stockout_request_201804';
var db_out_req_detail = 'wms_warehouse_stockout_request_detail_201804';
// 料盒
var db_out_tary_detail = 'wms_warehouse_stockout_tray_detail_201804'
// 库存
var db_inventory = 'wms_warehouse_inventory';
// 盘点
var db_check = 'wms_warehouse_check';
var db_check_detail = 'wms_warehouse_check_detail_201804';
// PO 
var db_po = 'scm_purchase_order';
var db_po_detail = 'scm_purchase_order_detail';

/**
 * SQL Manage
 */
// var queryIn = pgDB.query('', function (query) {
//     var tmp = query.selectArrayMap({
//         table: db_in,
//         field: '*'
//     });
//     return {
//         err: query.errorString(),
//         data: tmp
//     };
// });
// console.log(JSON.stringify(queryIn));

/**
 * 入库
 */
var deleteIn = pgDB.query('', function (query) {
    var tmp_0 = query.execSql('delete from ' + db_in);
    print("????");
    return {
        err: query.errorString(),
        data: "deleteIn"
    };
});

/**
 * 入库detail
 */
var deleteInDetail = pgDB.query('', function (query) {
    var tmp_1 = query.execSql('delete from ' + db_in_detail);
    return {
        err: query.errorString(),
        data: "deleteInDetail"
    };
});

/**
 * 库存
 */
var deleteInventory = pgDB.query('', function (query) {
    var tmp_2 = query.deleteRow({table: db_inventory,where: '1=1'});
    return {
        err: query.errorString(),
        data: "deleteInventory"
    };
});

/**
 * 出库
 */
var deleteOut = pgDB.query('', function (query) {
    var tmp_3 = query.deleteRow({table: db_out,where: '1=1'});
    return {
        err: query.errorString(),
        data: "deleteOut"
    };
});

/**
 * 出库detail
 */
var deleteOutDetail = pgDB.query('', function (query) {
    var tmp_3 = query.deleteRow({table: db_out_detail,where: '1=1'});
    return {
        err: query.errorString(),
        data: "deleteOutDetail"
    };
});

/**
 * 盘点
 */
var deleteCheck = pgDB.query('', function (query) {
    var tmp_4 = query.deleteRow({table: db_check,where: '1=1'});
    return {
        err: query.errorString(),
        data: "deleteCheck"
    };
});
/**
 * 盘点detail
 */
var deleteCheckDetail = pgDB.query('', function (query) {
    var tmp_5 = query.deleteRow({table: db_check_detail,where: '1=1'});
    return {
        err: query.errorString(),
        data: "deleteCheckDetail"
    };
});

/**
 * 料盒detail
 */
var deleteOutTaryDetail = pgDB.query('', function (query) {
    var tmp_5 = query.deleteRow({table: db_out_tary_detail,where: '1=1'});
    return {
        err: query.errorString(),
        data: "deleteOutTaryDetail"
    };
});

/**
 * PO
 */
var deletePO = pgDB.query('', function (query) {
    var tmp_5 = query.deleteRow({table: db_po,where: '1=1'});
    return {
        err: query.errorString(),
        data: "deletePO"
    };
});

/**
 * POdetail
 */
var deletePODetail = pgDB.query('', function (query) {
    var tmp_5 = query.deleteRow({table: db_po_detail,where: '1=1'});
    return {
        err: query.errorString(),
        data: "deletePODetail"
    };
});

console.log(JSON.stringify(deleteIn) + '\n');
console.log(JSON.stringify(deleteInDetail) + '\n');
console.log(JSON.stringify(deleteInventory) + '\n');
console.log(JSON.stringify(deleteOut) + '\n');
console.log(JSON.stringify(deleteOutDetail) + '\n');
console.log(JSON.stringify(deleteCheck) + '\n');
console.log(JSON.stringify(deleteCheckDetail) + '\n');
console.log(JSON.stringify(deletePO) + '\n');
console.log(JSON.stringify(deletePODetail) + '\n');