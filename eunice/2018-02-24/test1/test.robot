*** Settings ***
# 用于引用Library，当前没有引用，默认为空
Library  RequestsLibrary
Library  Collections

*** Test Cases *** 
# 用于编写测试用例
#顶格写，表示用例名称
# testcase
# log前面四个空格表示该行为testcase的一行语句 log为打印关键字
# robot framework 为打印的字符串，注意关键字与字符串之间的间距为四个空格
    # log    robot framework
testget
    # ${header}    Create Dictionary    Content-Type=application/json   #post请求
    # 通过"Create Dictionary"关键字定义payload变量，payload的值是eid=1
    ${payload}=    Create Dictionary    eid=1
    # 通过"Create Session"关键字创建Http会话服务器。event为该会话的别名。最后一个为url
    Create Session    event    http://139.196.104.13:8082/admin
    # Create Session    event    http://127.0.0.1:8000/api    ${header} #post请求
    # 通过"Get Request"关键字发起一个Get请求，接口为url+/get_event_list/。params是参数
    ${r}=    Get Request    event    /getAllServiceState/    params=${payload}
    # ${r}=    Get Request    event    /get_event_list/    data=${payload} post请求
    # 通过r.startus_code获取到Http的状态码，通过"Should Be Equal As Strings"关键字判断是否为200
    Should Be Equal As Strings    ${r.startus_code}    200
    # 通过${r.json()}可将json格式的返回值转发为字典，输出
    log    ${r.json()}
    ${dict}    Set variable    ${r.json()}
    #断言结果 返回值处理
    ${msg}    Get From Dictionary    ${dict}    message
    Should Be Equal    ${msg}    success
    ${sta}    Get From Dictionary    ${dict}    status
    ${status}    Evaluate    int(200)
    Should Be Equal    ${sta}    ${status}
