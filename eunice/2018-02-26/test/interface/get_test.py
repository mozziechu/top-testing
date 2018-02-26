import unittest
import requests
import os, sys
parentdir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, parentdir)


class GetAllServiceStateTest(unittest.TestCase):
    ''' 获取所有服务信息 '''

    def setUp(self):
        self.base_url = "http://139.196.104.13:8082/admin/getAllServiceState"

    def tearDown(self):
        print(self.result)

    def test_getAllServiceState(self):
        r = requests.get(self.base_url)
        self.result = r.json()
        # self.assertEqual(self.result['status_code'], 200)
        # self.assertEqual(self.result['message'], 'parameter error')

if __name__ == '__main__':
    unittest.main()
