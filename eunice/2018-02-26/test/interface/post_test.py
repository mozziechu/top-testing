import unittest
import requests
import os, sys, json
parentdir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, parentdir)


class getAutoStartServiceWatchedListTest(unittest.TestCase):
    ''' 获取自启动服务信息信息 '''

    def setUp(self):
        self.base_url = "http://139.196.104.13:8082/mics/call"

    def tearDown(self):
        print(self.result)

    def test_getAutoStartServiceWatchedList(self):
        payload = {"method":"getAutoStartServiceWatchedList","params":"{'service_type':'http'}","service":"topmics-admin-mics","timeout":30000,"waitReply":True}
        # data = json.dumps(payload)
        r = requests.post(self.base_url, data=payload)
        self.result = r.text
        # self.assertEqual(self.result['status_code'], 200)
        # self.assertEqual(self.result['message'], 'parameter error')

if __name__ == '__main__':
    unittest.main()
