import database_connection


@database_connection.connection_handler
def get_users(cursor):
    cursor.execute(
        """SELECT * FROM users"""
    )
    return cursor.fetchall()
