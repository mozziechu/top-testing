#! encoding=utf-8
# auth ： 
# 
import requests,os
import HTMLTestRunner
import unittest
import importlib,sys
importlib.reload(sys)

class ParametrizedTestCase(unittest.TestCase):
    def __init__(self, methodName='runTest', param=None):
        super(ParametrizedTestCase, self).__init__(methodName)
        self.param = param
		
    @staticmethod
    def parametrize(testcase_klass, param=None):
        testloader = unittest.TestLoader()
        testnames = testloader.getTestCaseNames(testcase_klass)
        suite = unittest.TestSuite()
        for name in testnames:
            suite.addTest(testcase_klass(name, param=param))
        return suite
		
class getGps(ParametrizedTestCase):
    def setUp(self):
        r = requests.get('https://api.github.com/user', auth=('1924264138@qq.com', 'wx@059506'))
        sys.exit()
        self.result = r;
		
    def test_getGps(self):
        "接口测试"
        temp_data = int(self.param['routeId'])
        data = {'routeId':temp_data}
        result = self.result
        print(result)
        self.assertEqual(result.status,"ok","routeId:"+str(temp_data)+",is not in line class info!")


		
if __name__ == "__main__":
    suite = unittest.TestSuite() #定义单元测试容器
    # excel = ReadExcel.ReadExcel(path,0)
    # data = excel.readexcel()
    # for i in range(0,len(data)):
               # temp_dict = data[i]
    runner = HTMLTestRunner(stream=fp,
                            title='Guest Manage System Interface Test Report',
                            description='Implementation Example with: ')
    filename = "./TestGpsResult.html"
    fp = open(filename, 'wb')
    #定义测试报告
    runner = HTMLTestRunner.HTMLTestRunner(
        stream=fp,
        title=u'接口测试',
        description=u'用例执行情况：')
    #运行测试用例
    runner.run(suite)