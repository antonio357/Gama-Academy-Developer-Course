DROP TABLE IF EXISTS HERO_TABLE
CREATE TABLE HERO_TABLE (
    ID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    NAME TEXT NOT NULL,
    POWER TEXT NOT NULL
)

--create
INSERT INTO HERO_TABLE (NAME, POWER)
VALUES
    ('Flash', 'speed'),
    ('Batman', 'money'),
    ('Aquaman', 'water')

--read
SELECT * FROM HERO_TABLE
SELECT * FROM HERO_TABLE WHERE NAME='Aquaman'

--update
UPDATE HERO_TABLE
SET NAME = 'Link', POWER = 'Courage' 
WHERE ID = 1

--delete
DELETE FROM HERO_TABLE WHERE ID=3