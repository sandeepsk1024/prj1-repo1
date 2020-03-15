# prj1-repo1
This repo is intended to be my starter template for ExpressJS - ReactJS projects

server
docker container rm prj1 --force

sudo docker image build -t prj1/server .
sudo docker container run -p 5000:8080 -d prj1/server


sudo docker image build -t prj1/main-db .
sudo docker container run -d -p 5001:27017 prj1/main-db

sudo docker image build -t prj1/session-db .
sudo docker container run -d -p 5002:27017 prj1/session-db