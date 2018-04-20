var pg = require('pg');

// 数据库配置
var config = {
    user: 'toplinker',
    database: 'WMS_TEST',
    password: 'TopLinker0510',
    host: '139.196.104.13',
    port: '5433',
    poolSize: 5,
    poolIdleTimeout: 30000,
    reapIntervalMillis: 10000
    // // 扩展属性
    // max:20, // 连接池最大连接数
    // idleTimeoutMillis:3000, // 连接最大空闲时间 3s
}

var pool = new pg.Pool(config);

// 查询
pool.connect(function (err, client, done) {
    if (err) {
        return console.error('数据库连接出错', err);
    }
    // 简单输出个 Hello World
    client.query('SELECT $1::int AS ppp', ['1'], function (err, result) {
        done(); // 释放连接（将其返回给连接池）
        if (err) {
            return console.error('查询出错', err);
        }
        console.log(result.rows[0].ppp); //output: Hello World
    });
});


pool.connect(function (err, client, done) {
    if (err) {
        return console.error('数据库连接出错', err);
    }
    // 简单输出个 Hello World
    client.query("Select * FROM wms_warehouse_stockin_detail_201804 WHERE id = $1",['266'], function (err, result) {
        done(); // 释放连接（将其返回给连接池）
        if (err) {
            return console.error('查询出错', err);
        }
        console.log(result.rows); //output: Hello World
    });
});
   


























   

// // 在表test中插入、修改、删除数据，共两个字段 (name, age)
// pool.connect().then(client => {
//     // insert 数据
//     client.query("INSERT INTO test(name, age) VALUES($1::varchar, $2::int)", ["xiaoming", "20"]).then(res => {
//         console.log("Insert Success")
//         // 如果是自增ID，有返回值的，在res里
//         return res;
//     }).then(res => {
//         // 查询xiaoming
//         return client.query("Select * FROM test WHERE name = $1", ["xiaoming"]);
//     }).then(res => {
//         // 输出结果，看是否插入成功
//         console.log(res.rows[0])
//     }).then(res => {
//         // update 数据，将age改为21
//         return client.query("UPDATE test SET age=$1 WHERE name=$2", [21, "xiaoming"])
//     }).then(res => {
//         // 再查询一次xiaoming
//         return client.query("Select * FROM test WHERE name = $1", ["xiaoming"]);
//     }).then(res => {
//         // 再输出结果，看是否改为了21
//         console.log(res.rows[0])
//     }).then(res => {
//         // 删除数据
//         client.query("DELETE FROM test WHERE name=$1", ["xiaoming"])
//     }).then(res => {
//         // 最后再查询一次xiaoming
//         res = client.query("Select * FROM test WHERE name = $1", ["xiaoming"]);
//         // 释放连接
//         client.release()
//         return res
//     }).then(res => {
//         // 再输出结果，没数据 undefined
//         console.log(res.rows[0])
//     })
// })

// pool.on("error", function (err, client) {
//     console.log("error --> ", err)
// })

// pool.on('acquire', function (client) {
//     console.log("acquire Event")
// })

// pool.on('connect', function () {
//     console.log("connect Event")
// })