SELECT * FROM employees e
JOIN accounts a ON e.employee_id = a.employee_id
WHERE email = $1;


-- SELECT * FROM players p
-- JOIN accounts a ON p.player_id = a.player_id
-- WHERE email = $1;