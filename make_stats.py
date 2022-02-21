import json
with open("profile.json", "r") as f:
    s = f.read()
profiles = json.loads(s)

users = list()
with open("usernames.txt", "r", encoding="utf8") as f:
    for ln in f:
        try:
            split = ln.split(",")
            u = {"id": split[0], "first": split[1], "last": split[2].replace("\n", "")}
            users.append(u)
        except:
            pass
with open("out.csv", "w+") as f:
    for p in profiles:
        for u in users:
            #print("comparing:", str(p["user_id"]), "with", u["id"])
            if p["user_id"] == int(u["id"]):
                output = p["title"] + ", " + u["first"] + " " + u["last"] + ", " + p["type"] + ", " + p["date_created"] + "\n"
                f.write(output)

