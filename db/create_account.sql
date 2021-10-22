-- INSERT INTO accounts (employee_id, employee_name, phone, age, hire_date, position, role_type, mvp, ranking, active)
-- VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
-- RETURNING account_id, employee_name, phone, age, hire_date, position, role_type, mvp, ranking, active;

-- INSERT INTO accounts (player_id, cash, rank, win_loss)
-- VALUES ($1, 1000.00, 0, 0)
-- RETURNING account_id, cash, rank, win_loss;

INSERT INTO employees (email, password) 
VALUES ($1, $2);
-- RETURNING employee_id, email, password;