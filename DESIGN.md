### Summary:
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

The business will be able to create a new request for a delivery.


Couriers will be able to let us track their location in real time very (battery optimized).

## Actors:

### General User Features
- Auth:
   - Login
   - Register
   - Lost Password
   - Logout
   - Edit Profile

- Ratings:
   - Be rated

- Messages:
   - Send/Receive Messages

- Notifications:
   - Receive Notifications


### Courier Features
- Auth:
   - Register as Courier
      - Common user fields
      - Preferred cities
      - Live location permission
      - Terms of service

- Location:
   - Live Location
   - Setup preferred cities
   - Setup home address

- Deliveries:
   - Get notified of new deliveries where the pickup is near to the courier's current location and the delivery is in the courier's preferred cities or home address.
   - Accept/Reject delivery
   - See delivery details
      - business details
      - open waze
      - distance from me to the pickup
      - chat with the business in the delivery page (not for the mvp)
   - Update delivery status
      - Picked up
         - Add photo
      - Delivered
         - Add photo
      - Cancelled
   - See delivery history

### Business Features
- Auth:
   - Register as Business
      - Common user fields
      - Terms of service

- Deliveries:
   - Create new delivery
   - See all deliveries
   - See delivery details
      - courier details
      - delivery status
      - live map of the delivery
      - chat with the courier in the delivery page (not for the mvp)


Entities:
==========================

#### User
- email
- password
- first_name
- last_name
- phone_number
- profile_picture_url

#### UserLocation
- user_id: User
- waypoint: LatLon
- last_updated
- device_id?
- accuracy?
- speed?

#### Settlement
- name
- geo_fence

#### DeliveryStop
- waypoint: LatLon
- note
- sequence

#### DeliveryRequest
- created_by_id: User
- stops: DeliveryStop
- due_date: Date






#### Delivery
- delivery_request_id: DeliveryRequest
- courier_id: User
- status: DeliveryStatus
- pickup_time: Date
- delivery_time: Date
- delivery_photo_url: String


#### Rating
- created_by_id: User
- rated_user_id: User
- value
- comment
