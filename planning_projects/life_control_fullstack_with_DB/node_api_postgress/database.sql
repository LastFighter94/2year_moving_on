-- int, smallint, real, double precision, char(N), varchar(N), date, time, timestamp, and interval
create TABLE days(
    id SERIAL PRIMARY KEY,
    date VARCHAR(255), -- потом другой тип можно сделать
    cigarettes INTEGER,
    hookah INTEGER,
    beer INTEGER,
    whiskey INTEGER,
    vodka INTEGER,
    youtube INTEGER,
    instagram INTEGER,
    vk INTEGER,
    porno BOOLEAN,
    yoga BOOLEAN,
    gym BOOLEAN,
    massage BOOLEAN,
    masturbate INTEGER,
    sex INTEGER
);

create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

create TABLE post (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);
