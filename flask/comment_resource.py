import pymysql
import os

class CommentResource:
    def __int__(self):
        pass

    @staticmethod
    def _get_connection():

        usr = "root"
        pw = "84443295412lx."
        h = "db6770.c4qfxod7s5ol.us-east-1.rds.amazonaws.com"

        conn = pymysql.connect(
            user=usr,
            password=pw,
            host=h,
            cursorclass=pymysql.cursors.DictCursor,
            autocommit=True
        )
        return conn

    def get_comments_by_blogID(blog_id):
        sql = "SELECT * FROM commentdb.comments WHERE blog_id=%s"
        conn = CommentResource._get_connection()
        cur = conn.cursor()

        try:
            cur.execute(sql, blog_id)
        except:
            return None
        
        result = cur.fetchall()
        return result

    # def delete_comment(blog_id, content):
    #     sql = "SELECT * FROM commentdb.comments WHERE blog_id=%s and content=%s"


    def get_comments_number(blog_id):
        sql = "SELECT COUNT(*) FROM commentdb.comments WHERE blog_id=%s"
        conn = CommentResource._get_connection()
        cur = conn.cursor()

        try:
            cur.execute(sql, blog_id)
        except:
            return None
        
        result = cur.fetchone()
        result = result["COUNT(*)"]
        return result
        