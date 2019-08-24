BEGIN;

DROP TABLE IF EXISTS cities CASCADE;

CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  city VARCHAR(70)
);

INSERT INTO cities (name, city) VALUES ('Mai', 'Gaza'), ('Noor', 'Ramallah');

COMMIT;