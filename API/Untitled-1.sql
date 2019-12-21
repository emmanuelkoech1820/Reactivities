-- SQLite
CREATE TABLE Activitie (
    Id GUID PRIMARY KEY,
    Title TEXT NOT NULL,
    Description TEXT NOT NULL,
    Category TEXT NOT NULL,
    Date DATETIME NOT NULL,
    City TEXT NOT NULL,
    Venue TEXT NOT NULL
);