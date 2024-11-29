--Employees
CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  department_id INT
);

--departments
CREATE TABLE departments (
  department_id INT PRIMARY KEY,
  department_name VARCHAR(50)
);

--salaries
CREATE TABLE salaries (
  employee_id INT,
  salary DECIMAL(10, 2),
  FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

--projects
CREATE TABLE projects (
  project_id INT PRIMARY KEY,
  project_name VARCHAR(100),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

-- Inserting data into employees table
INSERT INTO
  employees (
    employee_id,
    first_name,
    last_name,
    department_id
  )
VALUES
  (1, 'John', 'Doe', 1),
  (2, 'Jane', 'Smith', 2),
  (3, 'Alice', 'Johnson', 1),
  (4, 'Bob', 'Williams', 3);

-- Inserting data into departments table
INSERT INTO
  departments (department_id, department_name)
VALUES
  (1, 'HR'),
  (2, 'Engineering'),
  (3, 'Sales');

-- Inserting data into salaries table
INSERT INTO
  salaries (employee_id, salary)
VALUES
  (1, 55000.00),
  (2, 75000.00),
  (3, 60000.00),
  (4, 40000.00);

-- Inserting data into projects table
INSERT INTO
  projects (project_id, project_name, department_id)
VALUES
  (1, 'Project Alpha', 1),
  (2, 'Project Beta', 2),
  (3, 'Project Gamma', 1),
  (4, 'Project Delta', 3);

--fetch data using joins
SELECT
  e.employee_id,
  e.first_name,
  e.last_name,
  e.department_id,
  d.department_name,
  s.salary,
  p.project_name
FROM
  employees e
  JOIN departments d ON e.department_id = d.department_id
  LEFT JOIN salaries s ON e.employee_id = s.employee_id
  LEFT JOIN projects p ON e.department_id = p.department_id
ORDER BY
  e.employee_id;