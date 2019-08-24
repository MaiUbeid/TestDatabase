BEGIN;

DROP TABLE IF EXISTS cities CASCADE;

CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(50),
  city VARCHAR(70)
);

INSERT INTO cities (user_name, city) VALUES ('Mai', 'Gaza'),('Noor', 'Ramallah'),('Tala', 'Rafah');

COMMIT;