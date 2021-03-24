from locust import HttpUser, TaskSet, between, task

class UserBehavior(TaskSet):
    def on_start(self):
        """ on_start is called when a Locust start before any task is scheduled """
        self.login()

    def login(self):
        response = self.client.get("/")
        csrftoken = response.cookies['csrftoken']
        self.client.post('/login/',{'username': 'TestUser', 'password': 'testing123'},headers={'X-CSRFToken': csrftoken})
       

    @task
    def index(self):
        self.client.get("/", name="/dashboard")
        
    @task
    def explore(self):
        self.client.get("/explore", name="/explore")

    @task
    def faq(self):
        self.client.get("/faq", name="/faq")

class WebsiteUser(HttpUser):
    tasks = [UserBehavior]
    min_wait = 5000
    max_wait = 9000