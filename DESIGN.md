Summary:
This platform will match 2 types of users: couriers and businesses.
Businesses will be able to post deliveries from point A to B.
The system will notify all relevant couriers of the new delivery.
Levels of relevancy:
1. Couriers with live location active and they are close to the pickup stop.
2. Couriers that setup relevant daily route eg. Ashdod <-> TLV - If the pickup/delivery is in radius of one of those cities the courier will be notified.
3. Couriers with only home address will get deliveries with pickups in their radius.
   This means that in the registration stage of the courier he will 3 stages:
1. Setup basic information.
2. Setup preferred cities.
3. Turn on live geolocation.

After a courier received a notification about a new delivery he will click it and get to the delivery page which will include:
1. Business name, image and rating (clicking the rating will open the rating page)

THe business will be able to create a new request for a delivery.


Couriers will be able to let us track their location in real time very (battery optimized).

General User Features:
- Auth:
- - Login
- - Register
- - Lost Password
- - Logout
- - Edit Profile

- Ratings:
- - Be rated

- Messages:
- - Send/Receive Messages

- Notifications:
- - Receive Notifications


Courier Features:
- Auth:
- - Register as Courier
- - - TDB

- Deliveries:
- - Get notified of new deliveries in my radius

Entities:
==========================

--- User
email
password
first_name
last_name
phone_number
profile_picture_url

--- UserLocation
user_id: User
waypoint: LatLon
last_updated
device_id?
accuracy?
speed?

--- Settlement
name
geo_fence


--- DeliveryRequest
created_by_id: User
stops: DeliveryStop
due_date: Date



--- Delivery

--- DeliveryStop
waypoint: LatLon
note
sequence


--- Rating
created_by_id: User
rated_user_id: User
value
comment
