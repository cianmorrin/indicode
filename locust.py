from locust import HttpUser, TaskSet, task
from http import cookies
import requests

class UserActions(TaskSet):
    def on_start(self):
        client = requests.session()
        response = self.client.get("/")
        C = cookies.SimpleCookie()
        C["csrftoken"] = "iQZ1ORlffCTaDw3jT3Z9XxllxGZXe4YGv7TBnxr00xZpclU3oaWm8U7ISP65j9EP"
        print(C)
        self.client.post('/login/',
        {
         'username': 'TestUser',
         'password': 'testing123',
         'csrfmiddlewaretoken': C["csrftoken"]
        },
        headers={
        'X-CSRFToken': C["csrftoken"],
        'Referer': self.parent.host + '/login/'
        })
 
    @task(2)
    def index(self):
        self.client.get("/")
 
    @task(1)
    def learning(self):
        self.client.get("/learning")

class ApplicationUser(HttpUser):
    tasks = [UserActions]
    min_wait = 0
    max_wait = 500



    # https://indicode.digital/#
# http://localhost:8000/#