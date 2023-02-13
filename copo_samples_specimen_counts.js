DBQuery.prototype._prettyShell = true

conn = new Mongo("localhost:27017");
db = conn.getDB("admin")
db.auth('xxx','xxx');
db = db.getSiblingDB("copo_mongo") //db = conn.getDB("copo_mongo");


//x = db.SampleCollection.findOne({"biosampleAccession":"SAMEA14448781"}).pretty()y
x = db.Profiles.count({})
print("Number of Profiles: " + JSON.stringify(x))

x = db.SourceCollection.count({"sample_type":"dtol_specimen"})
print("DTOL Specimens: " + JSON.stringify(x))

x = db.SourceCollection.count({"sample_type":"asg_specimen"})
print("ASG Specimens: " + JSON.stringify(x))

x = db.SourceCollection.count({"sample_type":"erga_specimen"})
print("ERGA Specimens: " + JSON.stringify(x))

x = db.SampleCollection.count({"tol_project":"DTOL"})
print("DTOL Samples: " + JSON.stringify(x))
x = db.SampleCollection.count({"tol_project":"DTOL", "status":"accepted"})
print("Accepted DTOL Samples: " + JSON.stringify(x))
x = db.SampleCollection.count({"tol_project":"DTOL", "status":"pending"})
print("Pending DTOL Samples: " + JSON.stringify(x))
x = db.SampleCollection.count({"tol_project":"DTOL", "status":"rejected"})
print("Rejected DTOL Samples: " + JSON.stringify(x))

x = db.SampleCollection.count({"tol_project":"ASG"})
print("ASG Samples: " + JSON.stringify(x))
x = db.SampleCollection.count({"tol_project":"ASG", "status":"accepted"})
print("Accepted ASG Samples: " + JSON.stringify(x))
x = db.SampleCollection.count({"tol_project":"ASG", "status":"pending"})
print("Pending ASG Samples: " + JSON.stringify(x))
x = db.SampleCollection.count({"tol_project":"ASG", "status":"rejected"})
print("Rejected ASG Samples: " + JSON.stringify(x))


x = db.SampleCollection.count({"tol_project":"ERGA"})
print("ERGA Samples: " + JSON.stringify(x))
x = db.SampleCollection.count({"tol_project":"ERGA", "status":"accepted"})
print("Accepted ERGA Samples: " + JSON.stringify(x))
x = db.SampleCollection.count({"tol_project":"ERGA", "status":"pending"})
print("Pending ERGA Samples: " + JSON.stringify(x))
x = db.SampleCollection.count({"tol_project":"ERGA", "status":"rejected"})
print("Rejected ERGA Samples: " + JSON.stringify(x))
