# DjangoDRFReact
> This project basically develop Django rest API (DRF) and React.js CRUD operation .

## Setup & dependencies

- Python 3.8.5
- Django 3.1.2
- Node v14.4.0
- Npm 6.14.8


The following steps will walk you thru installation on a Mac. Linux should be similar.
It's also possible to develop on a Windows machine, but I have not documented the steps.
If you've developed django-react apps on Windows, you should have little problem getting
up and running.

### Locally run the project.
If you run the project you local dev server please follow the command. If you follow the comman it will be run your development server. Open your terminal

###### Run the backend server
```
git clone https://github.com/mbrsagor/DjangoDRFReact.git
cd drf
virtualenv venv --python=python3.8
source venv/bin/activate
pip install -r requirements.txt
./manage.py migrate
./manage.py runserver
```
###### Rn the frontend server:
```
cd ..
cd frontend
yarn install
yarn start
```
