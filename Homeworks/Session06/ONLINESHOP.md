A. Bài tập chính (Online Shop):
🔶 API: Login
REQUEST:
Url: https://training.softech.cloud/api/training/users/login
Method: POST
Body (Raw, JSON):
{
"username": "tungnt@softech.vn",
"password": "123456789"
}
RESPONSE:
If success (status = 200):
{
"user": {
"id": 1,
"email": "tungnt@softech.vn",
"username": "tungnt",
"firstName": "Tony",
"lastName": "Woo",
"isActive": true
},
"access_token": "..."
}
If failed (status = 401):
{
"statusCode": 401,
"message": "Unauthorized"
}
🔶 API: List all categories (Authentication Bearer)
REQUEST:
Url: https://training.softech.cloud/api/training/users
Authorization: Bearer
Method: GET
RESPONSE:
[
{
"id": 1,
"name": "CPU",
"description": "Cac loai CPU cho may tinh"
},
{
"id": 2,
"name": "HDD",
"description": "Cac loai dia cung cho may tinh"
}
]
🔶 API: Get a category (Authentication Bearer)
REQUEST:
Url: https://server.aptech.io/training/categories/:id
Authorization: Bearer
Method: GET
Params: id = 1
RESPONSE:
{
"id": 1,
"name": "CPU",
"description": "Cac loai CPU cho may tinh"
}
🔶 API: Create a category (Authentication Bearer)
REQUEST:
Url: https://server.aptech.io/training/categories
Authorization: Bearer
Method: POST
Body:
{
"name": "Tên sản phẩm",
"description": "Mô tả ..."
}
RESPONSE:
If success:
Status = 201
{
"name": "Tên sản phẩm",
"description": "Mô tả ...",
"id": 1153
}
if failed:
Status = 400
Body:
{
"error": true,
"errorMessage": "Error: Violation of UNIQUE KEY constraint 'UQ_Categories_Name'..."
}
🔶 API: Update a category (Authentication Bearer)
REQUEST:
Url: https://server.aptech.io/training/categories/:id
Authorization: Bearer
Method: PATCH
Params: id
Body:
{
"name": "Tên sản phẩm",
"description": "Mô tả ..."
}
RESPONSE:
If success:
Status = 200
{
"id": 1137,
"name": "Sản phẩm 1031",
"description": "Mô tả ... 1137"
}
if failed:
Status = 410
🔶 API: Delete a category (Authentication Bearer)
REQUEST:
Url: https://server.aptech.io/training/categories/:id
Authorization: Bearer
Method: DELETE
Params: id
RESPONSE:
If success:
Status = 200
if failed:
Status = 410
