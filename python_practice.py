users = [
    {"name": "A", "active": True},
    {"name": "B", "active": False},
    {"name": "C", "active": True}
]

active_users = []

for user in users:
  if user["active"] == True:
    active_users.append(user)

print (active_users)



