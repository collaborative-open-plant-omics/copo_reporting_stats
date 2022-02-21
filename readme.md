- change the date to the correct reporting period in RESEARCH_FISH_REPORT.js
- go to mongo server, and run the file:
	mongo < RESEARCH_FISH_REPORT.js > RESEARCH_FISH_REPORT.txt
- cat RESEARCH_FISH_REPORT.txt and copy to profile.json
- go to postgres, and run postgres \psql copo copo_user (you may need to enter the container as root)
- run "select (id, first_name, last_name) from auth_user;" and copy results into usernames.txt
- run make_stats.py 
	- this iterates every profile in profile.json, and outputs to out.csv, have looked up the correct username in usernames.txt

N.B. you may need to wrangle the data in usernames and profile.json a bit, things like "ISODate", "ObjectId" and "(,)" symbols.