conn = new Mongo("localhost:27017");
db = conn.getDB("admin")
print("authenticating")
db.auth('xxx','xxx');
db = db.getSiblingDB("copo_mongo")
db.Profiles.find({"date_created": {$gte:new ISODate("2021-03-01T00:00:00.000Z")}},{"title": 1, "date_created":1, "type":1, "user_id": 1}).toArray()