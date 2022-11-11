# Write your MySQL query statement below
SELECT user_id, count(DISTINCT follower_id) as followers_count
FROM Followers
GROUP by user_id;