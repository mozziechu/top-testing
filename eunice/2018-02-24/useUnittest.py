# 单元测试demo
import requests
import unittest

class GetEventListTest(unittest.TestCase):
  def setUp(self):
    self.url  = "http://127.0.0.1:8080/api/get_event_list/"
	
  #所有的方法以test开头
  def test_demo(self):
    r = requests.get(self.url, params={'eid':'1'})
    result = r.json()
    print(result)
    self.assertEqual(result['status'],200)
    self.assertEqual(result['message'],"success")
	
if __name__ == '__main__':
  unittest.main()