from flask import Flask, request, g
from flask_cors import CORS
import pymysql
import logging
import datetime

app = Flask(__name__)
CORS(app)


def connect_db():
    return pymysql.connect(
        host="localhost", user="root", db="portfolio", autocommit=True
    )


@app.before_request
def before_request():
    g.db = connect_db()
    g.cursor = g.db.cursor()


@app.teardown_request
def teardown_request(exception):
    if hasattr(g, "db"):
        g.db.close()
    if hasattr(g, "cursor"):
        g.cursor.close()


@app.route("/api/recommendations", methods=["GET"])
def getRecommendations():
    try:
        # SQL command
        cmd = "SELECT * FROM recommendations WHERE onShowcase=true;"

        # Execute the SQL command
        g.cursor.execute(cmd)

        # Get the data
        recommendations = g.cursor.fetchall()

        # Data processing
        final_recommendations = []
        for recommendation in recommendations:
            recommendation_dict = {
                "id": recommendation[0],
                "name": recommendation[1],
                "company": recommendation[3],
                "designation": recommendation[4],
                "recommendationMessage": recommendation[5],
            }
            final_recommendations.append(recommendation_dict)

        # Return the data
        return {"isSuccessful": True, "payload": final_recommendations}
    except:
        return {"isSuccessful": False, "payload": []}


@app.route("/api/skills", methods=["GET"])
def getSkills():
    try:
        cmd = "SELECT * FROM skills;"
        cursor = g.db.cursor()
        cursor.execute(cmd)
        skills = cursor.fetchall()
        final_skills = []
        for skill in skills:
            skill_dict = {
                "id": skill[0],
                "imageUrl": skill[1],
                "name": skill[2],
                "starsTotal": skill[3],
                "starsActive": skill[4],
            }
            final_skills.append(skill_dict)
        return {"isSuccessful": True, "payload": final_skills}
    except:
        return {"isSuccessful": False, "payload": []}


@app.route("/api/projects", methods=["GET"])
def getProjects():
    # try:
    cmd = "SELECT id, imageUrl, title, excerpt FROM projects WHERE onShowcase=true ORDER BY last_modified DESC;"
    cursor = g.db.cursor()
    cursor.execute(cmd)
    projects = cursor.fetchall()
    final_projects = []
    for project in projects:
        project_dict = {
            "id": project[0],
            "imageUrl": project[1],
            "title": project[2],
            "excerpt": project[3],
        }
        final_projects.append(project_dict)
    return {"isSuccessful": True, "payload": final_projects}


# except:
#     return {"isSuccessful": False, "payload": []}


@app.route("/api/blogs", methods=["GET"])
def getBlogs():
    # try:
    cmd = "SELECT id, imageUrl, title, excerpt FROM blogs WHERE onShowcase=true ORDER BY last_modified DESC;"
    cursor = g.db.cursor()
    cursor.execute(cmd)
    blogs = cursor.fetchall()
    final_blogs = []
    for blog in blogs:
        blog_dict = {
            "id": blog[0],
            "imageUrl": blog[1],
            "title": blog[2],
            "excerpt": blog[3],
        }
        final_blogs.append(blog_dict)
    return {"isSuccessful": True, "payload": final_blogs}


# except:
#     return {"isSuccessful": False, "payload": []}


@app.route("/api/blog/add", methods=["POST"])
def addBlog():
    try:
        blog = request.json
        id = blog["id"]
        imageUrl = blog["imageUrl"]
        title = blog["title"]
        excerpt = blog["excerpt"]
        body = blog["body"]
        curr_datetime = datetime.datetime.now()
        cmd = f"INSERT INTO blogs VALUES(%s, %s, %s, %s, %s, true, %s);"
        cursor = g.db.cursor()
        cursor.execute(cmd, (id, imageUrl, title, excerpt, body, curr_datetime))
        return {"isSuccessful": True}
    except:
        return {"isSuccessful": False}
    finally:
        cursor.close()


@app.route("/api/project/add", methods=["POST"])
def addProject():
    try:
        project = request.json
        id = project["id"]
        imageUrl = project["imageUrl"]
        title = project["title"]
        excerpt = project["excerpt"]
        body = project["body"]
        curr_datetime = datetime.datetime.now()
        cmd = f"INSERT INTO projects VALUES(%s, %s, %s, %s, %s, true, %s);"
        cursor = g.db.cursor()
        cursor.execute(cmd, (id, imageUrl, title, excerpt, body, curr_datetime))
        return {"isSuccessful": True}
    except:
        return {"isSuccessful": False}
    finally:
        cursor.close()


@app.route("/api/recommendation/add", methods=["POST"])
def addRecommendation():
    try:
        recommendation = request.json
        id = recommendation["id"]
        name = recommendation["name"]
        email = recommendation["email"]
        company = recommendation["company"]
        designation = recommendation["designation"]
        recommendationMessage = recommendation["message"]
        cmd = f"INSERT INTO recommendations VALUES(%s, %s, %s, %s, %s, %s, false);"
        cursor = g.db.cursor()
        cursor.execute(
            cmd, (id, name, email, company, designation, recommendationMessage)
        )
        return {"isSuccessful": True}
    except:
        return {"isSuccessful": False}
    finally:
        cursor.close()


@app.route("/api/contact/add", methods=["POST"])
def addContact():
    try:
        contact = request.json
        name = contact["name"]
        email = contact["email"]
        description = contact["description"]
        curr_datetime = datetime.datetime.now()
        cmd = f"INSERT INTO contact VALUES(%s, %s, %s, %s);"
        cursor = g.db.cursor()
        cursor.execute(cmd, (name, email, description, curr_datetime))
        return {"isSuccessful": True}
    except:
        return {"isSuccessful": False}
    finally:
        cursor.close()


@app.route("/api/blog", methods=["GET"])
def getBlog():
    try:
        id = request.args.get("id")
        cmd = f"SELECT title, imageUrl, body FROM blogs WHERE id=%s;"
        cursor = g.db.cursor()
        cursor.execute(cmd, (id))
        blog = cursor.fetchone()
        blog_dict = {"title": blog[0], "imageUrl": blog[1], "body": blog[2]}
        return {"isSuccessful": True, "payload": blog_dict}
    except:
        return {"isSuccessful": False, "payload": {}}
    finally:
        cursor.close()


@app.route("/api/project", methods=["GET"])
def getProject():
    try:
        id = request.args.get("id")
        cmd = f"SELECT title, imageUrl, body FROM projects WHERE id=%s;"
        cursor = g.db.cursor()
        cursor.execute(cmd, (id))
        project = cursor.fetchone()
        project_dict = {"title": project[0], "imageUrl": project[1], "body": project[2]}
        return {"isSuccessful": True, "payload": project_dict}
    except:
        return {"isSuccessful": False, "payload": {}}
    finally:
        cursor.close()


if __name__ != "__main__":
    gunicorn_logger = logging.getLogger("gunicorn.error")
    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)
