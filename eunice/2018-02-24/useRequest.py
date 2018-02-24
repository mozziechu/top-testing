import requests
r = requests.get('https://api.github.com/user', auth=('1924264138@qq.com', 'wx@059506'))
print(r.status_code);
print(r.headers['content-type'])
print(r.encoding)
print(r.text)
print(r.json())