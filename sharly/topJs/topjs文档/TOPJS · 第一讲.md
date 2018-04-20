# TOPJS · 第一讲

## package 组件

![](D:\ByTest\study\topJs\topjs文档\package.jpg)



## process 组件

![](D:\ByTest\study\topJs\topjs文档\process.jpg)

## sys 组件

![](D:\ByTest\study\topJs\topjs文档\sys.jpg)



```js
writefile iMode = 'overwrite' | 'append',
```



## database 组件

![](D:\ByTest\study\topJs\topjs文档\database.jpg)

* ### sqlQuery

```c++
QVariantList selectArray(const TSqlSelectorV2 &iSqlSelector);
QVariantList selectArray(const QVariantMap &iDataMap);
QVariantList selectArray(const QString &iSqlStr,
                         const QVariantMap &iFieldFormat,
                         const QVariantMap iParamMap = QVariantMap());

QVariantMap selectMap(const TSqlSelectorV2 &iSqlSelector);
QVariantMap selectMap(const QVariantMap &iDataMap);
QVariantMap selectMap(const QString &iSqlStr,
                      const QVariantMap &iFieldFormat,
                      const QVariantMap iParamMap = QVariantMap());

QVariant selectValue(const TSqlSelectorV2 &iSqlSelector);
QVariant selectValue(const QVariantMap &iDataMap);
QVariant selectValue(const QString &iSqlStr,
                         const QVariantMap &iFieldFormat,
                         const QVariantMap iParamMap = QVariantMap());

QVariantList selectArrayArray(const TSqlSelectorV2 &iSqlSelector);
QVariantList selectArrayArray(const QVariantMap &iDataMap);
QVariantList selectArrayArray(const QString &iSqlStr,
	                         const QVariantMap &iFieldFormat ,
                             const QVariantMap iParamMap = QVariantMap());

QVariantList selectArrayMap(const TSqlSelectorV2 &iSqlSelector);
QVariantList selectArrayMap(const QVariantMap &iDataMap);
QVariantList selectArrayMap(const QString &iSqlStr,
                             const QVariantMap &iFieldFormat ,
                             const QVariantMap iParamMap = QVariantMap());

QVariantMap selectArrayData(const TSqlSelectorV2 &iSqlSelector);
QVariantMap selectArrayData(const QVariantMap &iDataMap);
QVariantMap selectArrayData(const QString &iSqlStr,
                             const QVariantMap &iFieldFormat ,
                             const QVariantMap iParamMap = QVariantMap());

QVariantMap selectMapMap(const TSqlSelectorV2 &iSqlSelector);
QVariantMap selectMapMap(const QVariantMap &iDataMap);
QVariantMap selectMapMap(const QString &iSqlStr,
                             const QString &iKeyField,
                             const QVariantMap &iFieldFormat = QVariantMap(),
                             const QVariantMap iParamMap = QVariantMap());

QVariantMap selectMapValue(const TSqlSelectorV2 &iSqlSelector);
QVariantMap selectMapValue(const QVariantMap &iDataMap);
QVariantMap selectMapValue(const QString &iSqlStr,
                             const QString &iKeyField,
                             const QString &iValueField,
                             const QVariantMap &iFieldFormat = QVariantMap(),
                             const QVariantMap iParamMap = QVariantMap());

QVariantList selectArrayValue(const TSqlSelectorV2 &iSqlSelector);
QVariantList selectArrayValue(const QVariantMap &iDataMap);
QVariantList selectArrayValue(const QString &iSqlStr,
                             const QString &iValueField,
                             const QVariantMap &iFieldFormat = QVariantMap(),
                             const QVariantMap iParamMap = QVariantMap());

int selectCount(const TSqlSelectorV2 &iSqlSelector);

QVariant insertRow(const TSqlInserterV2 &iSqlInserter);
QVariant insertRow(const QVariantMap &iDataMap);
QVariant insertRow(const QString &iTableStr,
                       const QVariantMap &iDataMap,
                       const QStringList &iFields,
                       bool iReturnLastInsertId = false,
                       const QString &iReturnField = "");

void batchInsert(const QString &iTableStr,
                         const QStringList &iFields,
                         const QVariantList &iDataList);
int updateRow(const TSqlUpdaterV2 &iSqlUpdater);
int updateRow(const QVariantMap &iDataMap);
int updateRow(const QString &iTableStr,
                  const QVariantMap &iDataMap,
                  const QVariant &iWhere,
                  const QVariantMap &iUpdatePolicy = QVariantMap(),
                  const QStringList &iFields = QStringList()
                  );

QVariant replaceRow(const TSqlInserterV2 &iSqlInserter);
QVariant replaceRow(const QVariantMap &iDataMap);
QVariant replaceRow(const QString &iTableStr,
                        const QVariantMap &iDataMap,
                        const QStringList &iUniqueFields,
                        const QVariantMap &iUpdatePolicy = QVariantMap(),
                        const QStringList &iUpdateFields = QStringList(),
                        const QString &iAutoIncrField = "");

int deleteRow(const TSqlDeleterV2 &iSqlDeleter);
int deleteRow(const QVariantMap &iDataMap);
int deleteRow(const QString &iTableStr, const QVariant &iWhere);

bool execSql(const QString &iSqlStr);
bool isTableExists(const QString &iTableStr);
QStringList getTableList();
bool isFieldExists(const QString &iTableStr, const QString &iFieldStr);
QStringList getFieldList(const QString &iTableStr);

QVariantMap getTableStruct(const QString &iTableStr);
bool createTable(const QString &iTableStr, const QVariantMap &iTableStructVarMap);
bool replaceTableStruct(const QString &iTableStr, const QVariantMap &iTableStructVarMap);
bool renameTable(const QString &iSrctableStr, const QString &iDesttableStr);
bool dropTable(const QString &iTableStr);
bool setAutoIncrementStatus(const QString &iTableStr, const QString &iStatus);
bool addField(const QString &iTableStr, const QVariantMap &iFieldStructVarMap);
bool dropField(const QString &iTableStr, const QString &iFieldNameStr);
bool alterField(const QString &iTableStr, const QVariantMap &iFieldStructVarMap);

QString getNow();
QString getToday();

QString errorString() const;
TError lastError();
void clearError();
bool begin(bool iCheckConnectionBol = true);
int commit();
int rollback();
bool open(bool iCheckConnectionBol = true);
bool close();
bool resetTransNum();

bool isConnected();
QString databaseType() const;
```

* ### selector

```C++
foreach (QString k, iDataMap.keys()) {
    if (k.toUpper() == "CONNECTIONNAME" || k.toUpper() == "CONNECTION_NAME") {
        d->connectionNameStr = iDataMap.value(k,"").toString();
    }
    else if (k.toUpper() == "TABLE") {
        d->tableStr = iDataMap.value(k, "").toString();
    }
    else if (k.toUpper() == "FIELD") {
        QVariant field = iDataMap.value(k);
        if (field.type() == QVariant::List || field.type() == QVariant::StringList) {
            foreach (QVariant v, field.toList()) {
                d->fieldLst.append(v.toString());
            }
        }
        else {
            d->fieldLst.append(field.toString());
        }
    }
    else if (k.toUpper() == "WHERE") {
        TSqlDataUtilV2::fillWhere(d->where, iDataMap.value(k));
    }
    else if (k.toUpper() == "GROUP") {
        QVariant group = iDataMap.value(k);
        if (group.type() == QVariant::StringList || group.type() == QVariant::List) {
            foreach (QVariant row, group.toList()) {
                d->groupLst.append(row.toString());
            }
        }
        else {
            d->groupLst.append(group.toString());
        }
    }
    else if (k.toUpper() == "ORDER") {
        QVariant order = iDataMap.value(k);
        if (order.type() == QVariant::StringList || order.type() == QVariant::List) {
            foreach (QVariant row, order.toList()) {
                d->orderLst.append(row.toString());
            }
        }
        else if (order.isValid() && !order.isNull() && !order.toString().isEmpty()){
            d->orderLst.append(order.toString());
        }
    }
    else if (k.toUpper() == "OFFSET") {
        d->offsetInt = iDataMap.value(k).toInt();
    }
    else if (k.toUpper() == "LIMIT") {
        d->limitInt = iDataMap.value(k).toInt();
    }
    else if (k.toUpper() == "CASETYPE" || k.toUpper() == "CASE_TYPE") {
        d->caseTypeInt = iDataMap.value(k).toInt();
    }
    else if (k.toUpper() == "UNIQUEFIELD" || k.toUpper() == "UNIQUE_FIELD") {
        d->uniqueFieldStr = iDataMap.value(k).toString();
    }
    else if (k.toUpper() == "RETURNROWCOUNT" || k.toUpper() == "RETURN_ROW_COUNT") {
        d->returnRowCountBol = iDataMap.value(k).toBool();
    }
    else if (k.toUpper() == "DATABASETYPE" || k.toUpper() == "DATABASE_TYPE"){
        d->databaseTypeStr = iDataMap.value(k).toString();
    }
    else if (k.toUpper() == "USERDATA" || k.toUpper() == "USER_DATA") {
        d->userDataVar = iDataMap.value(k);
    }
    else if (k.toUpper() == "FIELDFORMAT" || k.toUpper() == "FIELD_FORMAT") {
        d->fieldFormatMap = iDataMap.value(k).toMap();
    }
    else if (k.toUpper() == "VALUEFIELD" || k.toUpper() == "VALUE_FIELD") {
        d->valueFieldStr = iDataMap.value(k).toString();
    }
}

```

* ### inserter

```C++
Q_D(TSqlInserterV2);
    foreach (QString k, iDataMap.keys()) {
        if (k.toUpper() == "CONNECTIONNAME" || k.toUpper() == "CONNECTION_NAME") {
            d->connectionNameStr = iDataMap.value(k,"").toString();
        }
        else if (k.toUpper() == "TABLE") {
            d->tableStr = iDataMap.value(k, "").toString();
        }
        else if (k.toUpper() == "FIELD") {
            QVariant field = iDataMap.value(k);
            if (field.type() == QVariant::List || field.type() == QVariant::StringList) {
                foreach (QVariant v, field.toList()) {
                    d->fieldLst.append(v.toString());
                }
            }
            else {
                d->fieldLst.append(field.toString());
            }
        }
        else if (k.toUpper() == "DATA"){
            d->dataVarMap = iDataMap.value(k).toMap();
        }
        else if (k.toUpper() == "UNIQUEFIELD" || k.toUpper() == "UNIQUE_FIELD") {
            QVariant unique = iDataMap.value(k);
            if (unique.type() == QVariant::StringList || unique.type() == QVariant::List) {
                foreach (QVariant row, unique.toList()) {
                    d->uniqueFieldLst.append(row.toString());
                }
            }
            else {
                d->uniqueFieldLst.append(unique.toString());
            }
        }
        else if (k.toUpper() == "AUTOINCREMENTFIELD" || k.toUpper() == "AUTO_INCREMENT_FIELD" || k.toUpper() == "RETURNID" || k.toUpper() == "RETURN_ID") {
            if (iDataMap.value(k).type() == QVariant::Bool) {
                if (iDataMap.value(k).toBool()) {
                    d->autoIncrementFieldStr = "id";
                }
                else {
                    d->autoIncrementFieldStr = "";
                }
            }
            else {
                d->autoIncrementFieldStr = iDataMap.value(k).toString();
            }
        }
        else if (k.toUpper() == "USERDATA" || k.toUpper() == "USER_DATA") {
            d->userDataVar = iDataMap.value(k);
        }
        else if (k.toUpper() == "UPDATEPOLICY" || k.toUpper() == "UPDATE_POLICY") {
            d->updatePolicyMap = iDataMap.value(k).toMap();
        }
    }
```

* ### updater

```c++
TSqlUpdaterV2::TSqlUpdaterV2(const QVariantMap &iDataMap):
    d_ptr(new TSqlUpdaterV2Private(this))
{
    Q_D(TSqlUpdaterV2);
    foreach (QString k, iDataMap.keys()) {
        if (k.toUpper() == "CONNECTIONNAME" || k.toUpper() == "CONNECTION_NAME") {
            d->connectionNameStr = iDataMap.value(k,"").toString();
        }
        else if (k.toUpper() == "TABLE") {
            d->tableStr = iDataMap.value(k, "").toString();
        }
        else if (k.toUpper() == "FIELD") {
            QVariant field = iDataMap.value(k);
            if (field.type() == QVariant::List || field.type() == QVariant::StringList) {
                foreach (QVariant v, field.toList()) {
                    d->fieldLst.append(v.toString());
                }
            }
            else {
                d->fieldLst.append(field.toString());
            }
        }
        else if (k.toUpper() == "DATA"){
            d->dataVarMap = iDataMap.value(k).toMap();
        }
        else if (k.toUpper() == "UNIQUEFIELD" || k.toUpper() == "UNIQUE_FIELD") {
            QVariant unique = iDataMap.value(k);
            if (unique.type() == QVariant::StringList || unique.type() == QVariant::List) {
                foreach (QVariant row, unique.toList()) {
                    d->uniqueFieldLst.append(row.toString());
                }
            }
            else {
                d->uniqueFieldLst.append(unique.toString());
            }
        }
        else if (k.toUpper() == "USERDATA" || k.toUpper() == "USER_DATA") {
            d->userDataVar = iDataMap.value(k);
        }
        else if (k.toUpper() == "WHERE") {
            TSqlDataUtilV2::fillWhere(d->where, iDataMap.value(k));
        }
        else if (k.toUpper() == "UPDATEPOLICY" || k.toUpper() == "UPDATE_POLICY") {
            d->updatePolicyMap = iDataMap.value(k).toMap();
        }
    }
}

```

* ### deleter

```C++

TSqlDeleterV2::TSqlDeleterV2(const QVariantMap &iDataMap):
    d_ptr(new TSqlDeleterV2Private(this))
{
    Q_D(TSqlDeleterV2);
    foreach (QString k, iDataMap.keys()) {
        if (k.toUpper() == "CONNECTIONNAME" || k.toUpper() == "CONNECTION_NAME") {
            d->connectionNameStr = iDataMap.value(k,"").toString();
        }
        else if (k.toUpper() == "TABLE") {
            d->tableStr = iDataMap.value(k, "").toString();
        }
        else if (k.toUpper() == "USERDATA" || k.toUpper() == "USER_DATA") {
            d->userDataVar = iDataMap.value(k);
        }
        else if (k.toUpper() == "WHERE") {
            TSqlDataUtilV2::fillWhere(d->where, iDataMap.value(k));
        }
    }
}
```

