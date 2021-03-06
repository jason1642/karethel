# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 
User.create(username: "jason1642", email: "karethel@email.com", password: "pass123")
User.create(username: "Flip82", email: "flip@email.com", password: "password222")
User.create(username: "BryonSH321", email: "bryon@email.com", password: "password333")
User.create(username: "Lorinda", email: "lorinda@email.com", password: "password444")
User.create(username: "Alianda191", email: "jason@email.com", password: "password444")
User.create(username: "Brand", email: "brand@email.com", password: "password444")
User.create(username: "Exit", email: "exit@email.com", password: "password444")

p "#{User.count} user(s) created"
