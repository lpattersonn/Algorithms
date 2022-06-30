select name as Employee 
    from Employee as t
    where salary > (select salary from Employee where id=t.ManagerId);