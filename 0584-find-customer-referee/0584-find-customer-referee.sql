# Write your MySQL query statement below
SELECT name
FROM customer
WHERE id NOT IN (SELECT id
FROM Customer
WHERE referee_id = 2)