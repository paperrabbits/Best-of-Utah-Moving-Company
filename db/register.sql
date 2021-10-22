INSERT INTO employees(email, password)
VALUES($1, $2)
RETURNING employee_id, email, password;