from locust import HttpUser, between, task

class WebsiteUser(HttpUser):
    wait_time = between(5, 15)
    
    def on_start(self):
        self.client.post("/login", {
            "username": "TestUser",
            "password": "testing123"
        })
    
    @task
    def index(self):
        self.client.get("/")
        
    @task
    def learning(self):
        self.client.get("/learning/")