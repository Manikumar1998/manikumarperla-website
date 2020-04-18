from flask import Flask, request
from flask_cors import CORS
import pymysql
import logging
from datetime import datetime

db_connection = pymysql.connect(
    host="localhost", user="root", password="", db="portfolio"
)
db_connection.autocommit(True)

app = Flask(__name__)

if __name__ != "__main__":
    gunicorn_logger = logging.getLogger("gunicorn.error")
    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)

CORS(app)


@app.route("/", methods=["GET"])
def home():
    return "HelloWorld"


@app.route("/skills", methods=["GET"])
def get_skills():
    get_skills_cmd = "SELECT * from skills;"
    try:
        cursor = db_connection.cursor()
        cursor.execute(get_skills_cmd)
        skills = cursor.fetchall()
        json_skills = list(
            map(
                lambda skill: {
                    "id": skill[0],
                    "imageUrl": skill[1],
                    "name": skill[2],
                    "starsTotal": skill[3],
                    "starsActive": skill[4],
                },
                skills,
            )
        )
        cursor.close()
        return {"successful": True, "payload": json_skills}
    except:
        return {"successful": False, "payload": {}}
    finally:
        cursor.close()


@app.route("/projects", methods=["GET"])
def get_projects():
    get_projects_cmd = (
        "SELECT * from projects WHERE onShowcase=true ORDER BY last_modified desc;"
    )
    try:
        cursor = db_connection.cursor()
        cursor.execute(get_projects_cmd)
        projects = cursor.fetchall()
        json_projects = list(
            map(
                lambda project: {
                    "id": project[0],
                    "imageUrl": project[1],
                    "title": project[2],
                    "excerpt": project[3],
                },
                projects,
            )
        )
        return {"successful": True, "payload": json_projects}
    except:
        return {"successful": False, "payload": {}}
    finally:
        cursor = db_connection.cursor()


@app.route("/project", methods=["GET"])
def get_project_from_id():
    id = request.args.get("id")
    get_project_from_id_cmd = f"SELECT * from projects WHERE id='{id}';"
    try:
        cursor = db_connection.cursor()
        cursor.execute(get_project_from_id_cmd)
        projects = cursor.fetchall()
        json_projects = list(
            map(
                lambda project: {
                    "id": project[0],
                    "imageUrl": project[1],
                    "title": project[2],
                    "excerpt": project[3],
                    "body": project[4],
                },
                projects,
            )
        )
        return {"successful": True, "payload": json_projects[0]}
    except:
        return {"successful": False, "payload": {}}
    finally:
        cursor.close()


@app.route("/project/add", methods=["POST"])
def add_project():
    req = request.json
    id = req["id"]
    imageUrl = req["imageUrl"]
    title = req["title"]
    excerpt = req["excerpt"]
    body = req["body"]
    last_modified = datetime.now()

    add_project_cmd = f"INSERT INTO projects values('{id}', \
        '{imageUrl}', '{title}', '{excerpt}', '{body}', true, '{last_modified}');"

    try:
        cursor = db_connection.cursor()
        cursor.execute(add_project_cmd)
        return {
            "successful": True,
            "message": "Added project successfully",
        }
    except:
        return {
            "successful": False,
            "message": "Oops! Something went wrong. Couldn't add the project",
        }
    finally:
        cursor.close()


@app.route("/blogs", methods=["GET"])
def get_blogs():
    get_blogs_cmd = (
        "SELECT * from blogs WHERE onShowcase=true ORDER BY last_modified desc;"
    )
    try:
        cursor = db_connection.cursor()
        cursor.execute(get_blogs_cmd)
        blogs = cursor.fetchall()
        json_blogs = list(
            map(
                lambda blog: {
                    "id": blog[0],
                    "imageUrl": blog[1],
                    "title": blog[2],
                    "excerpt": blog[3],
                },
                blogs,
            )
        )
        return {"successful": True, "payload": json_blogs}
    except:
        return {"successful": False, "payload": {}}
    finally:
        cursor = db_connection.cursor()


@app.route("/blog", methods=["GET"])
def get_blog_from_id():
    id = request.args.get("id")
    get_blog_from_id_cmd = f"SELECT * from blogs WHERE id='{id}';"
    try:
        cursor = db_connection.cursor()
        cursor.execute(get_blog_from_id_cmd)
        blogs = cursor.fetchall()
        json_blogs = list(
            map(
                lambda blog: {
                    "id": blog[0],
                    "imageUrl": blog[1],
                    "title": blog[2],
                    "excerpt": blog[3],
                    "body": blog[4],
                },
                blogs,
            )
        )
        return {"successful": True, "payload": json_blogs[0]}
    except:
        return {"successful": False, "payload": {}}
    finally:
        cursor.close()


@app.route("/blog/add", methods=["POST"])
def add_blog():
    req = request.json
    id = req["id"]
    imageUrl = req["imageUrl"]
    title = req["title"]
    excerpt = req["excerpt"]
    body = req["body"]
    last_modified = datetime.now()

    add_blog_cmd = f"INSERT INTO blogs values('{id}', \
        '{imageUrl}', '{title}', '{excerpt}', '{body}', true, '{last_modified}');"

    try:
        print("came here1")
        cursor = db_connection.cursor()
        cursor.execute(add_blog_cmd)
        return {
            "successful": True,
            "message": "Added Blog successfully",
        }
    except:
        print("came here")
        return {
            "successful": False,
            "message": "Oops! Something went wrong. Couldn't add the blog",
        }
    finally:
        cursor.close()


@app.route("/recommendations", methods=["GET"])
def get_recommendations():
    get_recommendations_cmd = "SELECT * from recommendations WHERE onShowcase=true;"
    try:
        cursor = db_connection.cursor()
        cursor.execute(get_recommendations_cmd)
        recommendations = cursor.fetchall()
        json_recommendations = list(
            map(
                lambda recommendation: {
                    "id": recommendation[0],
                    "name": recommendation[1],
                    "email": recommendation[2],
                    "company": recommendation[3],
                    "designation": recommendation[4],
                    "recommendationMessage": recommendation[5],
                },
                recommendations,
            )
        )
        return {"successful": True, "payload": json_recommendations}
    except:
        return {"successful": False, "payload": {}}
    finally:
        cursor.close()


@app.route("/recommendations/add", methods=["POST"])
def add_recommendations():
    req = request.json
    id = req["id"]
    name = req["name"]
    email = req["email"]
    company = req["company"]
    designation = req["designation"]
    recommendationMessage = req["recommendationMessage"]

    add_recommendations_cmd = f"INSERT INTO recommendations values('{id}', \
        '{name}', '{email}', '{company}', '{designation}', '{recommendationMessage}', true);"

    try:
        cursor = db_connection.cursor()
        cursor.execute(add_recommendations_cmd)
        return {
            "successful": True,
            "message": f"Hey {name}. Thank you so much for your message. I really appreciate it ♥",
        }
    except:
        return {
            "successful": False,
            "message": "Oops! Something went wrong. Couldn't send the message! :(",
        }
    finally:
        cursor.close()


@app.route("/client", methods=["POST"])
def new_client():
    return "Message received!"


if __name__ == "__main__":
    app.run(debug=True)
