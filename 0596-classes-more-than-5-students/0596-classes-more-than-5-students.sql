# Write your MySQL query statement below
SELECT class
FROM (SELECT class, count(DISTINCT student) as students
FROM Courses
GROUP BY class) as temp_table
WHERE students >= 5;